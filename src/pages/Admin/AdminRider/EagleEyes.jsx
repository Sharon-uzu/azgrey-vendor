import React from "react";
import mapImage from "../../../assets/PH-MAP 1.svg";
const EagleEyes = () => {
  return (
    <div className="flex justify-between">
      <div 
      className="bg-red-400"
      style={{width:"50rem",height:"29.5rem"}}>
        <img src={mapImage} alt="" className="w-full h-full object-fill"/>
      </div>
      <ul className="flex flex-col  items-center h-full gap-3 ">
        <li
          style={{ background: "hsla(0, 63%, 89%, 0.6)" }}
          className="w-40 h-20 grid place-items-center shadow-md rounded-xl "
        >
          <span className="text-sm">Active Riders</span>
          <span style={{ color: "#FF3636CC" }} className="text-4xl">
            20
          </span>
        </li>
        <li
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-40 h-20 grid place-items-center  shadow-md rounded-xl"
        >
          <span className="text-sm"> Pending Riders</span>
          <span style={{ color: "#FF3636CC" }} className="text-4xl">
            09
          </span>
        </li>
        <li
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-40 h-20 grid place-items-center  shadow-md rounded-xl"
        >
          <span className="text-sm"> Riders In progress</span>
          <span style={{ color: "#FF3636CC" }} className="text-4xl">
            05
          </span>
        </li>
        <li
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-40 h-20 grid place-items-center  shadow-md rounded-xl"
        >
          <span className="text-sm"> Riders In progress</span>
          <span style={{ color: "#FF3636CC" }} className="text-4xl">
            05
          </span>
        </li>
        <li
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-40 h-20 grid place-items-center  shadow-md rounded-xl"
        >
          <span className="text-sm"> Riders In progress</span>
          <span style={{ color: "#FF3636CC" }} className="text-4xl">
            05
          </span>
        </li>
      </ul>
    </div>
  );
};

export default EagleEyes;
