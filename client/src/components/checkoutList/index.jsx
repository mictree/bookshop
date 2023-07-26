import React from 'react'
import CheckoutItem from './CheckoutItem'
import { v4 as uuidv4 } from 'uuid'

export default function CheckoutList({data}) {
  return (
    <>
        {data.map(item => <CheckoutItem key={uuidv4()} {...item}/>)}
    </>
  )
}
