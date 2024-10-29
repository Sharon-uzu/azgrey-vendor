import {  createContext } from "react";
import React from 'react'

import { restaurantDatas, usersData } from "../pages/RiderApp/RidersArrayFiles";

export const RiderContext = createContext(null);

const RiderContextProvider = (props) => {


    
    const [orderItems, setOrderItems] = React.useState([]);
    
    const storeItem = (Id) => {
        let stored = restaurantDatas.find((val) => val.id === Id);
    return setOrderItems(stored);
    };

    const [order2Items, setOrder2Items] = React.useState([]);
    
    const store2Item = (Id) => {
        let stored2 = usersData.find((val) => val.id === Id);
    return setOrder2Items(stored2);
    };
    
    const RidersDatas = {
        storeItem,
        orderItems,
        store2Item,
        order2Items,
        restaurantDatas,
         usersData
        }
  return (
    <RiderContext.Provider value={RidersDatas}>
        <div>{props.children}</div>
    </RiderContext.Provider>
  )
}
// export const useRiderContext = useContext(RiderContext)
export default RiderContextProvider