import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { intiUser } from '../redux/actions/authAction'
import CustomDialog from '../components/CustomDialog'

export default function MainLayout() {
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(intiUser())
	}, [])

	return (
		<>
		<CustomDialog/>
			<Header />
			<div className='w-11/12 m-auto bg-gray-100 rounded-lg top-68 pb-5'>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
