import api from '../constants/api'
import { LOGIN_LS } from '../constants/localStorageConstants'
import { getLocalStorage } from '../utils/localStorage'

// const token = getLocalStorage(LOGIN_LS)
// const config = {
// 	headers: { Authorization: `Bearer ${token?.accessToken}` },
// }

const userService = {
	getInfo() {
		const token = getLocalStorage(LOGIN_LS)
		const config = {
			headers: { Authorization: `Bearer ${token?.accessToken}` },
		}
		if (!token) return null
		return api.get('/user/get-info', config)
	},

	changeInfo(data) {
		const token = getLocalStorage(LOGIN_LS)
		const config = {
			headers: { Authorization: `Bearer ${token?.accessToken}` },
		}
		return api.put('/user/update-info', data, config)
	},
}

export default userService
