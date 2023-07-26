import React from 'react'
import { useParams } from 'react-router-dom'

export default function AuthorDetail() {
  const {id} = useParams()
  return (
    <div>AuthorDetail + {id}</div>
  )
}
