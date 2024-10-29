import { FaTh , FaUserAlt, FaCommentAlt } from "react-icons/fa";
import { AiOutlineHome, AiOutlineSearch,AiOutlineAppstore } from "react-icons/ai"
import {BsFillBagFill} from "react-icons/bs"
// import {GrHomeRounded,GrAppsRounded} from "react-icons/gr"

import {ImSpinner10}from "react-icons/im"
import {GiCubes} from "react-icons/gi"
import {TbTruckDelivery} from "react-icons/tb"
import {SlSettings} from "react-icons/sl"

const MenuItem = [
  [
    {
      path: "/Admin/Registration",
      name: "REGISTRATION",
      icon: <FaTh />,
    },
    {
      path: "/Admin/AdminVendor",
      name: "VENDOR",
      icon: <FaTh />,
    },
    {
      path: "/Admin/AdminRider",
      name: "RIDER",
      icon: <FaUserAlt />,
    },
    {
      path: "/Admin/AdminOrderList",
      name: "ORDER LIST",
      icon: <FaCommentAlt />,
    },
    {
      path: "/Admin/Report",
      name: "REPORT",
      icon: <FaCommentAlt />,
    },
    {
      path: "/Admin/Settings",
      name: "SETTINGS",
      icon: <SlSettings/>,
      }
  ],
  [
    {
      path: "/Rider/Home",
      name: "HOME",
      icon: <AiOutlineHome />,
    },
    {
      path: "/Rider/Search",
      name: "SEARCH",
      icon: <AiOutlineSearch />,
    },
    {
      path: "/Rider/Order",
      name: "ORDER",
      icon: <BsFillBagFill />,
    },
    {
    path: "/Rider/Settings",
    name: "SETTINGS",
    icon: <FaCommentAlt />,
    }
  ],
  [
    {
      path: "/Vendor/LiveOrderList",
      name: "LIVE ORDER",
      icon:  <AiOutlineHome/>,
    },
    {
      path: "/Vendor/RiderList",
      name: "RIDER",
      icon: <AiOutlineAppstore/>,
    },
    {
      path: "/Vendor/OrderActivities",
      name: "ORDER ACTIVITIES",
      icon: <ImSpinner10/>,
    },
    {
      path: "/Vendor/Products",
      name: "PRODUCT",
      icon: <GiCubes />,
    },
    {
      path: "/Vendor/Delivery",
      name: "DELIVERY",
      icon: <TbTruckDelivery />,
    },
    {
      path: "/Vendor/Settings",
      name: "SETTINGS",
      icon: <SlSettings/>,
    }
  ]
];

const HarmburgerData = [
  [
    {
      path: "/Rider/Home",
      name: "Home",
      icon: <AiOutlineHome />,
    },
    {
      path: "/Rider/Search",
      name: "search",
      icon: <AiOutlineSearch />,
    },
    {
      path: "/Rider/Order",
      name: "Order",
      icon: <BsFillBagFill />,
    },
    {
    path: "/Rider/Settings",
    name: "Settings",
    icon: <FaCommentAlt />,
    }
  ],
]

export {HarmburgerData}
export default MenuItem;