import api from '../constants/api'

const bookService = {
	getBook() {
		return api.get('/book')
	},
	getNewBook(){	
		return api.get('/book/new')
	},
	getBestSellerBook(){	
		return api.get('/book/best-seller')
	},
	getBookById(data) {
		return api.get(`/book/${data}`)
	},
	searchBook(data) {		
		return api.get(`/book/search?${data}`)
	},
}

export default bookService
