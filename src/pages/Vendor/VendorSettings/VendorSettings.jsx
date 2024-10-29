import React from "react";
import bag from "../../../assets/f1dc3c1262230b2b.png"
const VendorSettings = () => {
  return (
    <div className="flex justify-around  ">
      <div className="flex flex-col items center w-2/5 h-full ">
        <ul className="flex h-16 items-center gap-4">
          <li  
          className="h-6 text-white  w-6 rounded-full flex items-center justify-center"
          style={{backgroundColor: "hsla(0, 100%, 61%, 0.8)"}}>1</li>
          <li className="text-xl">Profile</li>
        </ul>
        <form className="h-4/6 flex flex-col justify-between ">
          <div className="flex flex-col py-2 w-full gap-2 ">
            <label htmlFor="email" className="ml-6">
              Your Email
            </label>
            <input
              style={{background: "hsla(0, 0%, 95%, 1)"}}
              type="email"
              name=""
              id="email"
              className="h-12 bg-gray-300 w-11/12 mx-auto rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2 w-full  py-2">
            <label htmlFor="address" className="ml-6 ">
              Your Phone Number
            </label>
            <div className="flex justify-around w-full">
              <input
                style={{background: "hsla(0, 0%, 95%, 1)"}}
                type="text"
                name="countryCode"
                value=""
                placeholder="+234"
                id="countryCode"
                className="bg-gray-300 w-1/6 h-12 rounded-xl text-center"
              />
              <input
                style={{background: "hsla(0, 0%, 95%, 1)"}}
                type="text"
                name="address"
                id="address"
                className="bg-gray-300 h-12 w-8/12 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col  justify-between  py-2 gap-2">
            <label htmlFor="phone" className="ml-6">
              Your Address
            </label>
            <input
              style={{background: "hsla(0, 0%, 95%, 1)"}}
              type="tel"
              name="phone"
              id="phone"
              className="bg-gray-300 w-11/12 h-12 mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 w-full py-2 mb-6 ">
            <label htmlFor="catchPhrase" className="ml-6">
              Your Simple Catch Phrase
            </label>
            <input
            style={{background: "hsla(0, 0%, 95%, 1)"}}
              type="text"
              name="catchPhrase"
              id="catchPhrase"
              className=" h-12 w-11/12 mx-auto rounded-xl"
            />
          </div>
          <button 
          style={{backgroundColor: "hsla(0, 100%, 61%, 0.8)"}}
          className="h-12 w-11/12 mx-auto rounded-xl"
          type="button" >Request New Password</button>
        </form>
      </div>
      <div className="flex flex-col w-2/5 ">
      <ul className="flex h-16 items-center gap-4">
          <li  
          className="h-6 text-white  w-6 rounded-full flex items-center justify-center"
          style={{backgroundColor: "hsla(0, 100%, 61%, 0.8)"}}>2</li>
          <li className="text-xl">Profile</li>
        </ul>
        <div className="h-80 w-10/12">
          <img src={bag} alt="" className="w-full h-full rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default VendorSettings;
