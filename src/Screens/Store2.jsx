import React, { useState ,useContext } from "react";
// import React, { useState, useEffect,useContext } from "react";
import { AppContext } from "../Context/AppContext";
// import axios from "axios";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Modal from "react-modal";
// import Select from "react-select";
// import baseUrl from "../Components/baseUrl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import p1 from "../assets/f1dc3c1262230b2b.png";
import p2 from "../assets/bg.jpg";
import p3 from "../assets/bg3.png";
import p4 from "../assets/bg4.png";
import UserNavBar from "../Components/HeaderBar";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../assets/logo2-removebg-preview.png";
import { AiFillBell } from "react-icons/ai";
// import { BsFillFileBreakFill, BsFillPersonFill, BsHeartbreak } from "react-icons/bs";
import { BsFillPersonFill} from "react-icons/bs";

import { BsFillCartFill } from "react-icons/bs";
import Basket from "../Components/Basket";
import SignIn from '../Forms/SignIn'
import UserSignUpForm from "../Forms/UserSignUpForm";
import { useNavigate } from "react-router-dom";

const Store2 = () => {
  // const [selectDrinks, setSelectDrinks] = useState();
  // const [selectProtein, setSelectProtein] = useState()
  // function handleSelect(data) {
  //   setSelectProtein(data);
  // }
  const {cart,isCart, setIsCart} = useContext(AppContext)

  // let data = JSON.stringify({
  //   fullname: "Daniel Nneeh",
  //   email: "chridanielwise@gmail.com",
  //   password: "123458",
  //   department: "Front-end",
  //   role: "Vendor",
  //   phone: "0909378452134",
  //   address: "some where in uk",
  // });

  // useEffect(() => {
  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,

  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIwZDBlNWI2MmJkYjVkODY3NTM4ZDIiLCJyb2xlIjoiU3RhZmYiLCJpYXQiOjE2ODE1NTQ1NDcsImV4cCI6MTY4MTY0MDk0N30.yLW9wlBlQfDSWkXtQwGgQ_F8bG-wlL5R33Bva7qhEUo",
  //     },
  //   };
  //   axios
  //     .post(`${baseUrl}`, data, config)
  //     .then((res) => console.table(res))
  //     .catch((error) => console.log(error));
  // });

  const userData = [
    {
      id: 1,
      img: p2,
      name: "Rice",
      price: 3000,
      order: "Buy",
    },
    {
      id: 2,
      img: p1,
      name: "Yam",
      price: 2500,
      order: "Buy",
    },
    {
      id: 3,
      img: p3,
      name: "Okro soup",
      price: 2000,
      order: "Buy",
    },

    {
      id: 4,
      img: p4,
      name: "Beans",
      price: 2000,
      order: "Buy",
    },
    {
      id: 5,
      img: p2,
      name: "Egusi soup",
      price: 4000,
      order: "Buy",
    },
    {
      id: 6,
      img: p1,
      name: "Spaghetti",
      price: 1500,
      order: "Buy",
    },

    {
      id: 7,
      img: p2,
      name: "Rice",
      price: 3000,
      order: "Buy",
    },
    {
      id: 8,
      img: p1,
      name: "Rice",
      price: 2500,
      order: "Buy",
    },
    {
      id: 9,
      img: p3,
      name: "Rice",
      price: 2000,
      order: "Buy",
    },
  ];

  const [foodItems, setFoodItems] = useState([]);
  

  const storeItem = (Id) => {
    let stored = userData.filter((val) => val.id === Id);
    return setFoodItems(stored[0]);
  };

  // meal
  const navigate = useNavigate();

    const saveItem = () => {
      navigate('/CheckOut')
    }
 

  // modal

  const [isMealOpen, setMealIsOpen] = useState(false);
  const toggle1Modal = () => {
    setMealIsOpen(!isMealOpen);
  };

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

  

  // const option2 = [
  //   { value: "Coke", label: "Coke" },
  //   { value: "Fanta", label: "Fanta" },
  //   { value: "Sprite", label: "Sprite" },
  //   { value: "Malt", label: "Malt" },
  //   { value: "Water", label: "Water" },
  // ];

  // const option3 = [
  //   { value: "Chicken", label: "Chicken" },
  //   { value: "Beef", label: "Beef" },
  //   { value: "Moimoi", label: "Moimoi" },
  //   { value: "Fish", label: "Fish" },
  // ];

  // const [selectProtein, setSelectProtein] = useState();
  // const handleChange = event => {
    // console.log(even.target.value);
    // setSelectProtein(event.target.value);

    // const { value } = event.target;
    // if (event.target.value === "Chicken") {
    //   amount = num2 * 500
    // } else if (event.target.value === "Beef") {
    //   amount = num2 * 700;
    // }
  // };


  // const option3 = [
  //   { value:"", label:"Choose Protein"},
  //   { value: "chicken", label: "Chicken" },
  //   { value: "beef", label: "Beef" },
  //   { value: "moimoi", label: "Moimoi" },
  //   { value: "fish", label: "Fish" },
  // ];


  const [num, setNum] = useState(1);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 1) setNum(num - 1);
  };


  const [num2, setNum2] = useState(0);
  const incNum2 = () => {
    setNum2(num2 + 1);
  };

  const decNum2 = () => {
    if (num2 >= 1) setNum2(num2 - 1);
  };


  const [num3, setNum3] = useState(0);
  const incNum3 = () => {
    setNum3(num3 + 1);
  };

  const decNum3 = () => {
    if (num3 >= 1) setNum3(num3 - 1);
  };



  // var amount;
  // const find = (event) => {

  const [num4, setNum4] = useState(0);
  const incNum4 = () => {
    setNum4(num4 + 1);
  };

  const decNum4 = () => {
    if (num4 >= 1) setNum4(num4 - 1);
  };

  const [proteinNum, setProteinNum] = useState(0);
  // const [selectProtein, setSelectProtein] = useState();
  const [selectedValue, setSelectedValue] = useState('');


  
  

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
  
    // Conditional statement based on selected value
    if(value === "chicken"){
      setProteinNum(1000);
      if(num2 === 0){
        setNum2(num2 + 1);
      }
      
     
    }
    else if(value === 'beef'){
      setProteinNum(700);
      if(num2 === 0){
        setNum2(num2 + 1);
      }
    
    }

     else if(value === 'moimoi'){
      setProteinNum(500);
      if(num2 === 0){
        setNum2(num2 + 1);
      }
     
    }

     else if(value === 'fish'){
      setProteinNum(1200);
      if(num2 === 0){
        setNum2(num2 + 1);
      }
      
    }
  };


  const [drinkNum, setDrinkNum] = useState(0);
  // const [selectProtein, setSelectProtein] = useState();
  const [selectedDrinkValue, setSelectedDrinkValue] = useState('');


  
  

  const handleSelectDrinkChange = (event) => {
    const value = event.target.value;
    setSelectedDrinkValue(value);
  
    // Conditional statement based on selected value
    if(value === "coke"){
      setDrinkNum(500);
      if(num3 === 0){
        setNum3(num3 + 1);
      }
      console.log('hi')
    }
    else if(value === "fanta"){
      setDrinkNum(400);
      if(num3 === 0){
        setNum3(num3 + 1);
      }
    }
    else if(value === "sprite"){
      setDrinkNum(400);
      if(num3 === 0){
        setNum3(num3 + 1);
      }
    }
    
    else if(value === "malt"){
      setDrinkNum(700);
      if(num3 === 0){
        setNum3(num3 + 1);
      }
    }
  };



  // var amount;
  // const find = (event) => {

    
  // };


  return (
    <div className="relative ">
    <UserNavBar
        image={logo} imageClassName="w-40 object-contain"
        logoImage="/"

        text="Shop"
        navClassName="w-full h-20 bg-black flex justify-between items-center"
        divClassName="w-3/5 lg:w-1/2 md:w-1/2 ml-4 "
        btnClassName="hidden"
        cartIcon="flex"
        number = {cart.length}
        listClassName="flex sm:w-3/5 md:w-1/5 lg:w-1/5 mr-4 justify-around items-center   gap-2 bg-red text-white text-4xl"
        item1={<AiFillBell className="cursor-pointer text-2xl"/>}
        item3={<BsFillPersonFill className="cursor-pointer text-2xl"/>}

        item2={<BsFillCartFill className="cursor-pointer text-2xl" onClick={() =>(setIsCart(true))} />}
       />

      {isCart && <Basket/>}

    <div className="md:block lg:block hidden">
      <Swiper
      
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 1 }}
        className="pt-5"
       
      >
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p1} alt="" className="h-64 w-full"  />
        </SwiperSlide>
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p2} alt="" className="h-64 w-full" />
        </SwiperSlide>
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p4} alt="" className="h-64 w-full" />
        </SwiperSlide>
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p3} alt="" className="h-64 w-full" />
        </SwiperSlide>
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p2} alt="" className="h-64 w-full" />
        </SwiperSlide>
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p4} alt="" className="h-64 w-full" />
        </SwiperSlide>
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p3} alt="" className="h-64 w-full" />
        </SwiperSlide>
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p2} alt="" className="h-64 w-full" />
        </SwiperSlide>
        <SwiperSlide className="col-md-6 d-flex justify-content-center align-items-center w-full">
          <img src={p4} alt="" className="h-64 w-full" />
        </SwiperSlide>
       
      </Swiper>

</div>
      <h1 className="text-4xl font-bold w-11/12 m-auto pt-20">MEALS</h1>

      <div className=" lg:w-11/12 md:w-11/12 sm:w-full  mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-20 justify-between ">
        {userData &&
          userData.map(({ id, img, name, price, order }, index) => {
            return (
              <div
                className="w-11/12 border-2 m-auto border-solid border-yellow p-4 rounded-md mb-4"
                key={index}
              >
                <img src={img} alt="" className="w-full h-48 mb-4" />
                <span className="flex justify-between font-bold text-lg pb-4">
                  {name}
                  <span></span>
                  {price}
                </span>
                {/* <SignUpButton text={`order`} className=" text-md hover: text-black border-solid border-2 font-bold"  onClick={() => setIsOpen(true)} />  */}
                <button
                  className="text-md hover: text-black border-solid border-2  w-fit px-5 py-1 lg:2/5 lg:h-12  md:h-12 rounded-2xl font-semibold"
                  style={{
                    border: "2px solid rgba(254, 206, 47, 1)",
                    backgroundColor: "rgba(254, 206, 47, 1)",
                  }}
                  onClick={() => {
                    storeItem(id);
                    setMealIsOpen(true);
                  }}
                >
                  {order}
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <Modal
          isOpen={isMealOpen}
          onRequestClose={toggle1Modal}
          contentLabel="Example Modal"
          className="  mx-auto md:w-2/4 lg:w-2/4 w-full bg-white mt-1/5  text-center py-6  relative top-1/5 mt-6 rounded-xl"
          style={{
            overlay: {
              position: "fixed",
              top: '60px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "hsl(0, 0%, 0%, .2)",
              zIndex: 2,
            },
          }}
        >
          <div className="flex justify-between w-11/12 mx-auto font-bold text-lg pb-4 ">
            <span>MEAL</span>
            <button onClick={() => setMealIsOpen(false)}>X</button>
          </div>
          <div className="w-11/12 m-auto mb-2">
            <img
              src={foodItems.img}
              alt=""
              className="w-1/5"
              style={{ objectFit: "contain" }}
            />
          </div>

          <form className="flex justify-between">
            <div className="flex w-2/3">
              <div className="flex flex-col gap-6 w-3/5">
                <h1 className="font-bold">SELECT</h1>

                <div className="border-solid border-rgb(59 130 246 / 0.5) flex flex-col text-start justify-center border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none">
                  {foodItems.name}
                </div>
                {/* <Select
                  placeholder="Protein"
                  options={option3}

                  // value={selectProtein}
                  // onChange={(text) => setSelectProtein(text)}
                  // onChange={handleChange}

                  value={selectProtein}
                  id="protein"
                  onChange={handle()}
                  // onChange={selP()}

                  // {...option3.map(option => (
                    // <option key={option.value} value={option.value}>
                  //     {option.text}
                  //   </option>
                  // ))}   
                  isSearchable={true}
                  // isMulti

                  className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none"
                /> */}

                <select onChange={handleSelectChange} value={selectedValue} className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none">
                  <option value="">Choose protein</option>
                  <option value="chicken">Chicken</option>
                  <option value="beef">Beef</option>
                  <option value="moimoi">Moi-moi</option>
                  <option value="fish">Fish</option>

                </select>
                <select onChange={handleSelectDrinkChange} value={selectedDrinkValue} className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none">
                  <option value="">Choose drinks</option>
                  <option value="coke">Coke</option>
                  <option value="fanta">Fanta</option>
                  <option value="sprite">Sprite</option>
                  <option value="malt">Malt</option>

                </select>

                <div className="border-solid border-rgb(59 130 246 / 0.5) flex flex-col text-start justify-center border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none">
                  Water
                </div>

                
              </div>

              <div className="flex flex-col gap-6 w-2/5">
                <h1 className="font-bold">AMOUNT</h1>

                <span className="w-4/5 mx-auto flex justify-between h-10 items-center border-2 border-solid border-red">
                  <span
                    className="flex w-1/5 justify-center h-full items-center"
                    style={{ background: "#5e5e5e", cursor: "pointer" }}
                    onClick={decNum}
                  >
                    -
                  </span>
                  <span
                    style={{
                      borderLeft: "2px solid #5e5e5e",
                      borderRight: "2px solid #5e5e5e",
                      height: "100%",
                    }}
                    className="flex items-center w-3/5 justify-center"
                  >
                    {num}
                  </span>
                  <span
                    className="flex  w-1/5 justify-center h-full items-center"
                    style={{ background: "#5e5e5e", cursor: "pointer" }}
                    onClick={incNum}
                  >
                    +
                  </span>
                </span>
                <span className="w-4/5 mx-auto flex justify-between h-10 items-center border-2 border-solid border-red">
                  <span
                    className="flex w-1/5 justify-center h-full items-center"
                    style={{ background: "#5e5e5e", cursor: "pointer" }}
                    onClick={decNum2}
                  >
                    -
                  </span>
                  <span
                    style={{
                      borderLeft: "2px solid #5e5e5e",
                      borderRight: "2px solid #5e5e5e",
                      height: "100%",
                    }}
                    className="flex items-center w-3/5 justify-center"
                  >
                    {num2}
                  </span>
                  <span
                    className="flex  w-1/5 justify-center h-full items-center"
                    style={{ background: "#5e5e5e", cursor: "pointer" }}
                    onClick={incNum2}
                  >
                    +
                  </span>
                </span>

                <span className="w-4/5 mx-auto flex justify-between h-10 items-center border-2 border-solid border-red">
                  <span
                    className="flex w-1/5 justify-center h-full items-center"
                    style={{ background: "#5e5e5e", cursor: "pointer" }}
                    onClick={decNum3}
                  >
                    -
                  </span>
                  <span
                    style={{
                      borderLeft: "2px solid #5e5e5e",
                      borderRight: "2px solid #5e5e5e",
                      height: "100%",
                    }}
                    className="flex items-center w-3/5 justify-center"
                  >
                    {num3}
                  </span>

                  <span
                    className="flex  w-1/5 justify-center h-full items-center"
                    style={{ background: "#5e5e5e", cursor: "pointer" }}
                    onClick={incNum3}
                  >
                    +
                  </span>
                </span>


                <span className="w-4/5 mx-auto flex justify-between h-10 items-center border-2 border-solid border-red">
                  <span
                    className="flex w-1/5 justify-center h-full items-center"
                    style={{ background: "#5e5e5e", cursor: "pointer" }}
                    onClick={decNum4}
                  >
                    -
                  </span>
                  <span
                    style={{
                      borderLeft: "2px solid #5e5e5e",
                      borderRight: "2px solid #5e5e5e",
                      height: "100%",
                    }}
                    className="flex items-center w-3/5 justify-center"
                  >
                    {num4}
                  </span>

                  <span
                    className="flex  w-1/5 justify-center h-full items-center"
                    style={{ background: "#5e5e5e", cursor: "pointer" }}
                    onClick={incNum4}
                  >
                    +
                  </span>
                </span>

                
              </div>
            </div>

            <div className="w-1/3 m-auto flex flex-col gap-6 ">
              <h1 className="text-center font-bold">PRICES</h1>

              <p className="h-10">&#x20A6;{num * foodItems.price}</p>
              <p className="h-10">&#x20A6;{num2 * proteinNum}</p>
              <p className="h-10">&#x20A6;{num3 * drinkNum}</p>
              <p className="h-10">&#x20A6;{num4 * 150}</p>

              <hr className="w-3/5 m-auto" />

              <span className="text-start w-3/5 m-auto">Total = &#x20A6;{(num * foodItems.price) + (num2 * proteinNum) + (num3 * drinkNum) + (num4 * 150)}</span>
              <hr className="w-3/5 m-auto" />
              <div className="">
                <input
                  type="button"
                  value="Checkout"
                  className=" my-4 border-solid border-black border-4 w-fit mx-auto py-3 px-2 w-11/12 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold"
                  onClick={() => setIsOpen(true) && setMealIsOpen(false)}
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>

      {/* Modal2 */}

      {/* SIGN IN */}

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
            zIndex: 2,
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
            zIndex: 2,
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
    </div>
  )
}

export default Store2