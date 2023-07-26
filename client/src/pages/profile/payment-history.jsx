import React from 'react'
import PaymentList from '../../components/Payment/PaymentList'
import { useOrder } from '../../hooks/useOrder'
import {v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom'
import { HOME_PATH } from '../../constants/path'

export default function PaymentHistory() {
	const {data, isLoading, error} = useOrder()
	const orders = data?.data
	// console.log(isLoading);

	if(!orders)
		return (
			<div className='bg-white rounded p-5'>
				<div className='p-5 text-xl text-center'>Chưa có đơn hàng</div>
				<div className='p-10 m-auto w-fit text-center'>
					<img className='p-2' src='/icons/ico_emptycart.svg' />
					<Link to={HOME_PATH}>
						<div className='p-2 border-2 border-orange-600 rounded-lg text-orange-700 hover:bg-orange-500 hover:text-white active:bg-orange-600 '>
							Đặt hàng ngay
						</div>
					</Link>
				</div>
			</div>
		)

	return (
		<div className='bg-white rounded p-5'>
			<div className='p-5 text-xl'>Lịch sử đơn hàng</div>
			{
				isLoading ? 
				"Loading" : 
				orders.map(order => <PaymentList key={uuidv4()} data={order}/>)
			}
			
		</div>
	)
}
