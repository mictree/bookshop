import React from 'react'
import QuantityBox from '../BookDetail.jsx/QuantityBox'
import { formatPrice } from '../../utils/format'
import { useDispatch } from 'react-redux'
import { checkItemInCart, removeFromCart } from '../../redux/actions/cartAction'

export default function CartItem({
	_id,
	thumbnailUrl,
	title,
	price,
	sale,
	count,
	checked=false
}) {
	const dispatch = useDispatch()
	const onRemoveFromCart = () => {
		dispatch(removeFromCart(_id))
	}

	const onChecked = () => {
		dispatch(checkItemInCart(_id))
		// setIsChecked(!checked)
	}

	return (
		<>
			<div className='wrapper m-2 border-b-2'>
				<div className='container flex items-end py-4 gap-4 m-auto justify-center'>
					<div className='check-box-container my-auto'>
						<input
							type='checkbox'
							className='accent-red-500 w-5 h-4 mt-4 flex-1'
							checked={checked}
							onClick={onChecked}
						/>
					</div>
					<div className='image-container h-44 w-44 flex-2 my-auto'>
						<img className='max-w-[150px] max-h-[150px]' src={thumbnailUrl} />
					</div>
					<div className='info px-2 flex-2 w-64 my-auto'>
						<div className='pb-4'>
							<h2 className='text-lg max-w-xs'>
								<a>{title.length > 41 ? title.slice(0, 40)+ "..." : title}</a>
							</h2>
						</div>
						<div className='cart-price pt-20 w-44 flex-1 my-auto'>
							<div className='price-origin px-2 inline  font-medium text-xl'>
								<span>{formatPrice(price * (1 - sale))}</span>
							</div>
							<div className='price-old px-2 inline line-through text-gray-500 flex-1 text-sm'>
								<span>{formatPrice(price)} đ</span>
							</div>
						</div>
					</div>
					<div className='cart-number align-text-bottom my-auto flex-2'>
						<QuantityBox
							product_id={_id}
							className='pl-3 inline bottom-0'
							count={count}
						/>
					</div>
					<div className='price-total pl-2 inline bottom-0 text-red-500 font-bold text-lg flex-1 my-auto'>
						{formatPrice((1-sale)*price * count)}
					</div>
					<div className='flex-1 my-auto'>
						<img
							onClick={onRemoveFromCart}
							className='w-10 cursor-pointer'
							src='/icons/trashcan-icon.svg'
						/>
					</div>
				</div>
			</div>
		</>
	)
}
