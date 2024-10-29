import React from 'react'
import VendorsForm from '../../../Forms/VendorsForm'
const VendorsRegistration = ({registrationData}) => {

    const [isOpen, setIsOpen] = React.useState(false)

    const [selectedItemId, setSelectedItemId] = React.useState(null);
  
    const openVendorForm = (id) => {
      setSelectedItemId(id);
      setIsOpen(!isOpen)
    };

  
  return (
    <>

      <tbody
      className="" 
        
        //  style={{maxHeight:"20rem",
        //  backgroundColor:"red"}}
        >
            {registrationData &&
              registrationData.map(({ id,email,fullname,address,phone}, index) => {
                console.log(registrationData,"hello")

                return (
                  <React.Fragment key={index}>
                    <tr
                    className="text-center shadow-md shadow-gray-500 h-16 rounded-lg"
                    >

                      <td className="">{fullname}</td>
                      <td className="">{address ? address.substring(0, 20) : ""}</td>
                      <td className="">{phone}</td>
                      <td className='text-green-500'>Active</td> 
                    
                      {/* <td className='relative'>
                      <input type="checkbox" id="disable" className="absolute left-8 top-5" />
                      <label htmlFor="disable" className='ml-3 '>Disable</label>
                    </td> */}
                        <td className='cursor-pointer'  onClick={() => openVendorForm(id)}>view </td>
                    </tr>
                    <br />
                  
                    {(selectedItemId === id && isOpen) && <VendorsForm 
                    id={id} fullname={fullname} address={address} phone={phone} email={email}/>} {/* Render VendorsForm only when the selectedItemId matches the current item id */}
                  </React.Fragment>
                );
              })}
        </tbody>
 
    </>
  )
}

export default VendorsRegistration
