import { combineReducers } from 'redux'
import cart from './cartReducer'
import auth from './authReducer'

export default combineReducers({
  cart,
  auth,
})
