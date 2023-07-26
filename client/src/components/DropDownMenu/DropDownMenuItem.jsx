import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DropDownMenuItem({ children, link, onClickIn = () => {} }) {
	const onClick = () => {
		onClickIn()
		document
			.getElementById('dropdown-menu')
			.setAttribute('style', 'display: none')
	}
	return (
		<NavLink to={link}>
			<div
				style={{ zIndex: '100' }}
				onClick={onClick}
				className='block pb-2 pr-4 pl-3 text-lg text-gray-700 rounded w-40 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 active:text-orange-500 '>
				{children}
			</div>
		</NavLink>
	)
}
