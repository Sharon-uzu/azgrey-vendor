import React, {useContext} from 'react';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { FaAngleLeft } from "react-icons/fa";
import location from '../../assets/Icon Location.png'
import { RiderContext } from '../../Context/RiderContext';
import { Link } from 'react-router-dom';

// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const PickUp = () => {

  const { orderItems} = useContext(RiderContext);


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });
      const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);


  return (
    <div className='md:hidden pick'>
        {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap 
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}

    <div className='fixed w-2/5 text-end ' style={{top:'20px', left:'20px'}}>
        {/* <img src={back} alt="" className='w-4' /> */}
        <Link to='/RidersC'><FaAngleLeft className='text-white text-4xl'/></Link>
    </div> 

    <div className='fixed w-full' style={{bottom:'12vh', left:'0px'}}>
      <div className='w-11/12 m-auto py-4 bg-[#ffffff99] rounded-lg'>
        <div className='w-11/12 m-auto flex bg-red'>
          <img src={location} alt="" className='w-14'/>
          <div className='ml-4'>
            <h2 className='font-bold text-2xl text-[#000]'>{orderItems.title}</h2>
            <p className='text-lg text-[#5e5e5e]'>{orderItems.title}</p>
          </div>
        </div>

        <div className='w-10/12 m-auto mt-4 text-center py-2 bg-[#54A5DA] rounded-3xl'>
          <Link to='/Location'><h2 className='text-white font-bold text-lg'>Ready for pick up</h2></Link>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default PickUp

// export default GoogleApiWrapper({
//   apiKey: 'TOKEN HERE'
// });
