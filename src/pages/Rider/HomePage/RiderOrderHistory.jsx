import React from 'react'
import { Outlet } from 'react-router-dom'

const RiderOrderHistory = () => {
  return (
    <div className='pt-10 w-9/12 m-auto '>
      <div className='flex justify-between bg-white  p-6 rounded-xl'>
        <span className='text-yellow-600'>PENDING</span>
        <span>ACCEPTED</span>
        <span>COMPLETED</span>
      </div>
      <Outlet/>
    </div>
  )
}

export default RiderOrderHistory
