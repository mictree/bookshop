import React, { useEffect } from 'react'

export default function Author() {
  useEffect(() => {
    // scroll to top when access this page
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
      )
}, [])
  return (
    <div>Author</div>
  )
}
