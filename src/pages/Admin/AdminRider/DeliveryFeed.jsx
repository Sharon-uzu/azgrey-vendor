import React from "react"

const DeliveryFeed = ({riders}) => {

  const [progress, setProgress] = React.useState(true);
  const [pending, setPending] = React.useState(false);
  const [distress, setDistress] = React.useState(false);

      const onProgress = (id) =>{
        // let isProgress = riders.find(val => val.id === id)
        // console.log(isProgress,"progress")
        // console.log(progress,"progress")
        // if(isProgress){
          setProgress((prev => !prev));
        // }
      }
      const onPending = (id) => {
        // let isProgress = riders.find(val => val.id === id)
        // if(isProgress){
        setPending((prev => !prev));
        // }
      }
      const onDistress = (id) =>{
        // let isProgress = riders.find(val => val.id === id)
        // if(isProgress){
        setDistress((prev => !prev));
      // }
        }

    return (
        <>
        <div className="flex  flex-wrap  justify-between items-center h-40 mb-4 p-3">
        <div
          style={{ background: "hsla(0, 63%, 89%, 0.6)" }}
          className="w-1/4 h-32 grid place-items-center shadow-md rounded-xl "
        >
          <span className="text-lg">Total Riders</span>
          <span style={{ color: "#FF3636CC" }} className="text-7xl">
            20
          </span>
        </div>
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-1/4 h-32 grid place-items-center  shadow-md rounded-xl"
        >
          <span className="text-lg"> Active Riders</span>
          <span style={{ color: "#FF3636CC" }} className="text-7xl">
            09
          </span>
        </div>
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-1/4 h-32 grid place-items-center  shadow-md rounded-xl"
        >
          <span className="text-lg"> Riders On Delivery</span>
          <span style={{ color: "#FF3636CC" }} className="text-7xl">
            05
          </span>
        </div>
      </div>
          <table className="w-full mx-auto">
          <thead
            style={{ background: "hsla(0, 2%, 95%, 1)" }}
            className="w-full h-12 border-solid border-gray-300 border-2  shadow-gray-300 shadow-md"
          >
            <tr className="text-center w-full rounded-xl ">
              <th className="">ID</th>
              <th className="">NAME</th>
              <th className="">CURRENT LOCATION </th>
              <th className="">STATUS</th>
              <th className="">MODE</th>
              <th></th>
            </tr>
          </thead>
          <br />
          <tbody>
            {riders &&
              riders.map(({ id, email, fullname, phone,address }, index) => {
                //console.log(riders, "hello");

                return (
                  <React.Fragment key={index}>
                    <tr className="text-center shadow-md shadow-gray-500 h-16 rounded-lg">
                      <td className="">{id.substring(0, 5)}</td>
                      <td className="">{fullname}</td>
                      <td className="">{address}</td>
                      <td className="text-green-500">Active</td>
                      <td className=" flex justify-around items-center h-16">
                        <div className="w-10 cursor-pointer" 
                          onMouseEnter={() => onProgress(id)}
                          onMouseLeave={() => onProgress(id)}
                          >
                          Hover over me
                          {progress && <span>This is some hover text</span>}
                          </div>
                        <div className="w-10 cursor-pointer"
                          onMouseEnter={() => onPending(id)}
                          onMouseLeave={() => onPending(id)}
                          >
                          Hover over me
                          {pending && <span>This is some hover text</span>}
                          </div>
                        <div className="w-10 cursor-pointer"
                          onMouseEnter={() => onDistress(id)}
                          onMouseLeave={() => onDistress(id)}
                          >
                            Hover over me
                            {distress && <span>This is some hover text</span>}
                          </div>
                      </td>
                      <td className="cursor-pointer">view </td>
                    </tr>
                    <br />
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
        </>
    )}

export default DeliveryFeed 