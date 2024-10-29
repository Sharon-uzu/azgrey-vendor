import React, {useContext} from 'react';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { FaAngleLeft } from "react-icons/fa";
import location from '../../assets/Icon Location.png'
// import message from '../../assets/Icon Message.png'
// import { MdEmail } from "react-icons/md";
import { RiderContext } from '../../Context/RiderContext';

import { Link } from 'react-router-dom';

const Location = () => {

    const { orderItems} = useContext(RiderContext);


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });
      const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
      // const customMarker = {
      //   path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
      //   fillColor: "red",
      //   fillOpacity: 2,
      //   strokeWeight: 1,
      //   rotation: 0,
      //   scale: 1,
      // };
    


  return (
    <div className='md:hidden pick'>
        {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      >
        {/* <Marker
          position={{ lat: 18.52043, lng: 73.856743 }}
          icon={customMarker}
        /> */}
      </GoogleMap>

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
          <Link to='/OrderInfo'><h2 className='text-white font-bold text-lg'>Arrived</h2></Link>
        </div>
      </div>
    </div>
        

    </div>
  )
}

export default Location