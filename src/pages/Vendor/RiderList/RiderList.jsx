import React from "react";
import testImg from "../../../assets/r1.jpg";
import {BsThreeDotsVertical} from "react-icons/bs"


const RiderList = () => {

  const RiderData = [
    {
      img:testImg,
      name1:"Eze Monyie",
      name2:"ABK765Y",
    },
    {
      img:testImg,
      name1:"Eze Monyie",
      name2:"ABK765Y",
    },
    {
      img:testImg,
      name1:"Eze Monyie",
      name2:"ABK765Y",
    },
    {
      img:testImg,
      name1:"Eze Monyie",
      name2:"ABK765Y",
    },
    {
      img:testImg,
      name1:"Eze Monyie",
      name2:"ABK765Y",
    },
    {
      img:testImg,
      name1:"Eze Monyie",
      name2:"ABK765Y",
    },
    {
      img:testImg,
      name1:"Eze Monyie",
      name2:"ABK765Y",
    }
  ]
  return (
    <div className="">
      <div className=" flex  flex-wrap  justify-evenly items-center h-44 mb-8 p-3">
        <div
          style={{ background: "hsla(0, 63%, 89%, 0.6)" }}
          className="w-1/4 h-36 grid place-items-center  rounded-xl shadow-md"
        >
          <span className="text-xl">Total Riders</span>
          <span style={{ color: "#FF3636CC" }} className="text-8xl">
            20
          </span>
        </div>
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-1/4 h-36 grid place-items-center   rounded-xl shadow-md"
        >
          <span className="text-xl"> Active Riders</span>
          <span style={{ color: "#FF3636CC" }} className="text-8xl">
            09
          </span>
        </div>
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-1/4 h-36 grid place-items-center   rounded-xl shadow-md"
        >
          <span className="text-xl"> Riders On Delivery</span>
          <span style={{ color: "#FF3636CC" }} className="text-8xl">
            05
          </span>
        </div>
      </div>
      {/* Rider Card */}
      <div className="flex flex-col gap-4 overflow-y-scroll " style={{maxHeight:"25rem"} }>

      {
        RiderData?.map((users)=>(
        <div style={{ background: "hsla(0, 11%, 90%, 0.6)" }} className="flex justify-around w-11/12 mx-auto  rounded-xl p-1">
        <div className="w-1/5 flex justify-between items-center ">
            <img src={users.img} alt="" className="rounded-full w-12 h-12 " />
          <ul className="flex flex-col mr-5">
            <li>{users.name1}</li>
            <li>{users.name2}</li>
          </ul>
        </div>
        <div className="flex items-center w-1/6">
          <span>Rank : </span>
          <span>⭐️⭐️⭐️⭐️⭐️</span>
        </div>
        <ul className="flex justify-between items-center w-2/5">
          <li>Call</li>
          <li>View</li>
          <li>Pending</li>
          <BsThreeDotsVertical/>
        </ul>
      </div>
        ))
      }
      </div>
      
    </div>
  );
};

export default RiderList;
