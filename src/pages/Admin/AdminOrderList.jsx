import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../Components/baseUrl";
import logo from "../../assets/chickenRep.png";

const AdminOrderList = () => {


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
              <th></th>
              <th></th>
            </tr>
          </thead>
            <br />
            <tbody
            // style={{ backgroundColor: "rgba(170, 74, 74, 0.1)" }}
            className="text-sm"
          >
            {vendors.data.map(({ id, fullname, address }) => (
              <>
              <tr key={id} className="text-center shadow-md shadow-gray-500 h-14 rounded-lg">
                <td>{id.substring(0, 5)}</td>
                <td className="flex justify-center items-center w-full ">
                  <div className="flex w-12 ">
                  <img src={logo} alt="" className="w-full h-full" />
                  </div>
                </td>
                <td>{fullname}</td>
                <td>{address ? address.substring(0, 10) : ""}</td>
                <td>Active</td>
                {/* <td className='relative'>
                  <input type="checkbox" id="disable" className="absolute left-8 top-5" />
                  <label htmlFor="disable" className='ml-2 '>Disable</label>
                </td> */}
                <td>Call</td>
                <td>View</td>
              </tr>
              <br />
              </>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminOrderList
