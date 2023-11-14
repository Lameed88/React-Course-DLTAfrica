import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth()
    const Location = useLocation()
  return (
    auth?.roles?.find(role => allowedRoles?.includes(role)) 
    ?
    <Outlet />
    :
    auth?.user
    ?
    <Navigate to='/unauthorized' state={{from: Location}} replace />
    :
    <Navigate to='/login' state={{from: location}} replace />

  )
}

export default RequireAuth