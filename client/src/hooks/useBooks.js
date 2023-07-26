import { useEffect, useState } from 'react'
import bookService from '../services/bookService'

export const useBooks = () => {
	const [books, setBooks] = useState(null)
	useEffect(() => {
		(async () => {
			try {
				const data = await bookService.getBook()
				setBooks(data.data.book)
			} catch (err) {
				console.log('Hook: useBooks', err)
			}
		})()

	}, [])
	return books
}
