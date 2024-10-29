import React from "react"
import { useContext, useState } from "react"
import { AppContext } from "../Context/AppContext"
import Modal from "react-modal";
// import Select from "react-select";
import SignIn from '../Forms/SignIn'
import UserSignUpForm from "../Forms/UserSignUpForm";
import { useNavigate } from "react-router-dom";





const Basket = () => {

    // Modal2
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Modal3

  const [isModal2Open, setModal2IsOpen] = useState(false);
  const toggle2Modal = () => {
    setModal2IsOpen(!isModal2Open);
  };
    
    const {
        cart,
        isCart,
        setIsCart,
        getTotalCartItems,
        removeItems,
        addItems,
        cartItems,
    } = useContext(AppContext)
    
   


    const closeCart = () => {
        return setIsCart(!isCart)
    }



console.log(cart)


const navigate = useNavigate();

    const saveItem = () => {
      navigate('/CheckOut')
    }


    const totalAmount = getTotalCartItems()
    return (
        <>
            <div className="w-full h-full  fixed right-0  flex justify-end z-50" style={{ backgroundColor: "hsl(0, 0%, 0%, .4)", zIndex: "4" }}>

                <   div className="bg-white w-full md:w-2/5 pb-32 overflow-y-auto ">

                    <div className="w-11/12 m-auto ">
                        <button className="sticky top-0 -m-5 border-solid border-2 border-slate-300 px-1 h-6 " onClick={closeCart}>X</button>

                        {cart.length === 0 ?
                         (<div>You have not added any items</div>): (

                            <>
                            {cart.map((item) => {
                                const cartItemsId = cartItems[item.id]
                                
                                return(                              
                                < div key={item.id}>
                                    <div className="flex h-1/4 items-center justify-between mt-8 px-4 border-2 rounded-lg p-4 border-solid border-gray-300">
                                        <div className="w-4/12 h-full">
                                            <img src={item.img} alt="" />
                                            <h2 className="">{item.title}</h2>
                                        </div>
                                        <div className="w-2/12 h-2/4 flex justify-between">
                                            <button className="cursor-pointer" onClick={() => removeItems(item.id)} >-</button>
                                            <input type="text"
                                             value={Number(cartItemsId > 0 ? cartItemsId : "1")} 
                                             className="w-4 outline-none m-2"
                                             />
                                            <button className="cursor-pointer" onClick={() => addItems(item.id)}>+</button>
                                        </div>
                                        <p className="w-4/12 text-center">&#x20A6;{cartItemsId === 0 ? item.price : cartItemsId * item.price}</p>
                                    </div>
                                </div>
                            )})}

                            <div className="w-3/5 ml-auto mt-5">
                              {/* <h2></h2> */}
                            <h2 className="text-center"><span className="mr-5">Sum Total=</span>  &#x20A6;{totalAmount >= 1 && totalAmount}</h2>
                            </div>
                           

                            <div className="w-11/12 ml-auto flex justify-start">
                                    
                              <input
                                  type="button"
                                  value="Checkout"
                                  className=" mt-5 border-solid border-black border-4 w-3/5 m-auto mx-auto py-3 px-2 w-11/12 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
                                  onClick={() => setIsOpen(true)}
                                  />
                            </div>
                            
                            </>
                        )}
                    </div>
                </div>
            </div>


            {/* sign in and sign up */}


            <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className=" lg:w-1/2 md:w-3/5 mx-auto w-11/12 bg-white   text-center py-6  flex flex-col gap-6 relative rounded-xl"
        style={{
          overlay: {
            position: "fixed",
            top: "90px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "hsl(0, 0%, 0%, .2)",
            zIndex: 5,
          },
        }}
      >
        <div className="flex justify-between w-11/12 mx-auto font-bold text-lg">
            <span>SIGNIN</span>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>

          <form action="">
              <SignIn/>
              <input
              type="submit"
              value="SignIn"
              className="mt-3 border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
              onClick={saveItem} 
            />
            </form>

          <h1 onClick={() => setModal2IsOpen(true) & setIsOpen(false)}>
            Don't have an account?{" "}
            <span className="cursor-pointer text-yellow-600">SIGN UP</span>
          </h1>
      </Modal>

      {/* Modal3 */}
      {/* SIGNUP */}

      <Modal
        isOpen={isModal2Open}
        onRequestClose={toggle2Modal}
        contentLabel="Example Modal"
        className=" lg:w-1/2 md:w-3/5 mx-auto w-11/12 bg-white mt-1/5  text-center py-6  flex flex-col gap-6 relative top-1/5 mt-6 rounded-xl"
        style={{
          overlay: {
            position: "fixed",
            top: '60px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "hsl(0, 0%, 0%, .2)",
            zIndex: 6,
          },
        }}
      >

          <div className="flex justify-between w-11/12 mx-auto font-bold text-lg">
            <span>SIGNUP</span>
            <button onClick={() => setModal2IsOpen(false) & setIsOpen(false)}>
              X
          </button>
          </div>
        <UserSignUpForm/>
        <h1 onClick={() => setIsOpen(true) & setModal2IsOpen(false)}>
            Already have an account?{" "}
            <span className="cursor-pointer text-yellow-600"> SIGN IN</span>
          </h1>
      </Modal>
        </>
    )
        
    
}

export default Basket