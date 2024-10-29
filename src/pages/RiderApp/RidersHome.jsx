import React, {useContext, useState} from 'react';
// import logo4 from '../../assets/melon2.png'
import call from '../../assets/Rcall.png'
import { FaBars } from "react-icons/fa";
import Modal from "react-modal";
import dummy from '../../assets/dummy.png';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { Link } from 'react-router-dom';
import bcall from '../../assets/blue call.png';
import cancel from '../../assets/Rcancel.png';
import { restaurantDatas } from './RidersArrayFiles';
import { RiderContext } from '../../Context/RiderContext';




const RidersHome = () => {

    const {storeItem} = useContext(RiderContext);

    // menubar modal

  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const toggleModal = () => {
    setMenuIsOpen(!isMenuOpen);
  };

//   menubar modal ends

// assistance call modal

const [isCall1Open, setCall1IsOpen] = useState(false);
const toggle1Modal = () => {
  setCall1IsOpen(!isCall1Open);
};

//   assistance call modal ends

//  call modal

const [isChoiceOpen, setChoiceIsOpen] = useState(false);
const toggle2Modal = () => {
setChoiceIsOpen(!isChoiceOpen);
};

//    call modal ends

    

    
// Restaurant modal ends


  return (
    <div className='md:hidden'>
        <div className='w-10/12 m-auto h-20 flex items-center' >
            <FaBars  onClick={() => {setMenuIsOpen(true);}}/>
            <h2 className='ml-6 text-lg font-bold'>Hello, welcome back! </h2>
        </div>

        <div className='w-full py-4 bg-[#FEFEFE] text-center'>

        {restaurantDatas && restaurantDatas.map(({id,bg,img,title,text1,text2},index)=>{

            return(

                <div className='w-11/12 m-auto mb-4' style={{backgroundImage: `url(${bg})`, height:'150px', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover', borderRadius:'30px' }} onClick={() => {storeItem(id)}}>
                    <Link to='/RidersC'><div className='w-full m-auto h-full flex items-center'>
                                <div className='w-2/5 text-center flex h-full'>
                                    <img src={img} alt=""  className='w-full m-auto' style={{ borderRadius:'50px'}}/>
                                </div>
                                
                                <div className='w-3/5'>
                                    <h2 className='text-2xl text-start font-bold text-white'>{title}</h2>
                                    <p className='text-lg text-white text-start'>{text1} </p>
                                    <p className='text-lg text-white text-start'> {text2}</p>

                                    
                                </div>
                            </div>
                    </Link>
                </div>

            )
            })}


            {/* menu modal starts */}

            <Modal
                isOpen={isMenuOpen}
                onRequestClose={toggleModal}
                contentLabel="Example Modal"
                className=" w-3/4 bg-white"
                style={{
                    overlay: {
                    position: "fixed",
                    top: '0px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "hsl(0, 0%, 0%, .2)",
                    zIndex: 2,
                    border:'none',
                    },
                }}


            >

                <div className='bg-white h-screen'>
                    <div className='w-11/12 m-auto mb-3 flex items-center py-3' style={{boxShadow: "0px 4px 12px rgba(68, 68, 68, 0.9);"}}>
                        <img src={dummy} alt=""  className='w-16 h-16' style={{borderRadius:'50%'}}/>
                        <div className='ml-3 pb-2' >
                            <h1 className='font-bold text-2xl'>Dennar Akuro</h1>
                            <p className='text-lg'>Bike Number:300YUKU</p>
                        </div>
                    </div>

                    <div className='w-full bg-[#9a989833] py-3'>

                        <div className='w-full m-auto bg-white flex rounded-lg items-center my-4 py-3'>
                            <BsFillPersonFill className='text-4xl ml-2'/>
                            <p className='text-2xl ml-4'>profile</p>
                        </div>

                        <div className='w-full bg-white m-auto flex items-center rounded-lg my-4 py-3'>
                            <BsFillBoxSeamFill className='text-4xl ml-2'/>
                            <p className='text-2xl ml-4'>carriage</p>
                        </div>

                        <div className='w-full bg-white m-auto flex items-center rounded-lg my-4 py-3'>
                            <AiFillSetting className='text-4xl ml-2'/>
                            <p className='text-2xl ml-4'>settings</p>
                        </div>

                    </div>
                    
                </div>
            </Modal>




            {/* modal for assistance call */}

            <Modal
                isOpen={isCall1Open}
                onRequestClose={toggle1Modal}
                contentLabel="Example Modal"
                className=" w-3/4 bg-white py-3"
                style={{
                    overlay: {
                    position: "fixed",
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    backgroundColor:'#fff',
                    // backgroundColor: "hsl(0, 0%, 0%, .9)",
                    zIndex: 2,
                    border:'none',
                    },
                }}


            >
                <div className='w-full fixed  ' style={{left:'0px', top:'40%'}}>
                    <div className='w-11/12 m-auto flex justify-between'>

                        <div className='w-2/5'>
                            <img src={bcall} alt="" className='w-3/5 m-auto' onClick={() => {
                                setChoiceIsOpen(true)
                                setCall1IsOpen(false);}}/>
                            <p className='text-center text-lg'>Call for Assistance</p>
                        </div>

                        <div className='w-2/5'>
                            <img src={cancel} alt="" className='w-3/5 m-auto' onClick={() => {setCall1IsOpen(false);}}/>
                            <p className='text-center text-red-500 text-lg'>Cancel</p>
                        </div>

                    </div>
                    
                </div>

            </Modal>



            {/* call modal */}

            <Modal
                isOpen={isChoiceOpen}
                onRequestClose={toggle2Modal}
                contentLabel="Example Modal"
                className=" w-full py-3 h-screen flex items-center"
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

                <div className='w-11/12 m-auto bg-white h-1/5 flex flex-col justify-between rounded-2xl py-3'>
                    <Link to='/VendorCallRinging' className='w-11/12 m-auto bg-blue-500 rounded-2xl text-center flex items-center justify-center' style={{height:'35%'}}>
                        <div  className='text-white text-lg' >
                            Call Vendor
                        </div>
                    </Link> 

                    <div className='w-11/12 m-auto bg-red-500 py-3 rounded-2xl text-center flex items-center justify-center' style={{height:'35%'}}>
                       <Link to='/AdminCallRinging'><span className='text-white text-lg'>Distress Call</span></Link> 
                    </div>

                </div>

             </Modal>   




           <div className='fixed w-2/5 text-end ' style={{bottom:'20px', right:'10px'}}>
                <img src={call} alt="" className='w-full' onClick={() => {setCall1IsOpen(true);}} />
          </div> 

        </div>

    </div>
  )
}

export default RidersHome

