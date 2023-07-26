import React from 'react'
import CartItem from '../components/CartItem/CartItem'
import { v4 as uuidv4 } from 'uuid'
import { formatPrice } from '../utils/format'
import { Link, useNavigate } from 'react-router-dom'
import { HOME_PATH, PAYMENT_PATH } from '../constants/path'
import { useCart } from '../redux/selectors/useCart'

export default function Cart() {
	const cart = useCart()

	const checkoutItems = cart.cart.filter(cartItem => cartItem.checked)
	const totalWithSale = checkoutItems.reduce(
		(acc, cartItem) =>
			acc + (1 - cartItem.sale) * cartItem.price * cartItem.count,
		0
	)
	const total = cart.cart.reduce(
		(acc, cartItem) => acc + cartItem.price * cartItem.count,
		0
	)

	const navigate = useNavigate()

	const onClickPayment = () => {
		navigate()
	}

	const onCheckItem = (product_id) => {
		checkItemInCart(product_id)
	}

	return (
		<main className='m-auto bg-white rounded-xl'>
			{cart.cart.length ? (
				<>
					<div className='mx-auto my-5 font-normal text-xl w-8/12'>
						<div className='flex gap-5 text-lg rounded-xl border'>
							<div className='flex-initial w-2/6 text-right p-5'>
								<span>Sản phẩm</span>
							</div>
							<div className='flex-initial text-right w-4/12 p-5'>
								<span>Số lượng</span>
							</div>
							<div className='flex-initial text-right pl-10 p-5'>
								<span>Thành tiền</span>
							</div>
						</div>
						<div className='border rounded-xl mt-5'>
							{cart ? (
								cart.cart.map((cartItem) => (
									<CartItem key={uuidv4()} {...cartItem} />
								))
							) : (
								<div>Đăng tải</div>
							)}
						</div>
					</div>
					<div className='text-center w-8/12 mx-auto'>
						<div className='p-4'>
							<span className='text-xl font-bold p-4 '>
								Thành tiền
							</span>
							<span className='text-xl font-bold text-red-600 p-4'>
								{formatPrice(totalWithSale)} đ
							</span>
							<span className='text-lg line-through font-bold text-gray-600 p-4'>
								{formatPrice(total)} đ
							</span>
						</div>
						{checkoutItems.length > 0 ? 
						<button
							className='bg-red-600 text-white text-xl px-5 py-2 rounded-xl w-full m-5'
							onClick={() => navigate(PAYMENT_PATH)}>
							Thanh toán
						</button>
						:
						<button
						className='bg-gray-300 text-white text-xl cursor-not-allowed px-5 py-2 rounded-xl w-full m-5'
						disabled>
						Thanh toán
					</button>
						}
						
					</div>
				</>
			) : (
				<div className='p-10 m-auto w-fit text-center'>
					<div className='p-2'>Chưa có sản phẩm nào</div>
					<img className='p-2' src='/icons/ico_emptycart.svg' />
					<Link to={HOME_PATH}>
						<div className='p-2 border-2 border-orange-600 rounded-lg text-orange-700 hover:bg-orange-500 hover:text-white active:bg-orange-600 '>
							Mua ngay
						</div>
					</Link>
				</div>
			)}
		</main>
	)
}
