import React from 'react';
import illustration from '../../assets/Illustration.png'
import { AiFillStar } from "react-icons/ai";

const FinishOrder = () => {
  return (
    <div className='md:hidden'>
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='h-10/12 w-full text-center'>
                <img src={illustration} alt="" className='w-48 h-48 m-auto' style={{borderRadius:'50%'}} />

                <h2 className='font-bolder text-4xl mt-4'> Thank You</h2>
                <h2 className='font-bolder text-4xl'> Order Completed</h2>

                <p className='text-lg mt-4 text-[#5e5e5e]'>Please rate your last Driver</p>

                <div className='flex text-center w-8/12 text-red-100 m-auto pt-6 text-3xl justify-between' style={{paddingTop:'10vh'}}>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>

                <div className='w-10/12 m-auto mt-4 text-center py-2 bg-[#54A5DA] rounded-3xl'>
                    <h2 className='text-white font-bold text-lg'>Delivered</h2>
                </div>

                {/* <div className=' w-3/5 flex justify-between m-auto' style={{paddingTop:'28vh'}}>
                    <img src={speaker} alt="" className='w-2/5'/>
                    <img src={close} alt="" className='w-2/5'/>
                </div> */}
            </div>
        </div>

    </div>
  )
}

export default FinishOrder