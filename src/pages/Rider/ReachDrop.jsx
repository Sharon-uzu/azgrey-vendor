import React from 'react'
import RiderButton from "../../Components/ButtonComponent/RiderButton"
import {CallButton} from "../../Components/ButtonComponent/RiderButton"
import chart from '../../assets/chart.png'
import profile from '../../assets/profile.png'

const ReachDrop = () => {
  return (
    <div className="md:mt-4 md:w-11/12 m-auto flex  flex-col justify-around md:pt-12 items-center gap-8  bg-slate-100">
      <div className='w-11/12 m-auto md:flex justify-around md:pt-8'>

      
          <div className=" w-full md:w-5/12  px-4 py-8 flex flex-col mb-4 bg-white rounded-3xl">
            <h2 className=" mb-2  md:text-4xl text-2xl  w-52">
              <span className="md:text-3xl text-2xlg font-bold">Sherini David</span></h2>
            <p className=" text-lg mb-4">
            Faucibus sollicitudin et eros aenean. Malesuada eu egestas erat felis massa felis ultricies feugiat diam. Risus mattis magna viverra diam.
            </p>
            <CallButton/>   
          </div>
        <div className='md:w-5/12 '>
          <div className='text-start mx-auto px-4 py-8 md:mb-4  bg-white rounded-3xl'>

            <div className='flex mb-2'>
              <img src={chart} alt="" />
              <span className='ml-4'>order ID: 5674839393</span>
            </div>

            
            <div className='flex'>
              <img src={profile} alt="" />
              <span className='ml-4'>Sherini David</span>
            </div>
          </div>
            <RiderButton buttonName="Reached Drop Location" />
          </div>
         
        </div>
      
    </div>
  )
}

export default ReachDrop
