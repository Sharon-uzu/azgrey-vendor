import React from "react";
import { IoIosArrowDropup } from "react-icons/io";
import RiderButton from "../../../Components/ButtonComponent/RiderButton";

const PickUpOrder = () => {
  return (
    <div className="bg-slate-100  flex gap-8 flex-col w-10/12 m-auto">
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center h-1/5  mt-4">
        <div className="md:w-1/2 h1/5 bg-yellow-50 text-center p-3 rounded-xl my-6">Pick order in 4 mins</div>
        <div className="w-1/2 h-1/5 text-center mb-2">ORDER ID</div>
        <div className="w1/2 h-1/5 text-4xl">
          <span className="bg-gray-300 opacity-50 ">567483</span>9393
        </div>
      </div>
      <div className="md:w-10/12 w-full mx-auto  h-2/5 flex flex-col py-4 justify-evenly border-2 border-solid border-white rounded-3xl">
        <div className="flex justify-between w-10/12 mx-auto mb-4 bg-white p-3 rounded-3xl  ">
          <span className="md:text-2xl text-xl"> Order Details</span>
          <IoIosArrowDropup className="text-3xl" />
        </div>
        <div className="flex justify-between w-10/12 mx-auto mb-4 bg-white p-3 rounded-3xl  ">
          <span className="md:text-2xl text-xl">Resturant Details</span>
          <IoIosArrowDropup className=" text-3xl"/>
        </div>
        <div className="flex justify-between w-10/12 mx-auto bg-white p-3 rounded-3xl  ">
          <span className="md:text-2xl text-xl">Customer Details</span>
          <IoIosArrowDropup className="text-3xl"/>
        </div>
      </div>
      <RiderButton buttonName="Picked Order"/>
    </div>
  );
};

export default PickUpOrder;
