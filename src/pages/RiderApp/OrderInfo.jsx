import React from 'react';
import back from '../../assets/back.png';
import { Link } from 'react-router-dom';


const OrderInfo = () => {

    const usersData = [
        {
            id:1,
            num:1,
            title:"Dennar Akuro",
            text1: "Golf Estate Off Odili Road PortHarcourt",
            tel:'08109830911'
        },
        {
            id:2,
            num:2,
            title:"Favour Uchendu",
            text1: "Rumuodara  Army Barracks Junction",
            tel:'08109830911'
        },
        {
            id:3,
            num:3,
            title:"Terrance Enini",
            text1: "Number 03 Stadium Road PortHarcourt",
            tel:'08109830911'
        },

        {
            id:4,
            num:4,
            title:"Sharon Victory",
            text1: "242nd St Tonganoxie, Kansas (KS), 66086",
            tel:'08109830911'
        },

        {
            id:5,
            num:5,
            title:"Dennar Akuro",
            text1: "Golf Estate Off Odili Road PortHarcourt",
            tel:'08109830911'
        },
    ]


  return (
    <div className='md:hidden'>
        <div className='w-11/12 m-auto h-20 flex items-center  justify-between' >
            <div className='w-1/5'>
                <img src={back} alt="" className=''/>
            </div>
            <div className='w-4/5 '>
                <h2 className=' text-2xl font-bold'> Your delivery </h2>
                
            </div>
            
        </div>

        <p className='text-end mr-4 text-lg text-[#54A5DA] pt-0 pb-2'>5 orders available</p>

        <div className='w-full py-4 bg-[#c9cccfcc] '>
            <div>
                {usersData && usersData.map(({num,title,text1,tel},index)=>{

                    return(

                        <div className='w-11/12 m-auto mb-4 bg-white py-2 rounded-2xl' style={{boxShadow:'0px 12px 24px rgba(68, 68, 68, 0.1)'}}>

                            <div className='w-11/12 m-auto'>
                                <div className='flex justify-between'>
                                    <div className='w-6 h-6 flex items-center justify-center rounded-lg' style={{border:'2px solid #DEDEDE'}}>
                                        <p>{num}</p>
                                    </div>
                                    <div className='ml-2 w-11/12'>
                                        <h2 className='text-lg font-bold'>{title}</h2>
                                        <p className=' text-[#5e5e5e]' style={{fonts:'14px'}}>{text1}</p>
                                        <p className=' text-[#54A5DA] mt-2'>{tel}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                
                    )
                })}

                <div className='fixed w-full text-center pt-4 bg-white py-4 ' style={{bottom:'20px', right:'0px'}}>
                    <p>Pick up confirmed please start delivery</p>
                    <div className='w-10/12 m-auto mt-2 bg-[#54A5DA] rounded-3xl py-2'>
                        <Link to='/TrackOrder'><button className='text-white font-bold text-2xl'>Start ride</button></Link>
                    </div>
                </div> 
            </div>

            
            

        </div>

    </div>
  )
}

export default OrderInfo