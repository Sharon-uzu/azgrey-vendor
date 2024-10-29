import React from 'react';
import dummy from '../../assets/image 52.png'
import speaker from '../../assets/Mute Icon.png';
import close from '../../assets/Close Icon.png';
import { Link } from 'react-router-dom';

const AdminCall = () => {
  return (
    <div className='md:hidden'>
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='h-10/12 w-full text-center'>
                <img src={dummy} alt="" className='w-40 h-40 m-auto' style={{borderRadius:'50%'}} />

                <h2 className='font-bolder text-4xl mt-4'>Admin</h2>

                <p className='text-2xl mt-4 text-[#5e5e5e]'>12 : 30 min</p>

                <div className=' w-3/5 flex justify-between m-auto' style={{paddingTop:'28vh'}}>
                    <img src={speaker} alt="" className='w-4/12'/>
                    <Link to='/RidersHome'><img src={close} alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCall