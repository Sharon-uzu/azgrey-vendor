import React, { useState} from 'react';
// import React, {useContext, useState} from 'react';
// import { RiderContext } from '../../Context/RiderContext';
import { Link } from 'react-router-dom';
import Modal from "react-modal";


const RiderUsersFile = ({item, index, arr, setArr, setQty, qty}) => {

    // const {usersData, restaurantDatas, orderItems, store2Item, order2Items} = useContext(RiderContext);

   const [isRejecting, setIsRejecting] = useState(false);
   const [isDisplaying, setIsDisplaying] = useState(true);

    const [isChoiceOpen, setChoiceIsOpen] = useState(false);
    const toggle2Modal = () => {
    setChoiceIsOpen(false);
    };

    // const [itemIndex, setItemIndex] = useState(index);

    
    const removeItemByIndex = (arr,index)=>{
        // const itemToRemove = arr.find((val,index) => index === indexToRemove)
        // console.log(itemToRemove);
        // if(itemToRemove){
        //     console.log(arr.filter(item => item !== itemToRemove))
        //     setChoiceIsOpen(false)
        //     return setArr(arr.filter(item => item !== itemToRemove))
        // }
        // else{
        //     return setArr(arr)
        // }
        
       setIsRejecting(true)
       setTimeout(function(){
        setChoiceIsOpen(false)
        setIsDisplaying(false)
        // setQty(qty-1)

    
        }, 1000)
        
        arr.splice(index, 1);
        setArr(arr)
        setQty(qty-1)
        console.log(arr);
        
    }
    // I am making corrections to  all your files so that i can host to netlify 
    //I have been telling you before any stuff you are not using don not import or use but you won't listen
    //Please comply with me avoid all this unessary usage
    removeItemByIndex(1,2)
   
    // combine

    // const double = (id) =>{
        // store2Item(id)
    //     console.log(id)
    //     setChoiceIsOpen(true)
    // }

    // const double2 = (id) =>{
        // store2Item(id)
        // removeData(id)
        setChoiceIsOpen(false)
    // }



  return (
    <div>
    
            <div  className='w-10/12 m-auto mb-4 bg-white py-2 rounded-2xl ' style={{boxShadow:'0px 12px 24px rgba(68, 68, 68, 0.1)', display:`${isDisplaying ? 'block' : 'none'}`}}
            // onClick={() => {double(itemIndex)}} 
            >

            {/* <div key={itemIndex} className='w-10/12 m-auto mb-4 bg-white py-2 rounded-2xl ' style={{boxShadow:'0px 12px 24px rgba(68, 68, 68, 0.1)', display:`${isDisplaying ? 'block' : 'none'}`}} onClick={() => {
                double(itemIndex)
                store2Item(index)
            }} > */}


                <div className='w-11/12 m-auto'>
                    <p className='text-[#5e5e5e]'>Send to</p>
                    <div className='flex justify-between'>
                        <div className='w-2/5'>
                            <img src={item.img} alt="" style={{height:'5rem', width:'5rem' , borderRadius:'5rem'}}/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold'>{item.title}{index}</h2>
                            <p className='text-lg'>{item.text1}</p>
                            <p className=' text-[#54A5DA] text-end'>{item.time}</p>
                        </div>
                    </div>

                </div>
            
            {/* modal for accepting and rejecting orders */}

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
                    backgroundColor: "hsl(0, 0%, 0%, .5)",
                    zIndex: 2,
                    border:'none',
                    
                    },
                }}
        >

            <div className='w-11/12 m-auto bg-white h-1/5 flex flex-col justify-between rounded-2xl py-3'>
                <Link to='/PickUp' className='w-11/12 m-auto bg-blue-500 rounded-2xl text-center flex items-center justify-center' style={{height:'35%'}}>
                    <div >
                        <p className='text-white text-lg' >Accept</p>
                    </div>
                </Link> 

                <button className='w-11/12 m-auto bg-red-500 py-3 rounded-2xl text-center flex items-center justify-center' style={{height:'35%'}}
                onClick={()=>{
                    
                    // removeItemByIndex(arr,itemIndex);
                    // setQty(qty-1)
                    }}>
                    <span className='text-white text-lg' 

                    >{isRejecting ? "Rejecting..."  : "Reject"}</span>
                </button>

            </div>

        </Modal>  


        {/* modal for accepting and rejecting orders ends */}

        </div>    
        </div>
        )}

export default RiderUsersFile