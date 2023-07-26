import React from 'react'
import { generatePath, Link } from 'react-router-dom';
import { BOOK_DETAIL_PATH } from '../../constants/path';
import { formatPrice } from '../../utils/format';

export default function PaymentItem({_id, imageUrl, title, price, quantity, sale}) {
  const path = generatePath(BOOK_DETAIL_PATH, {id: _id})
	return (
		<>
      <div className='container flex gap-7 border-y rounded-lg m-auto p-2'>
        <Link to={path} className='w-24'>
          <img src={imageUrl || 'https://c8.alamy.com/comp/ECTX75/south-africa-20-twenty-rand-bank-note-ECTX75.jpg'}/>
        </Link>
        <Link to={path} className='flex-2'>{title || "title" }</Link>
        <div className='flex-2 flex gap-5'>
          <div className='text-red-500 font-bold'>{formatPrice(price*(1-sale)) ||"50.000"}đ</div>
          <div className='line-through'>{formatPrice(price) || "80.000"} đ</div>
          <div>x {quantity || 1}</div>
        </div>
        <div>
          <div className='text-orange-500 font-bold'>{formatPrice(price*quantity*(1-sale)) || "100.000"}đ</div>
          <div className='line-through'>{formatPrice(price*quantity) || "100.000"}đ</div>
          </div>
      </div>
		</>
	)
}
