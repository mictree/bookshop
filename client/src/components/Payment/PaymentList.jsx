import React from 'react'
import { formatPrice } from '../../utils/format'
import PaymentItem from './PaymentItem'
import {v4 as uuidv4} from 'uuid'

export default function PaymentList({ data }) {
	console.log(data)
	return (
		<div className='border p-2 m-auto w-10/12 my-4'>
      <div className='text-orange-500 font-semibold'>Đơn hàng: #{data._id}</div>
			{data.order_items.map((item) => (
				  <PaymentItem key={uuidv4()} {...item} {...item.info} _id={item.info._id}/>
			))}
			<div className='w-3/12 ml-auto'>
					<div>
						<div>
							<span>Khuyến mãi: </span>
							<span>-10.0000đ </span>
						</div>
						<div className=''>
							<label>Thành tiền: </label>
							<span className='text-orange-500 font-bold'>
								{formatPrice(data.order_total_value)}đ &nbsp;
							</span>
							<span className='line-through'>
								{formatPrice(data.total)}đ
							</span>
						</div>
					</div>
					<div>
						<span>Tình trạng: </span>
						<span>{data.status}</span>
					</div>
					<div>
						Thanh toán:{' '}
						{data.is_paid ? 'Đã thanh toán' : 'Chưa thanh toán'}
					</div>
				</div>
			</div>

	)
}
