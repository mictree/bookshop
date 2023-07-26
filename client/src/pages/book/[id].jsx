import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/BookCard'
import FlashSaleBanner from '../../components/BookDetail.jsx/FlashSaleBanner'
import Loading from '../../components/Loading'
import { addToCart } from '../../redux/actions/cartAction'
import bookService from '../../services/bookService'
import { v4 as uuidv4 } from 'uuid'
import {
	BookQuantityProvider,
	useBookQuantityDetail,
} from '../../hooks/useBookQuantityDetail'
import DescriptionBox from '../../components/DescriptionBox'
import ImageModal from '../../components/ImageModal'

export default function BookDetail() {
	const { id } = useParams()
	const [book, setBook] = useState()
	const { quantity } = useBookQuantityDetail()
	const [bestSellerBook, setBestSellerBook] = useState([])
	const [isShowImage, setIsShowImage] = useState(false)

	const dispatch = useDispatch()

	const fetchBestSeller = async () => {
		const data = await bookService.getBestSellerBook()
		setBestSellerBook(data.data.book)
	}

	useEffect(() => {
		const onScroll = () => {
			if (!isShowImage) {
				setIsShowImage(false)
			}
		}
		// clean up code
		window.removeEventListener('scroll', onScroll)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])
	
	console.log(isShowImage);

	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		})

		bookService.getBookById(id).then((res) => {
			setBook(res.data.book)
		})

		fetchBestSeller()
	}, [id])

	const addToCartClick = () => {
		const { _id, imageUrl: thumbnailUrl, title, price, sale } = book
		dispatch(addToCart({ _id, thumbnailUrl, title, price, sale }, quantity))
	}

	return (
		<>
			<ImageModal
				src={book?.imageUrl}
				isShow={isShowImage}
				onClick={() => setIsShowImage(false)}
			/>
			<main className='px-5 rounded bg-gray-100'>
				<div
					className='rounded bg-white p-5'
					onScroll={() => console.log('scroll')}>
					<div className='flex'>
						<div className='image-all width:auto ml-0 flex-1 pl-40'>
							<div className='main-image align-middle inline-block'>
								<img
									onClick={() => setIsShowImage(true)}
									className='w-full max-w-[20rem] max-h-[20rem]'
									src={book?.imageUrl}
								/>
							</div>
						</div>

						<div className='book-detail p-2 flex-[1.5] ml-auto text-start pl-36'>
							<h1 className='text-3xl align-middle'>
								{book?.title}
							</h1>
							<div className=' m-2 p-2'>
								<div className='flex'>
									<div className='flex-2'>
										<span>Nhà cung cấp: </span>
										<span className='font-bold mr-5'>
											Minh Long
										</span>
									</div>
									<div className='author inline'>
										<span className='flex-1'>Tác giả:</span>
										<span className='font-bold'>
											{book?.author}
										</span>
									</div>
								</div>
								<div className='flex'>
									<div className='flex-2'>
										<span>Nhà xuất bản:</span>
										<span className='font-bold mr-5'>
											{book?.publisher}
										</span>
									</div>
									<div className='flex-1'>
										<span>Hình thức bìa:</span>
										<span className='font-bold'>
											Bìa Mềm
										</span>
									</div>
								</div>
							</div>
							<div>
								<FlashSaleBanner
									price={book?.price}
									sale={book?.sale}
								/>
							</div>
						</div>
					</div>
					<div className='ml-7 mt-5 flex gap-5 w-4/12'>
						<button
							className='flex-1 p-2 border border-red-600 text-red-500 rounded-md hover:bg-red-500 hover:text-white active:bg-red-600 active:text-white'
							onClick={addToCartClick}>
							Thêm vào giỏ hàng
						</button>
						<button className='flex-1 bg-red-500 text-white p-2 rounded-md hover:bg-red-400 active:bg-red-600'>
							<span> Mua ngay</span>
						</button>
					</div>
				</div>

				<div className='p-5 info-detail bg-white rounded mt-5'>
					<h1 className='font-bold'>Thông tin sản phẩm</h1>
					<table></table>
					<DescriptionBox content={book?.description} />
				</div>

				<div className='p-5 mt-5 bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8'>
					<h2 className='text-xl lg:text-2xl font-bold text-center pt-5 col-span-full'>
						Sản phẩm liên quan
					</h2>
					{bestSellerBook ? (
						bestSellerBook.map((book) => (
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
			</main>
		</>
	)
}
