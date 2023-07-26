import api from '../constants/api'
import { LOGIN_LS } from '../constants/localStorageConstants'
import { getLocalStorage } from '../utils/localStorage'

const token = getLocalStorage(LOGIN_LS)
const config = {
	headers: { Authorization: `Bearer ${token?.accessToken}` },
}

const orderService = {
	getAllOrder() {
        if(!token) return null
		return api.get('/order', config)
	},
	addNewOrder(data){
        if (!token) return null
        return api.post('/order/create', data, config)
    },
    // getOrderbyId(){
    //     return api.get('/create')
    // }
}

export default orderService
