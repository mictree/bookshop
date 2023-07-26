import api from "../constants/api";
import { LOGIN_LS } from "../constants/localStorage";
import { getLocalStorage } from "../utils/localStorageHandle";

const token = getLocalStorage(LOGIN_LS)
const config = {
    headers:{
        Authorization: `Bearer ${token?.accessToken}`
    }
}

const bookService = {
    getBook(page=1){
        return api.get('/admin/book?offset='+page, config)
    },
    getBookById(data){
        return api.get(`/admin/book/${data}`, config)
    },
    addBook(data){
        return api.post('admin/book/create', data, config)
    },
    updateBook(data){
        return api.put('admin/book/update', data, config)
    },
    deleteBook(id){
        return api.delete('admin/book/'+id, config)
    }
}

export default bookService