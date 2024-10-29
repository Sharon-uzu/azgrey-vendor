import React from 'react'
import { FaBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";


const MainHeader = () => {
  return (
    <div>
        <div className="mainh">
            <h3>Hello CHICKEN REPUBLIC, here are your avaialable orders.</h3>

            <div className="search-not">
                <div className="notf">
                    <FaBell className='n-i'/>
                    <div className="num">2</div>
                </div>
                <form className="search">
                    <IoSearchOutline  className='s-i'/>
                    <input type="search" placeholder='search' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default MainHeader