import React, { useState } from "react";

// import baseUrl from "../Components/baseUrl";
// import { Image, Transformation,cloudinary  } from 'cloudinary-react';
import axios from "axios";

const VendorsForm = (props) => {


  const initialState = {
    fullname: props.fullname,
    email: props.email,
    password:"",
    phone: props.phone,
    address: props.address,
    role:"vendor"
  }

  const [formData, setFormData] = useState(initialState);



  const handleInputChange = (event) => {
    
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
console.log(formData)


const handleSubmit = (event = {}) => {
    event.preventDefault();

    axios({
      method: "POST",
      // url: `${baseUrl}restaurants/register`,
      // url: "https://greyfoodexpress.onrender.com/api/v1/restaurants/register",
      // url: "https://greyfoodexpress.onrender.com/api/v1/riders/register",
      url: "https://greyfoodexpress.onrender.com/api/v1/users/register",
      

      headers: {
        // Authorization:
        // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRkM2YxZjQzZDhjOTg5YmNkNDgxYWEiLCJpYXQiOjE2ODUxNDgwMDQsImV4cCI6MTY4NTc1MjgwNH0.mWzGkCMI26e-J2NOg-TI1AJUFkaO0KTpph_20IRdFK8",
        "Content-Type": "application/json",
        // "Accept": "application/json, text/plain, */*",
        // "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      data: JSON.stringify(formData),
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };



  return (
    <div>
      <form
        method="POST"
        className="flex flex-col gap-2"
        onSubmit={(e)=>handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Full Name"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          name="fullname"
          value={props.fullname}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          name="email"
          value={props.email}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          name="phone"
          value={props.phone}
        />

        <input
          type="address"
          placeholder="Address"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          name="address"
          value={props.address}
        />

        <input
          type="password"
          placeholder="Enter your Password"
          className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          onChange={e=> handleInputChange(e)}
          name="password"
          value={formData.password}
        />  
        <select name="role" id="" value={formData.role} onChange={e=> handleInputChange(e)}
         className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none">
            <option value=" vendor">Vendor</option>
            <option value="rider">Rider</option>
            <option value="admin">Admin</option>
        </select>

        <input
          type="submit"
          value="SignUp"
          className="border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
        />

        {/* <Image publicId={imageUrl} format="jpg">
            <Transformation width="200" height="200" crop="fill" />
          </Image> */}

        {/* <img src={imageUrl} alt="" width={100} height={10} /> */}
      </form>
    </div>
  );
};

export default VendorsForm;