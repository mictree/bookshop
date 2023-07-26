import {INIT_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../../constants/authConstants'
import { USER_LS } from '../../constants/localStorageConstants'
import { getLocalStorage } from '../../utils/localStorage'

const user = getLocalStorage(USER_LS)
const initialUser = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null }


export default function authReducer (state = initialUser, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload.user,
			}
		case LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			}
		case INIT_USER:
			return{
				...state,
				user: action.payload.user
			}
		default:
			return state
	}
}
