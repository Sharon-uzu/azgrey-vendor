import React from "react";

import SignUpButton from "../Components/ButtonComponent/SignUpButton";
import { Link } from "react-router-dom";
// import { BsArrowRepeat } from "react-icons/bs";
// import { AiOutlineMail } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons/lib";
const UserNavBar = (props) => {
  return (
    <>
      <div className={`${props.navClassName} fixed top-0  z-40`}>
        <div className={props.divClassName}>
          <Link to={props.logoImage}>
            <img
              src={props.image}
              alt=""
              className={props.imageClassName}
            />
          </Link>
        </div>
        <ul className={props.listClassName}>
          <Link to={props.link}>
            <SignUpButton text={props.text} className={props.btnClassName} />
          </Link>
          {props.item1}
          <div className={props.cartIcon}>
            {props.item2}
            <span className="text-sm bg-red-600 h-6 flex justify-center rounded-2xl items-center w-6">
              {props.number}
            </span>
          </div>
        </ul>
      </div>
    </>
  );
};

const MainHeaderBar = (props) => {
  return (
    <>
      <IconContext.Provider value={{ color: "gray" }}>
        <div className=" fixed top-0 md:left-44 right-0 h-20 left-36 bg-white  md:flex flex-col justify-between items-center z-40 border-b-2 border-gray-300 border-solid  ">
          <div className="w-full h-full flex justify-between items-center">
            <div className="flex items-center w-2/4 h-11/12 ">
              {/* <h1 className="ml-4 text-lg">Hello<span className="md:text-lg text-md"> {props.headTitle}, </span>here are your avaialable orders.
              </h1> */}
              {props.headTitle}
            </div>
            <ul className="flex md:flex-row flex-col justify-between items-center text-2xl w-2/6 relative">
              <IoIosNotificationsOutline />
              <div className="fixed top-0 h-20 hidden   md:flex flex-col justify-around z-40 right-0 left-20  ">
                {/*  */}
                <div className="w-10/12 ml-auto flex justify-end items-center">
                 
                  <ul className="flex gap-4 mr-20 text-2xl">
                  
                    <li className="">
                      <input
                        type="search"
                        className="md:w-40 py-2 pl-6 text-sm mr-6 rounded-md outline-none border-2 border-solid border-gray-50"
                        placeholder="Search..."
                      />
                      <CiSearch
                        style={{
                          position: "absolute",
                          top: "30%",
                          fontSize: "1em",
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default UserNavBar;
export { MainHeaderBar };
