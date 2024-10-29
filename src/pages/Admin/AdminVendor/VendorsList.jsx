import React from 'react'
import logo from "../../../assets/chickenRep.png";
import Modal from 'react-modal';
// import { center } from '@cloudinary/url-gen/qualifiers/textAlignment';

Modal.setAppElement('#root') // Use your application's main container ID
const VendorsList = ({vendors}) => {

  const [mode, setMode] = React.useState({})
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [pendingMode, setPendingMode] = React.useState(null);


// This function creates an empty object and sets the mode to Enable
  React.useEffect(() => {
    const vendorModes = {};
    vendors.data.forEach(vendor => {
      vendorModes[vendor.id] = "Enable";
    });
    setMode(vendorModes);
  }, [vendors]);

  //This functions stores the changed value when it is called

  const changeMode = (e,id) => {
    
    setPendingMode(prevMode => ({
        ...prevMode,
        [id] : e.target.value
      }));  
      setModalIsOpen(true);
  }

  // This function those a check on the selected option to see
  // it we can effect the changes that we had stored

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      setMode(pendingMode);
    }
    setModalIsOpen(false);
  }

  return (
    <>
        <tbody className="text-sm"
          >
            {vendors.data.map(({ id, fullname, address }) => (
              <>
              <tr key={id} className="text-center shadow-md shadow-gray-500 h-14 rounded-lg">
                <td>{id.substring(0, 5)}</td>
                <td className="flex justify-center items-center w-full ">
                  <div className="flex w-12 ">
                  <img src={logo} alt="" className="w-full h-full" />
                  </div>
                </td>
                <td>{fullname}</td>
                <td>{address ? address.substring(0, 10) : ""}</td>
                <td className='text-green-500'>Open</td>
                <td >
                  <select value={mode[id]} onChange={(e)=>changeMode(e,id)} className='shadow-sm shadow-red-50 bg-gray-50 outline-none cursor-pointer'>
                    <option value="Enable" >Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </td>
                <td className='cursor-pointer'>View</td>
              </tr>
              <br />
              </>
            ))}
            </tbody>
            {
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Example Modal"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                marginLeft:"11rem"
              },
              content: {
                width: '25%',
                height: '25%',
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-around",
                margin: 'auto',
                // border:"2px solid red"
              }
            }}
          >
            <h2>Are you sure you want to perform this action</h2>
            <div className='w-11/12 h-10  flex justify-between '>
              <button className='bg-green-700 text-white w-1/5 text-sm rounded-lg' onClick={() => handleConfirmation(true)}>Yes</button>
              <button className='bg-red-500 text-white w-1/5 text-sm rounded-lg' onClick={() => handleConfirmation(false)}>No</button>
              <button className='border-solid border-black border-2 text-black w-2/6 text-sm rounded-lg'  onClick={() => handleConfirmation(false)}>Cancel</button>
            </div>
          </Modal>}
    </>
  )}
export default VendorsList
