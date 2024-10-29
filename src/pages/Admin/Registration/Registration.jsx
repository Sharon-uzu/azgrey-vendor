import React from "react";
import baseUrl from "../../../Components/baseUrl";
import axios from "axios";
import VendorsRegistration from "./VendorsRegistration";
import RidersRegistration from "./RidersRegistration";
import UsersRegistration from "./UsersRegistration";

const AdminRegistration = () => {
  const initialState = {
    data: [],
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  };
  const [registrationData, setRegistrationData] = React.useState(initialState);

  const [registationMenue, setRegistationMenue] = React.useState(
    "vendorsRegistration"
  );
  const [endpoint, setEndpoint] = React.useState("restaurants");
  console.log(endpoint, "endpoint");

  //  This function takes the value from the input on change
  const changeMenue = (e) => {
    let selectvalue = e.target.value;
    setRegistationMenue(selectvalue);

    console.log(e.target.value, "me");
    if (selectvalue === "vendorsRegistration") {
      setEndpoint("restaurants");
    } else if (selectvalue === "ridersRegistration") {
      setEndpoint("riders");
    } else if (selectvalue === "usersRegistration") {
      setEndpoint("users");
    }
  };
  React.useEffect(() => {
    const fetchData = async () => {
      // When the data is being fetched status is set to loading...
      setRegistrationData((prevState) => ({
        ...prevState,
        status: "loading",
      }));

      try {
        // Fetch the data from the API
        const response = await axios.get(`${baseUrl}/${endpoint}`, {
                  headers: {
                    //Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRkM2YxZjQzZDhjOTg5YmNkNDgxYWEiLCJpYXQiOjE2ODYzMDUwODcsImV4cCI6MTY4NjkwOTg4N30.OMTD86GZRgmgbKZRbUV6rwb3VVXbBxO9HpF0Fc08doE",
                    'Content-Type': 'application/json',
                  }
                });
        // Set the status to succeeded and data to the Api data
        setRegistrationData((prevState) => ({
          ...prevState,
          status: "succeeded",
          data: response.data,
        }));
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
        // Set the data to the state of failed
        setRegistrationData((prevState) => ({
          ...prevState,
          status: "failed",
          error: error.message,
        }));
      }
      // Set the state back to the originl state idle
      setRegistrationData((prevState) => ({
        ...prevState,
        isLoading: "idle",
      }));
    };

    fetchData();
  }, [endpoint]);

  let Content;

  if (registrationData.status === "loading") {
    Content = <div>Loading...</div>;
  } else if (registationMenue === "ridersRegistration") {
    Content = <RidersRegistration registrationData={registrationData.data} />;
  } else if (registationMenue === "usersRegistration") {
    Content = <UsersRegistration registrationData={registrationData.data} />;
  } else if (registationMenue === "vendorsRegistration") {
    Content = <VendorsRegistration registrationData={registrationData.data} />;
  } else if (registrationData.status === "failed") {
    Content = <div>{registrationData.error}</div>;
  }



  return (
    <div className="w-full ">
      <div className="w-11/12 mx-auto ">
        <div className="flex justify-around items-center pb-4 pt-2 w-11/12 mx-auto">
          <label
            htmlFor="vendorsRegistration"
            style={{ background: registationMenue === "vendorsRegistration" ? "hsla(0, 91%, 59%, 1)" : "white",
            color:registationMenue === "vendorsRegistration" ? "white" : "red",
            width:"30%" }}

            className={`  h-24 text-xl  flex justify-center items-center  rounded-lg shadow-lg`}
          >
            VENDOR
          </label>
          <label
            htmlFor="ridersRegistration"
            style={{ background: registationMenue === "ridersRegistration" ? "hsla(0, 91%, 59%, 1)" : "white",
            color:registationMenue === "ridersRegistration" ? "white" : "red",
            width:"30%"
           }}
            className="  h-24 text-xl  flex justify-center items-center rounded-lg shadow-lg"
          >
            RIDER
          </label>
          <label
            htmlFor="usersRegistration"
            style={{ background: registationMenue === "usersRegistration" ? "hsla(0, 91%, 59%, 1)" : "white",
            color:registationMenue === "usersRegistration" ? "white" : "red" ,
            width:"30%"
          }}
            className={`  h-24 text-xl  flex justify-center items-center rounded-lg shadow-lg`}
          >
            USER
          </label>
        </div>

        <div className="hidden">
          <input
            type="radio"
            value="vendorsRegistration"
            name="registration"
            id="vendorsRegistration"
            checked={registationMenue === "vendorsRegistration"}
            onChange={(e) => changeMenue(e)}
          />
          <input
            type="radio"
            value="ridersRegistration"
            name="registration"
            id="ridersRegistration"
            checked={registationMenue === "ridersRegistration"}
            onChange={(e) => changeMenue(e)}
          />
          <input
            type="radio"
            value="usersRegistration"
            name="registration"
            id="usersRegistration"
            checked={registationMenue === "usersRegistration"}
            onChange={(e) => changeMenue(e)}
          />
        </div>
      <table className="w-full mx-auto">
      <thead
        style={{ background: "hsla(0, 2%, 95%, 1)" }}
        className="w-full h-12 border-solid border-gray-300 border-2  shadow-gray-300 shadow-md"
      >
        <tr  className="text-center rounded-full">
          <th scope="col" className="px-6 py-3 text-center text-sm font-medium text-black  tracking-wider">NAME</th>
          <th scope="col" className="px-6 py-3 text-center text-sm font-medium text-black  tracking-wider">CONTACT</th>
          <th scope="col" className="px-6 py-3 text-center text-sm font-medium text-black">PHONE NUMBER</th>
          <th scope="col" className="px-6 py-3 text-center text-sm font-medium text-black  tracking-wider">STATUS</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <br />
        {Content}
      </table>

      </div>
    </div>
  );
};

export default AdminRegistration;