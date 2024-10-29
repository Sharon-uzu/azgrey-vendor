import React,{useState} from 'react'
import MainSidebar from '../Components/MainSidebar'
import MainHeader from '../Components/MainHeader'
import img from '../assets/pizza1.png'
import img1 from '../assets/pie1.png'
import img2 from '../assets/ice1.png'
import img3 from '../assets/cake1.png'
import { HiDotsVertical } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";


const OrderActivity = () => {

    const New = [
        {
            id:1,
            image:img,
            name:'Pizza',
            remainder:'10',
            quantity:3,
            sale:'N30,000',
            amount:'N10,000',
            
    
        },
    
        {
            id:2,
            image:img1,
            name:'Pie',
            remainder:'6',
            quantity:1,
            sale:'N4,000',
            amount:'N4,000',
    
        },
    
        {
            id:3,
            image:img2,
            name:'Ice Cream',
            remainder:'12',
            quantity:2,
            sale:'N3,500',
            amount:'N7,000',
        },
    
        {
            id:4,
            image:img3,
            name:'Cake',
            remainder:'4',
            quantity:1,
            sale:'N9,000',
            amount:'N9,000',
    
        },
    
    ];


    const Favourite = [
        {
            id:1,
            image:img,
            price: "50%(2,667)",
            p_width:'50%',
        },
    
        {
            id:2,
            image:img1,
            price: "63%(2,667)",
            p_width:'63%',
        },
    
        {
            id:3,
            image:img2,
            price: "46%(2,667)",
            p_width:'46%',
        }
    
    ];


  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <MainSidebar/>

          <main>
          <MainHeader/>

          <section className='main-division'>

              <div className="left">

                <div className="total">
                    <h2>TOTAL SALES</h2>
                    <h3>$40, 000</h3>
                </div>


                <div className="table">
                    <h5>RECENT ORDER</h5>
                    <table>

                            <tr className='t-head'>
                                <th></th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Total Sale</th>
                                <th>Amount</th>
                                <th>Remaining item</th>
                                <th></th>
                            </tr>

                            {
                            New.map((table, id)=>{
                                return(
                                <tr key={id} className='t-row'>
                                    <td>
                                        <img src={table.image} alt="image" />
                                    </td>
                                    <td>
                                        <h4>{table.name}</h4>
                                    </td>

                                    <td>{table.quantity}</td>
                                    <td>{table.sale}</td>
                                    <td>{table.amount}</td>
                                    <th>{table.remainder}</th>
                                    <td><HiDotsVertical/></td>
                                                        
                                </tr>
                                )
                                })
                            }

                    </table>

                    <div className="favourite">
                        <h3>Favorite Food</h3>

                    {
                        Favourite.map((fav, id)=>{
                            return(
                            <div className="fav" key={id}>
                                <div className="fav-c">
                                    <img src={fav.image} alt="" />
                                    <div className="stars">
                                        <FaStar className='s-i'/>
                                        <FaStar className='s-i'/>
                                        <FaStar className='s-i'/>
                                        <FaStar className='s-i'/>
                                        <FaStar className='s-i'/>
                                    </div>
                                    <div className="lines">
                                        <div className="line" style={{width:fav.p_width}}></div>
                                    </div>

                                    <p>{fav.price}</p>
                                </div>
                            </div>

                            )
                        })
                    }
                    </div>


                </div>
              </div>

          </section>

          </main>
        
        </section>


    </div>
  )
}

export default OrderActivity