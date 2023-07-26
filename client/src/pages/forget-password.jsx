import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'
import InputField from '../components/InputField'
import OtpInput from '../components/OtpInput'
import { HOME_PATH } from '../constants/path'

export default function ForgetPassword() {
	return (
		<>
			<main className='my-10 py-10 flex w-full items-center justify-center'>
				<div className='w-1/2 px-6 text-gray-800 flex justify-center'>
					<div className='justify-center items-center h-full g-6'>
						<Link
							to={HOME_PATH}
							className='justify-self-center self-center grow-0 shrink-1'>
							<img src='/vite.svg' className='w-80' />
							<h2 className='text-2xl text-center pt-2 text-gray-500 font-bold'>
								BookShop
							</h2>
						</Link>
					</div>
				</div>

				{/* <div className='flex flex-col mx-auto w-1/2 justify-center p-10'>
					<div className='text-center w-9/12 py-5 text-xl'>
						<h1>Nhập email bạn đã đăng ký để lấy mã OTP</h1>
					</div>
					<div className='w-9/12'>
						<InputField>Nhập email của bạn</InputField>
					</div>
					<Button className='w-9/12'>Xác nhận</Button>
				</div> */}

				<div className='flex flex-col mx-auto w-1/2 justify-center p-10'>
					<div className='text-center w-9/12 py-5 text-xl'>
						<h1>Nhập mã OTP bạn đã nhận được</h1>
					</div>
					<div className='w-9/12'>
						<OtpInput/>
					</div>
					<Button className='w-9/12'>Xác nhận</Button>
				</div>

			</main>
			<Footer />
		</>
	)
}
