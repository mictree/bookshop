import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import userService from '../../services/userService';
// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", userService.getInfo);
}