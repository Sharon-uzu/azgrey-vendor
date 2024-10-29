import React from 'react';
import cardTick from '../../../assets/card-tick.png';
import {CallButton} from "../../../Components/ButtonComponent/RiderButton";
import profile from '../../../assets/profile.png'
import 'react-dropdown/style.css';

const Delivered = () => {

        const deliverList = [
          {
            id: 1,
            item1: "verification code",
            item2: "* * * * *",
            item3: "order number",
            item4: '* * * * *'
           
          },
          
        ];


  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse gap-4 bg-slate-100 h-auto justify-between w-11/12 md:w-9/12 m-auto md:pt-20">

      <div className='md:w-3/5'>
            <div className="mb-4   bg-white border-solid border-2 border-gray-500 rounded-2xl p-4">
              <div className='flex items-center mb-4 bg-white md:w-1/2 w-full '>
                        <img src={profile} alt="" className='w-6' />
                        <div className='ml-4'>
                          <p className='text-lg'>Sherini David</p>
                          <p>Gold customer</p>
                        </div>
                      </div>
              <p className="my-auto text-sm mb-4">
                Curabitur quisque suscipit sodales adipiscing. Orci enim ultrices et
                nulla diam tempus neque pharetra. Volutpat fringilla scelerisque
                pretium parturient. Risus lectus aliquet nullam adipiscing sed vita
              </p>
              <CallButton/>   
          </div>

          <div className=" bg-white border-solid border-2 border-gray-500 rounded-2xl p-4">
              <h2 className='font-bold text-lg mb-2'>Customer Details</h2>
              <p>Sharon</p>
              <p className='text-yellow-500'>Lagos street</p>
              <p>09163534526</p>
          </div>

        </div>



        <div className='md:w-2/5 '>
          {deliverList.map((data, index) => {
            return (
              <>
                <ul key={index} className="flex  w-full bg-white  m-auto border-solid border-2 border-gray-500 rounded-2xl py-4">
                
                  <li className="flex   flex-col justify-center items-center mx-auto">
                    <h2 className=" text-xl">{data.item1}</h2>
                    <p className="text-xl">{data.item2}</p>
                    <h2 className="text-xl">{data.item3}</h2>
                    <p className="text-xl">{data.item4}</p>
                  </li>
                </ul>

                <div className='flex items-center m-auto mt-6 bg-white  w-full  border-solid border-2 border-gray-500 rounded-2xl p-4'>
                  <img src={cardTick} alt="" className='w-6' />
                  <div className='ml-4'>
                    <p className='text-lg'>Transferred</p>
                    <p>order ID: 5674839393</p>
                  </div>
                </div>
              </>
            );
          })}

        </div>
          

          

      </div>
    </div>
  )
}

export default Delivered
