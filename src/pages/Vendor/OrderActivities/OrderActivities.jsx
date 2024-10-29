import React from "react";
import testImg from "../../../assets/r1.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import {IoIosArrowDown} from "react-icons/io"

const OrderActivities = () => {

   

  const [isRecent, setIsResent] = React.useState(false);

  const toggleDropdown = () => {
    setIsResent(!isRecent);
  };

  const [isFavourite, setIsFavourite] = React.useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacity = scrollPosition > 50 ? 1 : 0.6; // Change 100 to the desired scroll threshold

//   let SVG = (value) =>(
//     <svg
//       className={`w-4 h-4 ml-2 transition-transform ${
//         value ? "transform rotate-180" : ""
//       }`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 9l-7 7-7-7" />
//     </svg>
//   )

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
      
      <div
        style={{ background: `hsla(0, 63%, 89%,${opacity} )`, opacity: "1" }}
        className="w-10/12  h-36 flex justify-evenly md:gap-40 items-center rounded-xl  fixed top-20 left-48 right-8 z-2"
      >
        <div className="text-7xl ">Total Sales</div>
        <div style={{ color: "#FF3636CC" }} className="text-7xl">
          &#x20A6; 20000
        </div>
      </div>
      {/*Card Heading */}
      <div className="h-40 flex flex-col justify-end gap-4 mt-36 mb-5">
        <h2 className="ml-12 text-2xl">Recent Order</h2>
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="flex justify-around w-11/12 mx-auto mb-4 rounded-xl py-4"
        >
          <div className="w-1/5 flex justify-between items-center ">
            <ul className="flex flex-col mr-5">
              <li>Name</li>
            </ul>
          </div>
          <div className="flex items-center justify-center w-1/5 ">
            <div>Total Items</div>
          </div>
          <ul className="flex justify-between items-center w-2/5">
            <li>Total Sales</li>
            <li>Remaining Items</li>
            <button onClick={toggleDropdown}>
              {/* {SVG(isRecent)} */}
              <IoIosArrowDown style={{
                 transitionProperty: 'transform',
                 transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                 transitionDuration: '150ms',
                 transform: isRecent ? "rotate(180deg)" : "rotate(0)" 
                 }} />
            </button>
          </ul>
        </div>
      </div>

      {/* Rider Card */}
      <div
        className="flex flex-col gap-4  items-center"
      >
        {isRecent &&
          ActiveData?.map((users) => (
            <div
              style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
              className="flex justify-around w-11/12  rounded-xl p-1"
            >
              <div className="w-1/5 flex justify-between items-center ">
                <img
                  src={users.img}
                  alt=""
                  className="rounded-full w-12 h-12 "
                />
                <ul className="flex flex-col mr-5">
                  <li>{users.name1}</li>
                </ul>
              </div>
              <div className="flex items-center justify-center w-1/5">
                <div>20 K PC</div>
              </div>
              <ul className="flex justify-between items-center w-2/5">
                <li>View</li>
                <li>Pending</li>
                <BsThreeDotsVertical />
              </ul>
            </div>
          ))}
      </div>

      {/*Card Heading */}
      <div className="h-36 flex flex-col justify-end gap-4 mb-5">
        <h2 className="ml-12 text-2xl">Favourite Food</h2>
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="flex justify-around w-11/12 mx-auto mb-4 rounded-xl py-4"
        >
          <div className="w-1/5 flex justify-between items-center ">
            <ul className="flex flex-col mr-5">
              <li>Name</li>
            </ul>
          </div>
          <div className="flex items-center justify-center w-1/5 ">
            <div>Total Items</div>
          </div>
          <ul className="flex justify-between items-center w-2/5">
            <li>Total Sales</li>
            <li>Remaining Items</li>
            <button onClick={toggleFavourite}>
            <IoIosArrowDown style={{
                 transitionProperty: 'transform',
                 transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                 transitionDuration: '150ms',
                 transform: isFavourite ? "rotate(180deg)" : "rotate(0)" 
                 }} />
            </button>
          </ul>
        </div>
      </div>

      {/* Rider Card */}
      <div className="flex flex-col  gap-4  items-center">
        {isFavourite && ActiveData?.map((users) => (

            <div
              style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
              className="flex justify-around w-11/12 rounded-xl p-1"
            >
              <ul className="w-2/6 flex justify-around items-center">
               <li>
                 <img
                  src={users.img}
                  alt=""
                  className="rounded-full w-12 h-12"
                />
                </li>
                <li>{users.name1}</li>
                <li>⭐️⭐️⭐️⭐️⭐️</li>
                </ul>
              <div   style={{ background: "hsla(0, 11%, 60%, 1)" }} className="flex items-center justify-start w-2/5 h-2 rounded-xl m-auto">
                <div className="bg-red-400 h-2 w-1/2 rounded-l-xl"></div>
              </div>

               <div className="m-auto text-sm">
                50%(2.333)
               </div>
              </div>
          ))}
     </div>
      </div>
  )
};

export default OrderActivities;
