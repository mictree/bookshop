import React, { useState } from 'react'
import reactDOM from 'react-dom'
import { useDialog } from '../hooks/useDialog'

export default function CustomDialog() {
    const {isOpenDialog, dialogData, setIsOpenDialog} = useDialog()
    const onClose = () => {
      setIsOpenDialog(false)
    }
  return reactDOM.createPortal(
    <div id="dialog" className='fixed pt-36 left-0 top-0 bg-gray-600/60 w-full h-full z-10' style={{display:isOpenDialog ? "block":"none"}}>
        <div className='bg-white top-0 w-6/12 mx-auto p-5 border rounded-lg'>
        <span onClick={onClose} className='float-right cursor-pointer'>&times;</span>
        <h1 className='text-lg font-semibold text-orange-600'>{dialogData.title}</h1>
        <p>{dialogData?.content}</p>
        <div className='pt-2 text-center'>
        <button onClick={onClose} className='px-5 font-bold'>OK</button>
        </div>
        </div>
    </div>,
    document.body
  )
}
