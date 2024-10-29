import React from 'react';
import shopping from '../../../assets/shopping-bag.png';
import profile from '../../../assets/profile.png';
import logout from '../../../assets/export.png'

const RiderAccount = () => {
  return (
    <div className='md:w-11/12 ml-auto bg-gray-100 lg:h-auto h-screen'>
      <div className='bg-yellow-400 pt-8 mt-8 pb-6 text-center md:w-11/12'>
        <h2 className='text-3xl font-bold'>Hello, Rider!</h2>
      </div>

      <div className='w-11/12 m-auto mt-6'>
       
        <h2 className='font-bold text-2xl mb-14'>ACCOUNT</h2>
        <div className='ml-4'>

            <div className='flex items-center mb-12'>
              <img src={shopping} alt=""className=' ' />
                <span className='text-lg ml-2'>My Order</span>
            </div>
            <div className='flex items-center mb-12'>
              <img src={profile} alt="" />
                <p className='text-lg ml-2'>My Information</p>
            </div>
            <div className='flex items-center '>
              <img src={logout} alt="" />
                <p className='text-lg ml-2'>LogOut</p>
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default RiderAccount
