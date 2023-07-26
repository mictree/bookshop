import React from 'react'
import { Navigate } from 'react-router-dom'
import { HOME_PATH } from '../constants/path'
import { useSelectUser } from '../redux/selectors/useSelectUser'

export default function ProtectedRoute({children}) {
    const user = useSelectUser()
    if (!user.isLoggedIn) return <Navigate to={HOME_PATH}></Navigate>
    else 
    return children
}
