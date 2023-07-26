import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Loading from '../../components/Loading'
import bookService from '../../services/bookService'
import Pagination from 'rc-pagination';
import './paginate-decor.less'
import { lazy } from 'react'

const BookCard = lazy(()=> import('../../components/BookCard'))


export default function Search() {
	const [books, setBooks] = useState()
	const [filter, setFilter] = useState({sort:''})
	const [searchParams, setSearchParams] = useSearchParams()
	const [currentPage, setCurrentPage] = useState(1)
	const [paginate, setPaginate] = useState({pageSize:10, totalPage:1, total:1})

	const fetchBooks = async () => {
		const data = await bookService.searchBook(`${searchParams}`)
		setBooks(data.data.book)
		setPaginate(data.data.paginate)
	}

	useEffect(()=>{
		document.title = 'Tìm kiếm - BookShop'
	}, [])

	useEffect(() => {
		// scroll to top when access this page
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		fetchBooks()
		console.log(paginate)
	}, [searchParams, currentPage, filter])

	const onChange = page => {
		setCurrentPage(page)
		searchParams.set('offset', page)
		setSearchParams(searchParams)
	  };

	const onChangeOrderBy = (event) => {
		let tmpFilter = filter
		tmpFilter.sort = event.target.value
		setFilter(tmpFilter)
		searchParams.set('sort', filter.sort)
		setSearchParams(searchParams)
	}

	const onChangePageSize = (event) => {
		let tmpFilter = filter
		tmpFilter.pageSize = event.target.value
		setFilter(tmpFilter)
		searchParams.set('page_size', event.target.value)
		setSearchParams(searchParams)
	}

	return (
		<>
		<main className='pb-5 bg-white rounded'>
			{/* filter */}

			<div className='filter-group flex gap-5 p-5'>
				<div>
					<label>Sắp xếp theo: </label>
					<select className='border border-black rounded-lg p-2' 
							name='Sắp xếp theo' 
							onChange={(event)=>onChangeOrderBy(event)}>
						<option value="none" selected disabled hidden>Sắp xếp theo</option>
						<option value='best-seller'>Bán chạy nhất</option>
						<option value='newest'>Mới nhất</option>
						<option value='oldest'>Cũ nhất</option>
						<option value='cheapest'>Giá tốt nhất</option>
						<option value='most-expensive'>Giá cao nhất</option>
					</select>
				</div>
				<div>
					<label>Số lượng </label>
					<select className='border border-black rounded-lg p-2' 
							name='Sắp xếp theo' 
							onChange={(event)=>onChangePageSize(event)}>
						<option selected value='15'>15 sản phẩm</option>
						<option value='20'>20 sản phẩm</option>
						<option value='30'>30 sản phẩm</option>
						<option value='40'>40 sản phẩm</option>
					</select>
				</div>
				{/* <div>
					<label>Mức giá </label>
					<select className='border border-black rounded-lg p-2' 
							name='Sắp xếp theo' 
							onChange={(event)=>onChangePrice(event)}>
						<option selected value=''>Mức giá</option>
						<option value='0,30000'>0 - 30,000đ</option>
						<option value='30000,50000'>30,000đ - 50,000đ</option>
						<option value='50000,100000'>50,000đ - 100,000đ</option>
						<option value='100000,200000'>100,000đ - 200,000đ</option>
						<option value='200000,999999999'>Hơn 200,000đ</option>
						
					</select>
			</div> */}

			</div>

			
			{searchParams.get('title')
			?
				<div className='text-2xl text-center p-5'>
				<span>Kết quả tìm kiếm cho: </span>
				<span className='font-bold text-orange-500'>
					"{searchParams.get('title')}"
				</span>
			</div>
			:
			""
			}
			<div className='p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8'>
				{books ? (
					books?.map((book) => (
						<BookCard
							key={uuidv4()}
							{...book}
							thumbnailUrl={book.imageUrl}
						/>
					))
				) : (
					<div className='col-span-full'>
						<Loading />
					</div>
				)}
			</div>

			{books?.length === 0 ? (
					<div className='text-3xl text-center pb-96'>Không tìm được kết quả nào! Thử tìm kiếm với từ khóa khác.</div>
				) : (
					''
				)}

		</main>
		<div className='text-center pt-10'>
		<Pagination
          onChange={onChange}
          current={currentPage}
          total={paginate.totalPage*10}
          showTitle={false}
        />
		</div>
		</>
	)
}
