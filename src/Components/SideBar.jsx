import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/20230525_150752.png";


const Sidebar = (props) => {
  // const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    {/* Container */}
      <div className=" w-full">
        {/* SideBar */}
      <div  className="bg-white md:flex">
        <div className={` bg-white w-35 md:w-44  border-r-2 top-0 left-0 h-screen md:flex flex-col gap-3 fixed z-50 `} >
          {/* Logo */}
          <div className="flex justify-center item-center flex-col h-24">
            <div className=" w-40 h-40 flex justify-center item-center  ">
              <img src={logo} alt="" className="w-full h-full object-fill" />
            </div>
          </div>

          {/* Links and Lists */}
          <div
            className={`h-full flex  flex-col sidebarNav `}
          >
            {props.menuItem[props.pageNum].map((item, index) => (
            <>
            {/* Admin sideBar */}
             {props.pageNum === 0 &&  
              <NavLink
                to={item.path}
                key={index}
                className={` h-14 flex place-items-center  ${item.name === "SETTINGS" ? "mt-auto mb-10" :""}`}
              >
                <ul className={`flex w-10/12 m-auto items-center h-full`}>
                  <li className="mr-4 text-sm ">{item.icon}</li>
                  <li className={`text-sm `}>{item.name}</li>
                </ul>
              </NavLink>}

              {/* Vendor sideBar */}
              {props.pageNum === 2 &&  
              <NavLink
                to={item.path}
                key={index}
                className={` h-20 flex justify-between items-center `}
              >
                <ul className="flex w-10/12 mx-auto items-center">
                  <li className="mr-4 text-sm ">{item.icon}</li>
                  <li className={`text-sm `}>{item.name}</li>
                </ul>
              </NavLink>}
             </>

            ))}
          </div>
        </div>
          {/* Contents i.e MainHeaderBar and MainContens */}
        <main className=" mt-20 ml-44 w-full">{props.children}</main>
      </div>
      </div>
    </>
  );
};

export default Sidebar;