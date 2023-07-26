import React from 'react'
import BookCard from '../../components/BookCard'
import { v4 as uuidv4 } from 'uuid'

export default function Wishlist() {
	const book = {
		_id: '12',
		thumbnailUrl:
			'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_29246.jpg',
		title: 'Dạy sao cho trẻ nghe lời',
		price: 70000,
		sale: 0.3,
		sold: 10,
	}
	return (
		<>
			<div className='wrapper divide-y'>
				<div className='grid gap-4 p-5 m-5 sm:grid sm:grid-cols-5'>
					<h2 className='text-3xl font-bold text-center pt-5 sm:grid-cols-2 sm:col-span-5'>
						WishList
					</h2>
					<BookCard key={uuidv4()} {...book} />
					<BookCard key={uuidv4()} {...book} />
					<BookCard key={uuidv4()} {...book} />
					<BookCard key={uuidv4()} {...book} />
					<BookCard key={uuidv4()} {...book} />
					<BookCard key={uuidv4()} {...book} />
					<BookCard key={uuidv4()} {...book} />
				</div>
			</div>
		</>
	)
}
