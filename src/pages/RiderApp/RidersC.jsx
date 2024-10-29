import React, {useContext, useState} from 'react';
import back from '../../assets/back.png';

import call from '../../assets/Rcall.png';
import bcall from '../../assets/blue call.png';
import cancel from '../../assets/Rcancel.png'
import Modal from "react-modal";
import { Link } from 'react-router-dom';
// import { usersData } from './RidersArrayFiles';
import { RiderContext } from '../../Context/RiderContext';

import RiderUsersFile from './RiderUsersFile';



const RidersC = () => {

    const {usersData,  orderItems} = useContext(RiderContext);


    const [arr,setArr] = useState(usersData)
        // assistance call modal

       


    
        const [isCall1Open, setCall1IsOpen] = useState(false);
        const toggle1Modal = () => {
        setCall1IsOpen(!isCall1Open);
        };

    //   assistance call modal ends


    // order quantity

    const [qty, setQty] = useState(5);
        

    // combine

    // const double = (id) =>{
    //     store2Item(id)
    //     setChoiceIsOpen(true)
    // }

    // const double2 = (id) =>{
    //     store2Item(id)
    //     // removeData(id)
    //     setChoiceIsOpen(false)
    // }
    
  return (
    <div className='md:hidden'>

        <div className='w-11/12 m-auto h-20 flex items-center  justify-between' >
            <div className='w-1/5'>
                <Link to='/RidersHome'><img src={back} alt="" className=''/></Link>
            </div>
            
            
            <div className='w-4/5 '>
                <h2 className=' text-2xl font-bold'> {orderItems.title} </h2>
                <p className='text-lg text-[#5e5e5e]'>{orderItems.text1}</p>
            
            </div>
                

        </div>      
            
            
    

        <p className='text-end mr-4 text-lg text-[#54A5DA] pb-4'>{qty} orders available</p>

        <div className='w-full py-4 bg-[#c9cccfcc] '>
         
            <div>
            {arr?.map((item,index)=>{

        

                return(


                    <RiderUsersFile item={item} index={index}  arr={arr} setArr={setArr} setQty={setQty} qty={qty} 
                    // onClick={() => {store2Item(id)}}
                    />

                    )
            })}

            </div>
            
               



            {/* modal for assistance call */}

            <Modal
                isOpen={isCall1Open}
                onRequestClose={toggle1Modal}
                contentLabel="Example Modal"
                className=" w-3/4 bg-white py-3"
                style={{
                    overlay: {
                    position: "fixed",
                    top: '0px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#fff",
                    zIndex: 2,
                    border:'none',
                    },
                }}


            >
                <div className='w-full fixed ' style={{left:'0px', top:'40%'}}>
                    <div className='w-full m-auto flex justify-between'>

                        <div className='w-3/5'>
                            <button><img src={bcall} alt="" className='w-4/5'/></button>
                            <p className='text-center text-lg'>Call for <br/> Assistance</p>
                        </div>

                        <div className='w-2/5'>
                            <img src={cancel} alt="" className='my-3 w-full' onClick={() => {setCall1IsOpen(false);}}/>
                            <p className='text-center text-red-500 text-lg'>Cancel</p>
                        </div>

                    </div>
                
                </div>

            </Modal>
             

            
           
            

        </div>

        <div className='fixed w-2/5 text-end ' style={{bottom:'10px', right:'10px'}}>
                <img src={call} alt="" className='w-full' onClick={() => {setCall1IsOpen(true);}} />
          </div> 


    </div>
  )
}

export default RidersC