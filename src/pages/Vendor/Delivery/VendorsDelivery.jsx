import React from "react";
import testImg from "../../../assets/r1.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import {IoIosArrowDown} from "react-icons/io"

const VendorsDelivery
 = () => {

   

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const ActiveData = [
    {
      img: testImg,
      name1: "Eze Monyie",
    },
    {
      img: testImg,
      name1: "Eze Monyie",
    },
    {
      img: testImg,
      name1: "Eze Monyie",
    },
    {
      img: testImg,
      name1: "Eze Monyie",
    },
    {
      img: testImg,
      name1: "Eze Monyie",
    },
    {
      img: testImg,
      name1: "Eze Monyie",
      name2: "ABK765Y",
    },
    {
      img: testImg,
      name1: "Eze Monyie",
      name2: "ABK765Y",
    },
    {
        img: testImg,
        name1: "Eze Monyie",
      },
      {
        img: testImg,
        name1: "Eze Monyie",
      },
      {
        img: testImg,
        name1: "Eze Monyie",
        name2: "ABK765Y",
      },
      {
        img: testImg,
        name1: "Eze Monyie",
        name2: "ABK765Y",
      }
  ];

  return (
    <div>
      {/*Card Heading */}
      <div className="h-40 flex flex-col justify-center ">
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="flex justify-around w-11/12 mx-auto  rounded-xl py-4"
        >
            <ul className="flex justify-between  w-1/6">
              <li>ID</li>
              <li>Name</li>
            </ul>
        
          <div className="flex items-center justify-center w-1/5 ">
            <div>Meal Item</div>
          </div>
          <ul className="flex justify-between items-center w-2/5">
            <li>Total</li>
            <li>Status</li>
            <button onClick={toggleDropdown}>
              {/* {SVG(isRecent)} */}
              <IoIosArrowDown style={{
                 transitionProperty: 'transform',
                 transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                 transitionDuration: '150ms',
                 transform: isOpen ? "rotate(180deg)" : "rotate(0)" 
                 }} />
            </button>
          </ul>
        </div>
      </div>

      {/* Rider Card */}
      <div
        className="flex flex-col gap-4  items-center"
      >
        {isOpen &&
          ActiveData?.map((users) => (
            <div
              style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
              className="flex justify-around w-11/12  rounded-xl p-1 h-12"
            >
              <div className="w-1/6 flex justify-between items-center ">
                <div>433</div>
                <div>Denner</div>
              </div>
              <div className="flex items-center justify-center w-1/5">
                <div>Icream</div>
              </div>
              <ul className="flex justify-between items-center w-2/5">
                <li>$ 9</li>
                <li>In progress</li>
                <BsThreeDotsVertical />
              </ul>
            </div>
          ))}
      </div>
      </div>
  )
};

export default VendorsDelivery
;
