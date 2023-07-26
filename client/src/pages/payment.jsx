import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header/Header'
import { useSelectUser } from '../redux/selectors/useSelectUser'
import { useCart } from '../redux/selectors/useCart'
import CheckoutList from '../components/checkoutList'
import { formatPrice } from '../utils/format'
import { Link, useNavigate } from 'react-router-dom'
import { CART_PATH, PAYMENT_HISTORY_PATH } from '../constants/path'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { newOrder } from '../redux/actions/orderAction'
import { DialogProvider, useDialog } from '../hooks/useDialog'
import { useMemo } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Payment() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {setIsOpenDialog, setDialogData} = useDialog()
	const [payment, setPayment] = useState('Cash')
	const [orderData, setOrderData] = useState({})

	const user = useSelectUser()
	const cart = useCart()
	const checkoutItems = cart.cart.filter(cartItem => cartItem.checked)
	const totalWithSale =  useMemo( () => checkoutItems.reduce(
		(acc, cartItem) =>
			acc + (1 - cartItem.sale) * cartItem.price * cartItem.count,
		0
	), [checkoutItems])

	useEffect(()=>{
		const items = checkoutItems.map(item => ( {id: item._id, quantity: item.count}))
		orderData.order_items = items
		orderData.address = user?.user.data.address
		orderData.payment_type = payment
		setOrderData(orderData)
		console.log(orderData);
	}, [payment])
	
	useEffect(()=>{
		if(checkoutItems.length <= 0)
			navigate(CART_PATH)
	}, [])

	const onPay = async() => {
		const res = await dispatch(newOrder(orderData))
		if(res === 'SUCCESS')
		{
			setDialogData({title: "Đặt hàng thành công", content: "Bạn đã đặt hàng thành công"})
			setIsOpenDialog(true)
			navigate(PAYMENT_HISTORY_PATH)

		}
		else
		{
			setDialogData({title: "Đặt hàng thất bại", content: "Đặt hàng thất bại"})
			setIsOpenDialog(true)
		}

	}

	const onPaymentChange = (event) => {
		setPayment(event.target.value)
	}


	return (
		<DialogProvider>
			<div>
			<Header />
			<div className='payment-form pb-20 m-auto w-9/12 mt-10'>
				<div className='rounded-lg bg-white'>
					<form>
						{user?.isLoggedIn ? (
							<div className='p-5 border-dashed border-b-2'>
								<div className='font-bold text-lg'>Địa chỉ giao hàng: </div>
								<div className='text-md'>{` ${user?.user.data.fullname} | ${user?.user.data.phone} | ${user?.user.data.address}`}</div>
								<div className='text-md'>Postal Code: {user?.user.data.postalCode}</div>
							</div>
						) : (
							<>
								Nothing
							</>
						)}
						<div className='p-2 pl-5'>
							<h1 className='font-bold text-lg'>Phương thức thanh toán</h1>
							<div></div>
							<div className='pt-5' onChange={(event) => onPaymentChange(event)}>
								<div className='flex gap-2'>
									<input
										type='radio'
										value='Cash'
										name='pay'
										checked={payment === 'Cash'}
										key={uuidv4()}
									/>
									<img
										className='w-10'
										src='/icons/cash-icon.svg'
									/>
									<label> Thanh toán khi nhận hàng</label>
								</div>
								<br />
								<div className='flex gap-2' value={payment}>
									<input
										type='radio'
										value='Momo'
										name='pay'
										checked={payment === 'Momo'}
										key={uuidv4()}
									/>
									<img
										className='w-10'
										src='/icons/cash-icon.svg'
									/>
									<label>Momo</label>
								</div>
								<br />
								<div className='flex gap-2'>
									<input
										type='radio'
										value='Bank'
										name='pay'
										key={uuidv4()}
										checked={payment === 'Bank'}
										
									/>{' '}
									<img
										className='w-10'
										src='/icons/credit-card.svg'
									/>
									<label>Ngân hàng</label>
								</div>
								<br />
							</div>
						</div>
					</form>

					<div className='p-5'>
						<div>Kiểm kê lại đơn hàng</div>
						<CheckoutList data={checkoutItems}/>
					</div>
				</div>
			</div>

			<div className='p-5 bg-white sticky bottom-0 px-20 shadow-xl text-end'>
				<div className='border-b-2 pb-2'>
					<div>
						<label>Thành tiền: </label>
						<span>{formatPrice( totalWithSale)}đ</span>
					</div>
					<div>
						<label>Phí giao hàng: </label>
						<span>12.000đ</span>
					</div>
					<div>
						<label className='font-bold'>Tổng tiền: </label>
						<span className='font-bold text-orange-600 text-lg'>{formatPrice( totalWithSale)}đ</span>
					</div>
					
				</div>
				<div className='pt-2 flex'>
						<Link to={CART_PATH}>🠔 Quay về giỏ hàng</Link>
						<Button
							className='ml-auto'
							onClick={onPay}>
							Thanh toán
						</Button>
					</div>
			</div>
			</div>
		</DialogProvider>
	)
}
