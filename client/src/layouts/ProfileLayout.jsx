
import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CART_PATH, PAYMENT_HISTORY_PATH, PAYMENT_PATH, PROFILE_PATH, WISHLIST_PATH } from '../constants/path'
import { useSelectUser } from '../redux/selectors/useSelectUser'

export default function ProfileLayout() {
	const activeClassNameTW = " p-3 px-10 text-orange-500 border-b-4 border-orange-500 hover:text-orange-500"
	const unActiveClassNameTW = " p-3  px-10 hover:text-orange-500"
	const alternativeAvatar = 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

	useEffect(() => {
		// scroll to top when access this page
		window.scrollTo(0, 0)
	}, [])
	const user = useSelectUser()
	return (
		<div className='mx-5'>
			<div className='my-2 rounded items-center text-center border bg-white'>
				<div className=''>
					<img className='block m-auto w-48 h-48 border rounded-image object-contain' src= {user?.user.data.avatarUrl || alternativeAvatar}
                  alt='Image'/>
				</div>
				<div className='text-2xl p-4'>{user?.user.data.fullname}</div>
			</div>
			<div className="p-3 bg-white grid-cols-3 items-stretch text-center text-xl border rounded">
				<NavLink to={PROFILE_PATH} end className={({ isActive }) => isActive ? activeClassNameTW : unActiveClassNameTW}>Thông tin</NavLink>
				<NavLink to={WISHLIST_PATH} className={({ isActive }) => isActive ? activeClassNameTW : unActiveClassNameTW}><span> Wishlist</span></NavLink>
				{/* <NavLink to={CART_PATH} className={({ isActive }) => isActive ? activeClassNameTW : unActiveClassNameTW}>Giỏ hàng</NavLink> */}
				<NavLink to={PAYMENT_HISTORY_PATH} className={({ isActive }) => isActive ? activeClassNameTW : unActiveClassNameTW}>Đơn hàng</NavLink>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	)
}
