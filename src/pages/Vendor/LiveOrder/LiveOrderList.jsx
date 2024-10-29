import React from 'react'
import riderTest from "../../../../src/assets/ride-removebg-preview.png"
import LiveOrderPreview from './LiveOrderPreview';


const LiveOrderList = () => {


    const VendorDataList = [
      {
      image: riderTest,
      name: "David Sharon",
      time: "2 mins ago",
        
      },
      {
      image: riderTest,
      name: "David Sharon",
      time: "2 mins ago",
      
      },
      {
      image: riderTest,
      name: "David Sharon",
      time: "2 mins ago",
      
      },
      {
      image: riderTest,
      name: "David Sharon",
      time: "2 mins ago",
      
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      },
      {
        image: riderTest,
        name: "David Sharon",
        time: "2 mins ago",
        
      }
  ];

  return (
    <div className=" flex pl-4">
        {/* OrderList */}
    <div className='w-3/5 flex flex-col justify-center '>
      <div className='flex items-center h-12'>
        <span className='ml-auto mr-8 text-red-500'>view All</span>
        <div className=' text-xl flex justify-center w-1/2 text-red-500'>20 march 2023</div>
      </div>
   

      <div style={{maxHeight:"35rem"}} className='grid md:grid-cols-2 grid-col-1 justify-evenly gap-4 border-solid border-r- overflow-y-scroll'>
      {VendorDataList?.map((orders)=>(

        <div style={{background:"hsla(0, 11%, 95%, 0.6)"}} className='w-11/12 sm:w-72 h-16  flex  rounded-lg items-center shadow-md'>
            <div className='w-12 h-12 mx-4 rounded-full border-2 border-black border-solid'>
            <img src={orders.image} alt="" className='w-full'/>
            </div>
            <ul>
                <li className='text-lg font-bold'>{orders.name}</li>
                <li className='text-red-500 text-sm'>{orders.time}</li>
            </ul>
        </div>
      ))}
      </div>
  
    </div>
    {/* Orders Account */}
    <LiveOrderPreview/>
    </div>
  )
}

export default LiveOrderList
