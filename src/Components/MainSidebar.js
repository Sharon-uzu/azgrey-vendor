import React,{useState} from 'react';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import logo from '../assets/Chicken_Republic_Logo.svg.png';
// import logo2 from '../Assets/logo2.png'
import { RiLogoutBoxRLine } from "react-icons/ri";
import {BsFillBagFill} from "react-icons/bs"
import { FaUserAlt} from "react-icons/fa";
import {ImSpinner10}from "react-icons/im"
import {GiCubes} from "react-icons/gi"
import {TbTruckDelivery} from "react-icons/tb"
import {SlSettings} from "react-icons/sl"
import { MdDashboard } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";





const MainSidebar = () => {

    const [open, setOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  
    const [open1, setOpen1] = useState(false);

    const [isOpen1, setIsOpen1] = useState(false);
    const toggle1 = () => setIsOpen1 (!isOpen1);

    const [click, setClick] = useState(false);
  const handleClick = () => {
    setOpen1(!open1);
  }


  return (
    <div>
      
    
      <div className="media-bar" onClick={handleClick}>
        {open1 ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' />)}
      </div>
      {/* <FaBars className='media-bar'  onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}/> */}
      

      <div className='side' style={{width:isOpen ? "70px" : "200px"}}>

        <section className='sidebar' style={{width:isOpen ? "70px" : "250px"}}>

            <section>
        

                <div className='bar' >

                    
                    <div className='logo-div' style={{width:isOpen ? "50px" : "65px"}}>
                        <img src={logo} onClick={toggle} />
                    </div>

                    {/* <div className='logo-div' style={{display:isOpen ? "block" : "none"}}>
                        <img src={logo} onClick={toggle}/>
                    </div> */}
                    
                
                </div>


                <NavLink to='/dashboard' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                    <MdDashboard className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>DASHBOARD</h4>

                    </div>
                
                </NavLink>
                
                <NavLink to='/order' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                    <BsFillBagFill className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>LIVE ORDER</h4>

                    </div>
                
                </NavLink>


                <NavLink to='/rider' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                    <FaUserAlt className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>RIDER</h4>

                    </div>
                
                </NavLink>

           

              

                <NavLink to='/activity' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <ImSpinner10 className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>ORDER ACTIVITY</h4>

                    </div>
                
                </NavLink>

                <NavLink to='/product' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <GiCubes className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>PRODUCT</h4>

                    </div>
                
                </NavLink>


                <NavLink to='/delivery' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <TbTruckDelivery className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>DELIVERY</h4>

                    </div>
                
                </NavLink>

                <NavLink to='/settings' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <SlSettings className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>SETTINGS</h4>

                    </div>
                
                </NavLink>


        
            </section>



        <section className='log'>



            <NavLink to='/' className='link logout links' activeclassName = 'active'>
                
                    
                    
                <RiLogoutBoxRLine className='icon'/>
                <h4 style={{display:isOpen ? "none" : "block"}}>LogOut</h4>

                
                </NavLink>

        </section>


        </section>
            
    </div>






    <div style={{width:isOpen ? "70px" : "200px"}} className={`side2 ${open1 ? ' active' : 'inactive'}`}>

        <section className='sidebar' style={{width:isOpen ? "70px" : "250px"}}>

            <section>
        

                <div className='bar' >

                    
                    <div className='logo-div' style={{width:isOpen ? "50px" : "65px"}}>
                        <img src={logo} onClick={toggle} />
                    </div>

                    {/* <div className='logo-div' style={{display:isOpen ? "block" : "none"}}>
                        <img src={logo} onClick={toggle}/>
                    </div> */}
                    
                
                </div>


                <NavLink to='/dashboard' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                    <MdDashboard className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>DASHBOARD</h4>

                    </div>
                
                </NavLink>
                
                <NavLink to='/order' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                    <BsFillBagFill className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>LIVE ORDER</h4>

                    </div>
                
                </NavLink>


                <NavLink to='/rider' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                    <FaUserAlt className='icon'/>
                    <h4 style={{display:isOpen ? "none" : "block"}}>RIDER</h4>

                    </div>
                
                </NavLink>

           

              

                <NavLink to='/activity' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <ImSpinner10 className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>ORDER ACTIVITY</h4>

                    </div>
                
                </NavLink>

                <NavLink to='/product' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <GiCubes className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>PRODUCT</h4>

                    </div>
                
                </NavLink>


                <NavLink to='/delivery' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <TbTruckDelivery className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>DELIVERY</h4>

                    </div>
                
                </NavLink>

                <NavLink to='/settings' className='link links' activeclassName = 'active'>
                
                    <div className='one'>
                    
                        <SlSettings className='icon'/>
                        <h4 style={{display:isOpen ? "none" : "block"}}>SETTINGS</h4>

                    </div>
                
                </NavLink>


        
            </section>



        <section className='log'>



            <NavLink to='/' className='link logout links' activeclassName = 'active'>
                
                    
                    
                <RiLogoutBoxRLine className='icon'/>
                <h4 style={{display:isOpen ? "none" : "block"}}>LogOut</h4>

                
                </NavLink>

        </section>


        </section>
            
    </div>
       
       
            
    </div>
  )
}

export default MainSidebar