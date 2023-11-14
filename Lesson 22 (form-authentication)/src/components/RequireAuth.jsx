import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
    const {auth} = useAuth()
    const Location = useLocation()
  return (

  )
}

export default RequireAuth