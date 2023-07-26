import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import {
	HOME_PATH,
	LOGIN_PATH,
	CART_PATH,
	PAYMENT_PATH,
	BOOK_PATH,
	BOOK_DETAIL_PATH,
	AUTHOR_PATH,
	AUTHOR_DETAIL_PATH,
	CATEGORY_PATH,
	CATEGORY_DETAIL_PATH,
	REGISTER_PATH,
	PROFILE_PATH,
	PAYMENT_HISTORY_PATH,
	WISHLIST_PATH,
	PUBLISHER_PATH,
	PUBLISHER_DETAIL_PATH,
	SEARCH_PATH,
	FORGET_PASSWORD_PATH,
} from './constants/path'
import Home from './pages'
import Login from './pages/login'
import Cart from './pages/cart'
import Payment from './pages/payment'
import BookDetail from './pages/book/[id]'
import Author from './pages/author'
import AuthorDetail from './pages/author/[id]'
import Category from './pages/category'
import Register from './pages/register'
import ProfileLayout from './layouts/ProfileLayout'
import Wishlist from './pages/profile/wishlist'
import CategoryDetail from './pages/category/[id]'
import Page404 from './pages/404.jsx'
import Publisher from './pages/publisher'
import PublisherDetail from './pages/publisher/[id]'
import Search from './pages/book/search'
import Profile from './pages/profile/index'
import PaymentHistory from './pages/profile/payment-history'
import ForgetPassword from './pages/forget-password'
import { DialogProvider } from './hooks/useDialog'
import { BookQuantityProvider } from './hooks/useBookQuantityDetail'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
	return (
		<DialogProvider>
			<Routes>
				<Route path={LOGIN_PATH} element={<Login />} />
				<Route
					path={PAYMENT_PATH}
					element={
						<ProtectedRoute>
							<Payment />
						</ProtectedRoute>
					}
				/>
				<Route path={REGISTER_PATH} element={<Register />} />
				<Route
					path={FORGET_PASSWORD_PATH}
					element={<ForgetPassword />}
				/>
				<Route element={<MainLayout />}>
					<Route path={HOME_PATH} element={<Home />} />
					<Route path={CART_PATH} element={<Cart />} />
					<Route path={SEARCH_PATH} element={<Search />} />
					<Route path={CART_PATH} element={<Cart />} />
					<Route />

					{/* Book path */}
					<Route path={BOOK_PATH}>
						<Route index element={<Search />} />
						<Route
							path={BOOK_DETAIL_PATH}
							element={
								<BookQuantityProvider>
									<BookDetail />
								</BookQuantityProvider>
							}
						/>
					</Route>
					{/* Profile path */}
					<Route
						element={
							<ProtectedRoute>
								<ProfileLayout />
							</ProtectedRoute>
						}>
						<Route path={PROFILE_PATH} element={<Profile />} />
						<Route path={WISHLIST_PATH} element={<Wishlist />} />
						<Route
							path={PAYMENT_HISTORY_PATH}
							element={<PaymentHistory />}
						/>
					</Route>

					<Route path={PUBLISHER_PATH}>
						<Route index element={<Publisher />} />
						<Route
							path={PUBLISHER_DETAIL_PATH}
							element={<PublisherDetail />}
						/>
					</Route>

					<Route path='*' element={<Page404 />} />
				</Route>
			</Routes>
		</DialogProvider>
	)
}

export default App
