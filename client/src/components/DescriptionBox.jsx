import React from 'react'
import { Parser } from 'html-to-react'
import { useState } from 'react'

export default function DescriptionBox({ content }) {
	const [isExpand, setIsExpand] = useState(false)

	return (
		<div>
			{!isExpand ? (
				<>
					<div className='description whitespace-pre-line line-clamp-6'>
						{Parser().parse(content)}
					</div>
                    <div className='text-center'>
					<button className='text-center w-fit p-2 border-orange-500 border rounded-lg text-orange-500'
                            onClick={() => {
                                setIsExpand(true)
                            }}>
						Xem thêm
					</button>
                    </div>
				</>
			) : (
                <>
                <div className='description whitespace-pre-line'>
                    {Parser().parse(content)}
                </div>
                <div className='text-center'>
                <button className='text-center m-auto w-fit p-2 border-orange-500 border rounded-lg text-orange-500'
                        onClick={() => {
                            setIsExpand(false)
                            window.scrollTo({
                                top: 10,
                                behavior: 'smooth',
                            })
                        }}>
                    Thu gọn
                </button>
                </div>
            </>
			)}
		</div>
	)
}
