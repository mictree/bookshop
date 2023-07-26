import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router-dom'
import { BOOK_DETAIL_PATH } from '../constants/path'
import { formatPrice } from '../utils/format'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartAction'

export default function BookCard({
	_id,
	thumbnailUrl,
	title,
	price,
	sale,
	sold,
}) {
	//
	const [visibleAddToCard, setVisibleAddToCard] = useState('hidden')
	const path = generatePath(BOOK_DETAIL_PATH, { id: _id })
	const dispatch = useDispatch()

	const onHover = () => {
		setVisibleAddToCard('block')
	}
	const onMouseOut = () => {
		setVisibleAddToCard('hidden')
	}

	const addToCCartClick = () => {
		dispatch(addToCart({ _id, thumbnailUrl, title, price, sale }, 1))
	}

	return (
		<div
			className='relative pd-6 m-1 bg-white rounded-lg hover:shadow hover:shadow-red-500'
			onMouseOver={onHover}
			onMouseOut={onMouseOut}>
			<div className='bg-orange-500 rounded-full px-1 py-2 m-1 text-white font-bold absolute text-right top-0 right-0'>
				<span>{Math.floor(sale * 100)}%</span>
			</div>
			<div className='book-content'>
				<Link className='hover:shadow' to={path}>
					<div>
						<img className='mx-auto max-h-[240px] max-w-[232px]' src={thumbnailUrl} alt='Image' />
					</div>
					<div className='pb-2 px-5 h-16 line-clamp-1'>{title}</div>
				</Link>
				<div className='flex'>
					<div className='w-60'>
						<div className=' text-orange-500 pl-4 font-bold'>
							{price? formatPrice(price * (1 - sale)):""} đ
						</div>
						<div className='line-through text-gray-400 pl-4'>
							{price ? formatPrice(price): ""} đ
						</div>
					</div>
				</div>
				<div className='progress bg-orange-500 rounded-full text-center m-3'>
					<span className='text-white'>Đã bán {sold}</span>
					<div className='progress-bar progress bg-red-500 rounded-full content-center m-3 w-full'></div>
				</div>
			</div>
			<div
				className={
					visibleAddToCard +
					' absolute bg-red-600 shadow shadow-red-500 p-1 w-full text-white text-center cursor-pointer'
				}
				onClick={addToCCartClick}
				style={{ left: '50%', transform: 'translateX(-50%)', bottom:'-1.5rem' }}>
				<span>Thêm vào giỏ hàng</span>
			</div>
		</div>
	)
}
