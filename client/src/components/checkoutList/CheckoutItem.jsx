import React from 'react'
import { formatPrice } from '../../utils/format'

export default function CheckoutItem({thumbnailUrl, price, sale, title, count}) {
	return (
		<>
      <div className='container flex gap-7 border-y rounded-lg m-auto p-2'>
        <div className='w-16'>
          <img src={thumbnailUrl}/>
        </div>
        <div className='flex-1'>{title?.length > 30 ? title?.slice(0, 30)+"..." : title}</div>
        <div className='flex gap-5 flex-1'>
          <div className='text-red-500 font-bold'>{formatPrice(price * (1-sale))}đ</div>
          <div className='line-through'>{formatPrice(price)}đ</div>
          <div>x {count}</div>
        </div>
        <div className='text-lg text-orange-600 font-bold'>{formatPrice(price * (1-sale)*count)}đ</div>
      </div>
		</>
	)
}
