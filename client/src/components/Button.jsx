import React from 'react'

export default function Button({ children, onClick, type, className='' }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={className+' px-7 py-3 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out'}>
			{children}
		</button>
	)
}
