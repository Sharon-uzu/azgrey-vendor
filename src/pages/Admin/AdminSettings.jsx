import axios from 'axios'
import React from 'react'
import baseUrl from '../../Components/baseUrl'

const AdminSettings = () => {

    const initialState = {
        data: [],
        status: "idel", //loading //succeded // failed
        error: null 

    }
        const [vendors,setVendors] = React.useState(initialState)
    React.useEffect(() => {
        const getVendors = async () => {
    
          setVendors((prevState)=>({
            ...prevState,
            status : "loading"
          }))
          try {
            const response = await axios({
                method: "GET",
                url:`${baseUrl}/orders`,
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
      {/* https://greyfoodexpress.onrender.com/api/v1/categories');
https://greyfoodexpress.onrender.com/api/v1/products',
https://greyfoodexpress.onrender.com/api/v1/restaurants',
https://greyfoodexpress.onrender.com/api/v1/riders',
https://greyfoodexpress.onrender.com/api/v1/users',
https://greyfoodexpress.onrender.com/api/v1/orders' */}

        {JSON.stringify(vendors.data)}
    </div>
  )
}

export default AdminSettings
