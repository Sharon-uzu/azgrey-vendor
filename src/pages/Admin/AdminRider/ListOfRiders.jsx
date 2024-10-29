import React from "react";
import Modal from "react-modal";
const ListOfRiders = ({riders}) => {
  const [mode, setMode] = React.useState({});
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [pendingMode, setPendingMode] = React.useState(null);

  // This function creates an empty object and sets the mode to Enable
  React.useEffect(() => {
    const vendorModes = {};
    riders.forEach((vendor) => {
      vendorModes[vendor.id] = "Enable";
    });
    setMode(vendorModes);
  }, [riders]);

  //This functions stores the changed value when it is called

  const changeMode = (e, id) => {
    setPendingMode((prevMode) => ({
      ...prevMode,
      [id]: e.target.value,
    }));
    setModalIsOpen(true);
  };

  // This function those a check on the selected option to see
  // it we can effect the changes that we had stored

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      setMode(pendingMode);
    }
    setModalIsOpen(false);
  };

  return (
    <div className="">
      <table className="w-full mx-auto">
        <thead
          style={{ background: "hsla(0, 2%, 95%, 1)" }}
          className="w-full h-12 border-solid border-gray-300 border-2  shadow-gray-300 shadow-md"
        >
          <tr className="text-center w-full rounded-xl ">
            <th className="">ID</th>
            <th className="">NAME</th>
            <th className="">CONTACT</th>
            <th className="">STATUS</th>
            <th>MODE</th>
            <th></th>
          </tr>
        </thead>
        <br />
        <tbody>
          {riders &&
            riders.map(({ id, email, fullname, phone }, index) => {
              // console.log(riders, "hello");

              return (
                <React.Fragment key={index}>
                  <tr className="text-center shadow-md shadow-gray-500 h-14 rounded-lg">
                    <td className="">{id.substring(0, 5)}</td>

                    <td className="">{fullname}</td>
                    <td className="">{phone ? phone.substring(0, 10) : ""}</td>
                    <td className="text-green-500">Active</td>

                    <td className="relative">
                      <select
                        value={mode[id]}
                        onChange={(e) => changeMode(e, id)}
                        className="shadow-sm shadow-red-50 bg-gray-50 outline-none cursor-pointer"
                      >
                        <option value="Enable">Enable</option>
                        <option value="Disable">Disable</option>
                      </select>
                    </td>
                    <td className="cursor-pointer">view </td>
                  </tr>
                  <br />
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
      {
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Example Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              marginLeft: "11rem",
            },
            content: {
              width: "25%",
              height: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              margin: "auto",
              // border:"2px solid red"
            },
          }}
        >
          <h2>Are you sure you want to perform this action</h2>
          <div className="w-11/12 h-10  flex justify-between ">
            <button
              className="bg-green-700 text-white w-1/5 text-sm rounded-lg"
              onClick={() => handleConfirmation(true)}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white w-1/5 text-sm rounded-lg"
              onClick={() => handleConfirmation(false)}
            >
              No
            </button>
            <button
              className="border-solid border-black border-2 text-black w-2/6 text-sm rounded-lg"
              onClick={() => handleConfirmation(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      }
    </div>
  );
};
export default ListOfRiders;
