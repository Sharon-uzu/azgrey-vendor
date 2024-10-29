import React, { useState, useEffect } from "react";
import axios from "axios";
import VendorsList from "./VendorsList";
import baseUrl from "../../../Components/baseUrl";

const AdminVendor = () => {
  const initialState = {
    data:[],
    status: "idel" , // loading //succeded // failed // idel 
    error : null
  }
  const [vendors, setVendors] = useState(initialState );

  useEffect(() => {
    const getVendors = async () => {

      setVendors((prevState)=>({
        ...prevState,
        status : "loading"
      }))
      try {
        const response = await axios({
            method: "GET",
            url:`${baseUrl}/users/vendor`,
            headers: {
              Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRkM2YxZjQzZDhjOTg5YmNkNDgxYWEiLCJpYXQiOjE2ODU2MTkxNTgsImV4cCI6MTY4NjIyMzk1OH0.LZL-lQulhDLHAZykCZ4WsGlzal4JkTRDdTLMD76kboU",
              "Content-Type": "application/json",
            }
          });
        console.log(response.data);
        setVendors((prevState)=>({
          ...prevState,
          data:response.data}));
      } catch (err) {
        console.log(err);
        setVendors((prevState)=>({
          ...prevState,
          status : "failed",
          error:err.message
        }))
      }
      setVendors((prevState)=>({
        ...prevState,
        status : "idel"
      }))
    };

    getVendors();
  }, []);

  let Content

  if(vendors.status === "loading"){
    Content = <h1>Loading...</h1>
  }
  else if(vendors.data.length > 0){
    Content = <VendorsList vendors={vendors}/>
  }

  return (
    <div>
      <div className="w-full mt-8">
        <table className="w-11/12 mx-auto">
          <thead
            style={{ background: "hsla(0, 2%, 95%, 1)" }}
            className="w-full h-12 border-solid border-gray-300 border-2  shadow-gray-300 shadow-md"
          >
            <tr className="text-center w-full rounded-xl" >
              <th>ID</th>
              <th>LOGO</th>
              <th>NAME</th>
              <th>LOCATION</th>
              <th>STATUS</th>
              <th>MODE</th>
              <th></th>
            </tr>
          </thead>
            <br />
           {Content}
        </table>
      </div>
    </div>
  );
};

export default AdminVendor;

