import React from 'react'
import { Outlet } from 'react-router-dom'

const Private = () => {
    console.log('user private route');
  return (
    <Outlet />
  )
}

export default Private