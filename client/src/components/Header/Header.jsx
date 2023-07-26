import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
	createSearchParams,
	Link,
	NavLink,
	useNavigate,
} from 'react-router-dom'

import {
	BOOK_PATH,
	CART_PATH,
	CATEGORY_PATH,
	HOME_PATH,
	LOGIN_PATH,
	SEARCH_PATH,
} from '../../constants/path'
import { useSelectUser } from '../../redux/selectors/useSelectUser'
import { useTotalCartItem } from '../../redux/selectors/useTotalCartItem'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import './Header.css'

export default function Header() {
	const [cartCount, setCartCount] = useState(0)
	const count = useTotalCartItem()
	// className for NavLink using Tailwind
	const unActiveClassNameTW =
		'select-none cursor-pointer w-full h-full rounded  block text-lg text-gray-700 hover:text-orange-600 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 active:text-orange-500'
	const activeClassNameTW =
		'select-none cursor-pointer w-full h-full text-orange-500 border-b-4 border-orange-500 text-lg hover:text-orange-600'
	const navigate = useNavigate()
	const searchRef = useRef()
	const user = useSelectUser()

	const onSearch = (event) => {
		if (event.key === 'Enter') {
			navigate({
				pathname: SEARCH_PATH,
				search: `?${createSearchParams({
					title: searchRef.current.value.trim(),
				})}`,
			})
		}
	}

	useEffect(()=>{
		setCartCount(count)
	})

	return (
		<header className='header bg-orange-500 sticky z-50 top-0'>
			<div className='flex md:order-2 pr-3text-right text-white font-3xl'></div>
			<nav className='bg-inherit border-gray-200 px-2 sm:px-4 py-2.5 rounded relative'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<Link to={HOME_PATH} className='flex items-center pl-3'>
						<img
							src='/vite.svg'
							className='mr-3 h-6 sm:h-9'
							alt='Vite Logo'
						/>
						<span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
							BookShop
						</span>
					</Link>

					<div className='flex md:order-2 pr-3'>
						<button
							type='button'
							data-collapse-toggle='navbar-search'
							aria-controls='navbar-search'
							aria-expanded='false'
							className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'>
							<svg
								className='w-5 h-5'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
									clipRule='evenodd'
								/>
							</svg>
							<span className='sr-only'>Tìm...</span>
						</button>
						<div className='hidden relative md:block'>
							<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
								<svg
									className='w-5 h-5 text-gray-500'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
										clipRule='evenodd'
									/>
								</svg>
								<span className='sr-only'>Search icon</span>
							</div>
							<input
								type='text'
								id='search-navbar'
								ref={searchRef}
								onKeyUp={onSearch}
								className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Tìm kiếm...'
							/>
						</div>
						<button
							data-collapse-toggle='navbar-search'
							type='button'
							className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='navbar-search'
							aria-expanded='false'>
							<span className='sr-only'>Open menu</span>
							<svg
								className='w-6 h-6'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>
					<div
						className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
						id='navbar-search'>
						<div className='relative mt-3 md:hidden'>
							<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
								<svg
									className='w-5 h-5 text-gray-500'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
							<input
								type='text'
								id='search-navbar'
								className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Search...'
							/>
						</div>
						<ul className='flex p-3 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
							<li className='rounded transition duration-150 ease-out hover:ease-in'>
								<NavLink
									onClick={(ev) => ev.stopPropagation()}
									to={HOME_PATH}
									end
									className={({ isActive }) =>
										isActive
											? activeClassNameTW
											: unActiveClassNameTW
									}>
									Trang chủ
								</NavLink>
							</li>

							<li className='rounded '>
								<NavLink
									to={BOOK_PATH}
									className={({ isActive }) =>
										isActive
											? activeClassNameTW
											: unActiveClassNameTW
									}>
									Sách
								</NavLink>
							</li>

							{/* <li className='rounded '>
								<NavLink
									to={CATEGORY_PATH}
									className={({ isActive }) =>
										isActive
											? activeClassNameTW
											: unActiveClassNameTW
									}>
									Thể loại
								</NavLink>
							</li> */}


							<li className='select-none cursor-pointer rounded flex'>
								{user.isLoggedIn ? (
									<DropDownMenu title='Tài khoản' {...user.user.data}></DropDownMenu>
								) : (
									<li className='rounded '>
										<NavLink
											to={LOGIN_PATH}
											className={unActiveClassNameTW}>
											Đăng nhập
										</NavLink>
									</li>
								)}
							</li>

							<li className='rounded px-2'>
								<NavLink
									to={CART_PATH}
									className={({ isActive }) =>
										isActive
											? activeClassNameTW
											: unActiveClassNameTW
									}>
									<div className='relative'>
										<div className='w-7'>
											<img src='/icons/cart-icon.svg' />
										</div>
										<div className='absolute bg-red-500 text-white border border-white text-sm px-2 rounded-full left-1/2 top-1/2'>
											{cartCount || 0}
										</div>
									</div>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
