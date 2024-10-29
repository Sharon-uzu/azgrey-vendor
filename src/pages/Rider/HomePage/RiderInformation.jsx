import React from 'react'
// import shopping from '../../../assets/shopping-bag.png';
import profile from '../../../assets/profile.png';
import arrow from '../../../assets/arrow-left.png'
import sms from '../../../assets/sms.png'
import lock from '../../../assets/lock.png'
import mobile from '../../../assets/mobile.png'
import wallet from '../../../assets/wallet-minus.png'
import book from '../../../assets/book.png'

const RiderInformation = () => {
  return (
    <div className='md:w-11/12 ml-auto bg-gray-100 lg:h-auto  pt-4 md:pt-8'>
        <div>
            <div className='flex items-center mb-12 pb-4 pl-4' style={{borderBottom:"2px solid gray", opacity:'.6'}}>
                <img src={arrow} alt=""className=' ' />
                <span className='text-lg ml-2'>My Information</span>
            </div>

            <div className='flex items-center mb-12 pl-6'>
                <img src={profile} alt="" />
                <p className='text-lg ml-2'>Sharon Eddy</p>
            </div>

            <div className='flex items-center mb-12 pl-6'>
                <img src={sms} alt="" />
                <p className='text-lg ml-2'>sharoneddy@gmail.com</p>
            </div>
            <div className='flex items-center mb-12 pl-6'>
                <img src={lock} alt=""className=' ' />
                <span className='text-lg ml-2'>Change Password</span>
            </div>
            
            <div className='flex items-center mb-12 pl-6'>
                <img src={mobile} alt="" />
                <p className='text-lg ml-2'>Change Phone Number</p>
            </div>

            <div className='flex items-center mb-12 pl-6'>
                <img src={wallet} alt="" />
                <p className='text-lg ml-2'>Payment Methods</p>
            </div>

            <div className='flex items-center pl-6'>
                <img src={book} alt="" />
                <p className='text-lg ml-2'>privacy policy</p>
            </div>

        </div>


    </div>
  )
}

export default RiderInformation
