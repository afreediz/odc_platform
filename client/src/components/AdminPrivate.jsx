import React from 'react'
import { Outlet } from 'react-router-dom'

const Private = () => {
    console.log('admin private route');
  return (
    <Outlet />
  )
}

export default Private