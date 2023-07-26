import api from '../constants/api'

const cartService = {
	getCart() {
		return api.get('/cart')
	},
	updateCart(){
        return api.post('/order/update')
    },
    // getOrderbyId(){
    //     return api.get('/create')
    // }
}

export default cartService
