import React, {useContext} from 'react';
import dummy from '../../assets/image 52.png'
import speaker from '../../assets/Speaker Icon.png';
import close from '../../assets/Close Icon.png';
import { Link } from 'react-router-dom';
import { RiderContext } from '../../Context/RiderContext';


const CallRinging = () => {
  const { order2Items} = useContext(RiderContext);


  return (
    <div className='md:hidden'>
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='h-10/12 w-full text-center'>
                <img src={dummy} alt="" className='w-40 h-40 m-auto' style={{borderRadius:'50%'}} />

                <h2 className='font-bolder text-4xl mt-4'>{order2Items.title}</h2>

                <p className='text-2xl mt-4 text-[#5e5e5e]'>Ringing.....</p>

                <div className=' w-3/5 flex justify-between m-auto' style={{paddingTop:'28vh'}}>
                    <img src={speaker} alt="" className='w-3/10'/>
                    <Link to ='/Call'><img src={close} alt="" className='w-full'/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CallRinging