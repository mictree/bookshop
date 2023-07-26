import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { CATEGORY_DETAIL_PATH } from '../constants/path'

export default function CategoryCard({ title, description, children }) {
	const path = generatePath(CATEGORY_DETAIL_PATH, { id: title })

	return (
		<div className='m-2 border border-orange-500 rounded'>
			<h2 className='pt-5 text-2xl font-bold text-center'>{title}</h2>
			<p className='justify-start p-5'>{description}</p>
			<div className='grid gap-4 p-5 m-5 sm:grid sm:grid-cols-5'>{children}</div>
			<div className='text-orange-500 text-center text-xl hover:underline'>
			<Link to={path}>Xem thêm</Link>
			</div>
		</div>
	)
}
