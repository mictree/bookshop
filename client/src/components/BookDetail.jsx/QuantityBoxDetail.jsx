import React from 'react'
import { useBookQuantityDetail } from '../../hooks/useBookQuantityDetail'

export default function QuantityBoxDetail() {

	const {quantity, setQuantity} = useBookQuantityDetail()
	const onIncrease = () => {
		setQuantity(quantity+1)
	}
	const onDecrease = () => {
		if (quantity > 1) setQuantity(quantity-1)
	}

	return (
		<div className='p-2 flex w-6/12'>
			<label className='flex-1 pr-2 text-lg font-semibold text-gray-500'>
				Số lượng:{' '}
			</label>
			<div className='flex-1 w-1/12 text-center border inline-block justify-center px-2 text-lg'>
				<button
					className='float-right text-gray-600 font-bold'
					onClick={onIncrease}>
					+
				</button>
				<input
					id='quantity-input'
					className='w-10 text-center'
					value={quantity}
				/>
				<button
					className='float-left text-gray-600 font-bold'
					onClick={onDecrease}>
					-
				</button>
			</div>
		</div>
	)
}
