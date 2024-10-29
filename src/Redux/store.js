import { configureStore } from '@reduxjs/toolkit'
import adminReducer from "./Futures/AdminSlice"                                    
import riderReducer from "./Futures/RiderSlice"                                    
import userReducer from "./Futures/UserSlice"                                    
import vendorReducer from "./Futures/VendorSlice"                                    



const store = configureStore({
  reducer: {
    user: userReducer,
    vendor: vendorReducer,
    rider: riderReducer,
    admin: adminReducer,
  },
});

export default store;