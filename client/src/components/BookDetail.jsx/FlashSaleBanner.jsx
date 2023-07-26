import React from 'react'
import QuantityBoxDetail from './QuantityBoxDetail'

export default function FlashSaleBanner({
	sale = 0,
	price = 0
}) {
	const formatPrice = (string) =>
		string.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
	

	return (
		<div className='flash-sale'>
			<div className='flashsale-product'>
				<div className='flash-sale-last'>
					<div
						className='progress-bar'
						style={{ width: '20%' }}></div>
					<div className='w-full m-2 bg-orange-400 text-center text-white rounded-xl mx-auto'>
						Đã bán: 10
					</div>
				</div>
			</div>
			<div className='price-box-block'>
				<div className='price-box pb-2'>
					<span className='special m-2 text-3xl text-red-600 font-bold'>
						{formatPrice(price * (1 - sale))}đ
					</span>
					<span className='old m-2 line-through'>
						{formatPrice(price)}đ
					</span>
					<span className='discount m-2 p-0.5 text-center bg-red-500 text-white font-bold rounded'>
						-{Math.floor( sale * 100)}%
					</span>
				</div>
			</div>
			<div>
			<QuantityBoxDetail/>
			</div>
			<div>
			</div>
		</div>
	)
}
