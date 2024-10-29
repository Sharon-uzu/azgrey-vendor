import React from "react";
// import AdminInputs from '../../Components/InputComponent/AdminInputs/AdminInputs'
// import Genesis from "../../../src/assets/gen16.png"
// import Kilimanjaro from "../../assets/pz17.png"
// import Chicken from "../../assets/chicken18.png"
import axios from "axios";
import DeliveryFeed from "./DeliveryFeed"
import ListOfRiders from "./ListOfRiders";
import EagleEyes from "./EagleEyes";

const AdminRider = () => {

  const initialState = {
    data: [],
    status: "idel", //loading //succeded // failed // idel
    error: null
  }

  const [riders, setRiders] = React.useState(initialState);
  const [riderMenue, setRiderMenue] = React.useState("listOfRiders");

  const changeMenue = (e) =>{
    setRiderMenue(e.target.value)
  }

  React.useEffect(() => {
    const RiderGet = async () => {
      setRiders((prevState)=>({
        ...prevState,
        status: "loading"
      }))
      try{
        const response = await  axios({
        method: "GET",
        // url: `${baseUrl}restaurants/register`,
        // url: "https://greyfoodexpress.onrender.com/api/v1/restaurants",
        // url: "https://greyfoodexpress.onrender.com/api/v1/riders/register",
        url: "https://greyfoodexpress.onrender.com/api/v1/users",
        withCredentials: true,
      })
      setRiders((prevState)=>({
        ...prevState,
        data: response.data,
        status: "succeded"
      }))
      } catch (error){
      setRiders((prevState)=>({
        ...prevState,
        status: "failed",
        error:error.message
      }))
      }
      setRiders((prevState)=>({
        ...prevState,
        status: "idel",
      }))
    }
    RiderGet();
  },[ ]);

  let Content

  if(riders.status === "loading"){
    Content = <div>Loading...</div>
  }
  else if(riderMenue === "listOfRiders"){
    Content = <ListOfRiders riders={riders.data}/>
  }
  else if(riderMenue === "eagleEyes"){
    Content = <EagleEyes/>
  }
  else if(riderMenue === "deliveryFeed"){
    Content = <DeliveryFeed riders={riders.data}/>
  }
  return (
    <div className="w-full ">
      <div className="w-11/12 mx-auto">
        <ul className="flex justify-around items-center pb-4 pt-2 w-11/12 mx-auto">
          <label
            htmlFor="listOfRiders"
            style={{ background: riderMenue === "listOfRiders" ? "hsla(0, 91%, 59%, 1)" : "white",
            color:riderMenue === "listOfRiders" ? "white" : "red", 
            width:"30%" }}
            className="h-24 text-md  flex justify-center items-center  rounded-lg shadow-lg "
          >
            LIST OF RIDERS
          </label>
          <label
            htmlFor="deliveryFeed"
            style={{ background: riderMenue === "deliveryFeed" ? "hsla(0, 91%, 59%, 1)" : "white",
            color:riderMenue === "deliveryFeed" ? "white" : "red", 
            width:"30%" }}
            className="h-24 text-md  flex justify-center items-center  rounded-lg shadow-lg"
        >
            DELIVERY FEED
          </label>
          <label
            htmlFor="eagleEyes"
            style={{ background: riderMenue === "eagleEyes" ? "hsla(0, 91%, 59%, 1)" : "white",
            color:riderMenue === "eagleEyes" ? "white" : "red", 
            width:"30%" }}
            className="h-24 text-md  flex justify-center items-center  rounded-lg shadow-lg"
          >
            EAGLE EYES
          </label>
        </ul>

        <div className="hidden">
          <input
            type="radio"
            value="listOfRiders"
            name="riderList"
            id="listOfRiders"
            checked={riderMenue === "listOfRiders"}
            onChange={(e)=>changeMenue(e)}
          />
            <input
              type="radio"
              value="eagleEyes"
              name="riderList"
              id="eagleEyes"
              checked={riderMenue === "eagleEyes"}
              onChange={(e)=>changeMenue(e)}
            />
          <input
            type="radio"
            value="deliveryFeed"
            name="riderList"
            id="deliveryFeed"
            checked={riderMenue === "deliveryFeed"}
            onChange={(e)=>changeMenue(e)}
          />
        </div>

       
        {Content}
      </div>
    </div>
  );
};

export default AdminRider;
