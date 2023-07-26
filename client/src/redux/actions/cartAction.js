import {
	ADD_ITEM_TO_CART,
	CHECK_ITEM_IN_CART,
	DECREASE_ITEM_IN_CART,
	INCREASE_ITEM_IN_CART,
	REMOVE_ITEM_IN_CART,
} from '../../constants/cartConstants'
import { CART_LS } from '../../constants/localStorageConstants'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

export const addToCart = (product, quantity) => async (dispatch) => {
	if (typeof dispatch === 'function') {
		let cart = getLocalStorage(CART_LS)
		if (cart === null) cart = []
		// check duplicated product
		const duplicates = cart.filter(
			(cartItem) => cartItem._id === product._id
		)
		if(duplicates.length > 0){
			const index = cart.indexOf(duplicates[0])
			cart[index].count += quantity
			setLocalStorage(CART_LS, cart)
			dispatch({
				type: INCREASE_ITEM_IN_CART,
				payload: cart,
			})
			
		}
		// console.log("Duplicated: ", duplicates, " ", product);
		if (duplicates.length === 0) {
			const productAdd = {
				...product,
				count: quantity,
				checked: false
			}

			cart.push(productAdd)
			// save to local storage
			setLocalStorage(CART_LS, cart)
			dispatch({
				type: ADD_ITEM_TO_CART,
				payload: cart,
			})
		}
	}
}

export const removeFromCart = (productId) => async (dispatch) => {
	const cart = getLocalStorage(CART_LS)
	const updatedCart = cart.filter((cartItem) => cartItem._id !== productId)
	console.log(updatedCart);
	setLocalStorage(CART_LS, updatedCart)

	dispatch({
		type: REMOVE_ITEM_IN_CART,
		payload: updatedCart,
	})
}

export const decreaseCartItemQuantity = (productId) => async (dispatch) => {
	const cart = getLocalStorage(CART_LS)
	const decreaseItem = cart.find((cartItem) => cartItem._id === productId)
	const index = cart.indexOf(decreaseItem)

	console.log('daata', decreaseItem)
	if (decreaseItem.count >= 1) {
		cart[index].count -= 1
		setLocalStorage(CART_LS, cart)
		dispatch({
		type: DECREASE_ITEM_IN_CART,
			payload: cart,
		})
	}
}

export const checkItemInCart = (productId) => async (dispatch) => {
	const cart = getLocalStorage(CART_LS)
	const checkItem = cart.find((cartItem) => cartItem._id === productId)
	const index = cart.indexOf(checkItem)
	cart[index].checked = !checkItem.checked
	setLocalStorage(CART_LS, cart)
	dispatch({
		type: CHECK_ITEM_IN_CART,
		payload: cart,
	})
	
}

export const increaseCartItemQuantity = (productId) => async (dispatch) => {
	const cart = getLocalStorage(CART_LS)
	const increaseItem = cart.find((cartItem) => cartItem._id === productId)
	const index = cart.indexOf(increaseItem)
	if (increaseItem.count >= 1) {
		cart[index].count += 1
		setLocalStorage(CART_LS, cart)
		dispatch({
			type: INCREASE_ITEM_IN_CART,
			payload: cart,
		})
	}
}
