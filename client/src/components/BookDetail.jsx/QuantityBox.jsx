import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCartItemQuantity, increaseCartItemQuantity } from '../../redux/actions/cartAction'

export default function QuantityBox({ className, product_id, count, onChange }) {
	const ref = useRef()
	const dispatch = useDispatch()

	const onIncrease = () => {
		ref.current.value++
		dispatch(increaseCartItemQuantity(product_id))
	}
	const onDecrease = () => {
		if (ref.current.value > 1) {
			ref.current.value--
			dispatch(decreaseCartItemQuantity(product_id))
		}
	}

	return (
		<div className={className + ' p-2 text-center'}>
			<label className='pr-2 text-lg'>Số lượng</label>
			<div className=' border inline-block justify-center w-20 px-2 text-lg'>
				<button
					className='float-right text-gray-600 font-bold'
					onClick={onIncrease}>
					+
				</button>
				<input className='w-5 text-center' defaultValue={count} ref={ref} onChange={(ev) => onChange(ev)}/>
				<button
					className='float-left text-gray-600 font-bold'
					onClick={onDecrease}>
					-
				</button>
			</div>
		</div>
	)
}
