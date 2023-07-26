import React from 'react'

const InputField = React.forwardRef( ({}, ref) => (
		<div className='mb-6'>
			<input
				ref={ref}
				type='text'
				className='border-0 border-b-2 border-dashed text-center text-otp tracking-otp form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none'
                maxLength='6'
			/>
		</div>
	)
)

export default InputField
