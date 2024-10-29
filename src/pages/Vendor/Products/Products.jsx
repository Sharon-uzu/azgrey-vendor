import React from "react";
import Rice_and_chicken from "../../../assets/r4.jpg";
const VendorsProduct = () => {

    const foodProducts =[
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
        {status:"Available"},
    ]

  return (
    <div>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4  gridtest mt-4 pb-4">
        {foodProducts?.map((food)=>(
       <div 
       style={{ background: "hsla(0, 11%, 69%, .6)" }}
       className="h-72 border-solid border-2 w-11/12 flex flex-col  items-center py-4 rounded-xl shadow-xl">
       <div className="md:w-64 h-44 ">
         <img src={Rice_and_chicken} alt="" className="w-full h-full lg:object-fill md:object-contain resize rounded-xl" />
       </div>
       <div className=" w-11/12 h-38 text-sm p-2">
         <ul className="flex justify-between mb-2">
           <li>⭐️⭐️⭐️⭐️⭐️</li>
           <button type="button">Edit</button>
           <button type="button">Remove</button>
         </ul>
         <ul className="flex flex-col">
           <li>
             Status :<span className="ml-2">Available</span>
           </li>
           <li>
             Quantity : <span className="ml-2">20 Dishes</span>
           </li>
         </ul>
       </div>
     </div>
        ))}
 
      </div>
    </div>
  );
};

export default VendorsProduct;
