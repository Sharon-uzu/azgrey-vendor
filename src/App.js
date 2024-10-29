// import "./App.css";
// import Landing from "./Screens/Landing";
// import { Route, Routes } from "react-router-dom";
// import Order from "./Screens/Order";
// import Rider from "./pages/Rider/Rider";
// import Vendor from "./pages/Vendor/Vendor";

// import Admin from "./pages/Admin/Admin";
// import AdminVendor from "./pages/Admin/AdminVendor/AdminVendor";
// import AdminRider from "./pages/Admin/AdminRider/AdminRider";
// import AdminUser from "./pages/Admin/AdminUser";
// import AdminRegistration from "./pages/Admin/Registration/Registration";
// import AdminOrderList from "./pages/Admin/AdminOrderList";
// import AdminReport from "./pages/Admin/AdminReport";

// import OrderR from "./Components/OrderR";
// import Store1 from "./Screens/Store1";
// import Store2 from "./Screens/Store2";
// // import Stores from './Screens/Stores'

// import store from "../src/Redux/store";
// import { Provider } from "react-redux";
// import SettingsRider from "./pages/Rider/SettingsRider";
// import MainRiderHomePage from "./pages/Rider/HomePage/MainRiderHomePage";
// import VendorsHomePage from "./pages/Rider/HomePage/VendorsHomePage";
// import ArriveLocation from "./pages/Rider/ArriveLocation";
// import PickUpOrder from "./pages/Rider/HomePage/PickUpOrder";
// import ReachedDropLocation from "./pages/Rider/ArriveLocation";
// import AppContextProvider from "./Context/AppContext";

// import LiveOrderList from "./pages/Vendor/LiveOrder/LiveOrderList";
// import RiderList from "./pages/Vendor/RiderList/RiderList";
// import OrderActivities from "./pages/Vendor/OrderActivities/OrderActivities";
// import VendorsProduct from "./pages/Vendor/Products/Products";
// import VendorsDelivery from "./pages/Vendor/Delivery/VendorsDelivery";
// import VendorSettings from "./pages/Vendor/VendorSettings/VendorSettings";

// import Checkout from "./Screens/Checkout";
// import Progress from "./Screens/Progress";
// import RidersHome from "./pages/RiderApp/RidersHome";
// import RidersC from "./pages/RiderApp/RidersC";
// import PickUp from "./pages/RiderApp/PickUp";
// import TrackOrder from "./pages/RiderApp/TrackOrder";
// import CallRinging from "./pages/RiderApp/CallRinging";
// import Call from "./pages/RiderApp/Call";
// import FinishOrder from "./pages/RiderApp/FinishOrder";
// import OrderInfo from "./pages/RiderApp/OrderInfo";
// import AdminCallRinging from "./pages/RiderApp/AdminCallRinging";
// import AdminCall from "./pages/RiderApp/AdminCall";
// import RiderContextProvider from "./Context/RiderContext";
// import Location from "./pages/RiderApp/Location";
// import VendorCall from "./pages/RiderApp/VendorCall";
// import VendorCallRinging from "./pages/RiderApp/VendorCallRinging";

// import ReachDrop from "./pages/Rider/ReachDrop";
// import Delivered from "./pages/Rider/HomePage/Delivered";
// import RiderAccount from "./pages/Rider/HomePage/RiderAccount";
// import RiderOrder from "./pages/Rider/HomePage/RiderOrder";
// import RiderInformation from "./pages/Rider/HomePage/RiderInformation";
// import RiderOrderHistory from "./pages/Rider/HomePage/RiderOrderHistory";
// import RiderPending from "./pages/Rider/HomePage/RiderPending";
// import RiderAccepted from "./pages/Rider/HomePage/RiderAccepted";
// import RiderCompleted from "./pages/Rider/HomePage/RiderCompleted";
// import AdminSettings from "./pages/Admin/AdminSettings";
// import Signin from "./Screens/Signin";



// function App() {
//   return (
//     <>

//       <AppContextProvider>
//          <RiderContextProvider>
//          <Provider store={store}>
//         <Routes>

//           {/* <Route path="/" element={<Vendor />} /> */}
//           <Route path="/" element={<Signin />} />

           
          
          
//             <Route Route path="/Vendor" element={<Vendor />}>
//               <Route path="/Vendor/LiveOrderList" element={<LiveOrderList />} />

//               {/* <Route path="/Vendor/LiveOrderList" element={<LiveOrderList />} /> */}
//               <Route path="/Vendor/RiderList" element={<RiderList/>}/>
//               <Route path="/Vendor/OrderActivities" element={<OrderActivities/>}/>
//               <Route path="/Vendor/Products" element={<VendorsProduct/>}/>
//               <Route path="/Vendor/Delivery" element={<VendorsDelivery/>}/>
//               <Route path="/Vendor/Settings" element={<VendorSettings/>}/>
//             </Route>

//             <Route path="/Admin" element={<Admin />}>
//               <Route path="/Admin/AdminVendor" element={<AdminVendor />} />
//               <Route path="/Admin/AdminRider" element={<AdminRider />} />
//               <Route path="/Admin/AdminUser" element={<AdminUser />} />
//               <Route path="/Admin/Registration" element={<AdminRegistration/>}/>
//               <Route path="/Admin/AdminOrderList" element={<AdminOrderList/>}/>
//               <Route path="/Admin/Report" element={<AdminReport/>}/>
//               <Route path="/Admin/Settings" element={<AdminSettings/>}/>
//             </Route>

//             <Route path="/Rider" element={<Rider />}>
//               <Route path="/Rider/Home" element={<MainRiderHomePage/>} />
//               <Route path="/Rider/Home/VendorsPage" element={<VendorsHomePage/>} />
//               <Route path="/Rider/Home/ArrivedLocation" element={<ArriveLocation/>}/>
//               <Route path="/Rider/Home/PickUpOrder" element={<PickUpOrder/>} />
//               <Route path="/Rider/Home/ReachedDropLocation" element={<ReachedDropLocation/>} />
//               <Route path="/Rider/Home/ReachDrop" element={<ReachDrop/>} />
//               <Route path="/Rider/Home/Delivered" element={<Delivered/>} />
//               <Route path="/Rider/Home/RiderAccount" element={<RiderAccount/>} />
//               <Route path="/Rider/Home/RiderOrder" element={<RiderOrder/>} />
//               <Route path="/Rider/Home/RiderInformation" element={<RiderInformation/>} />
//               <Route path="/Rider/Home/RiderOrderHistory" element={<RiderOrderHistory/>} />
//               <Route path="/Rider/Settings" element={<SettingsRider />} />
//               <Route path="/Rider/RiderOrderHistory" element={<RiderOrderHistory/>}>
//               <Route path="/Rider/RiderOrderHistory/Pending" element={<RiderPending/>}/>
//               <Route path="/Rider/RiderOrderHistory/Accepted" element={<RiderAccepted/>}/>
//               <Route path="/Rider/RiderOrderHistory/Complete" element={<RiderCompleted/>}/>
//             </Route>
//           </Route>
//           </Routes>
//        </Provider>
//       </RiderContextProvider>
//      </AppContextProvider>
//     </>
//   );
// }

// export default App;


import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signin from "./Screens/Signin";
import LiveOrder from "./Screens/LiveOrder";
import RiderScreen from "./Screens/RiderScreen";
import OrderActivity from "./Screens/OrderActivity";
import Products from "./Screens/Products";
import Delivery from "./Screens/Delivery";
import Settings from "./Screens/Settings";
import Dashboard from "./Screens/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/order" element={<LiveOrder/>} />
        <Route path="/rider" element={<RiderScreen/>} />
        <Route path="/activity" element={<OrderActivity/>} />
        <Route path="/product" element={<Products/>} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </div>
  )
}

export default App