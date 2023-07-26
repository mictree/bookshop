import { CART_LS } from '../../constants/localStorageConstants'
import { ADD_ORDER } from '../../constants/orderConstants'
import orderService from '../../services/orderService'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

export const newOrder = (oderData) => async (dispatch) => {
	try {
		const { order_items } = oderData

		const cart = getLocalStorage(CART_LS)
		const updatedCart = cart.filter(
			(cartItem) =>
				order_items.indexOf({
					id: cartItem._id,
					quantity: cartItem.count,
				}) > 0
		)
		console.log(updatedCart)
		setLocalStorage(CART_LS, updatedCart)
		const res = await orderService.addNewOrder(oderData)
        console.log(res)

		if (res.data.message === 'Create new order') {
			dispatch({
				type: ADD_ORDER,
				payload: updatedCart,
			})
			return 'SUCCESS'
		} else {
			dispatch({
				type: ADD_ORDER_FAIL,
			})
			return 'FAIL'
		}
	} catch (err) {
        console.log(err)
		return 'ERROR'
	}
}
