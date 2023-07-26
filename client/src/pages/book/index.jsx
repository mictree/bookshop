import React, { useEffect } from 'react'
import BookCard from '../../components/BookCard'
import Loading from '../../components/Loading'
import { useBooks } from '../../hooks/useBooks'

export default function Book() {
	const books = useBooks()

	useEffect(() => {
		// scroll to top when access this page
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	return (
		<div className='bg-white'>
		<div>
			<div>
				<label>Sắp xếp theo: </label>
				<select name='Sắp xếp theo'>
					<option>Bán chạy nhất</option>
					<option>Mới nhất</option>
					<option>Cũ nhất</option>
					<option>Giá tốt nhất</option>
				</select>
			</div>
		</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5 p-10'>
				{books ? (
					books.map((book) => <BookCard {...book} thumbnailUrl={book.imageUrl}/>)
				) : (
					<Loading />
				)}
			</div>
		</div>
	)
}
