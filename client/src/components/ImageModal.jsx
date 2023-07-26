import React from 'react'

export default function ImageModal({ src, isShow, onClick }) {
	if (isShow)
		return (
			<div className='z-10 absolute w-fit left-1/2 '>
				<img className='relative left-[-50%] w-full' src={src}></img>
				<div
					className='absolute left-[45%] top-0 text-gray-500 cursor-pointer'
					onClick={onClick}>
					x
				</div>
			</div>
		)
	else return null
}
