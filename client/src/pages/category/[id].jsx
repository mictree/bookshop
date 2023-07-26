import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryDetail() {
  const {id} = useParams()

  return (
    <div>CategoryDetail + {id}</div>
  )
}
