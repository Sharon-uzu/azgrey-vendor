import React,{useState} from 'react'
import MainSidebar from '../Components/MainSidebar'
import MainHeader from '../Components/MainHeader'
import { FaStar } from "react-icons/fa6"; 
import img from '../assets/food.png'
import img1 from '../assets/bg4.png'
import img2 from '../assets/r1.jpg'
import img3 from '../assets/r4.jpg'
import img4 from '../assets/r2.jpg'
import img5 from '../assets/rs.jpg';
import Modal from "react-modal";


const Products = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const Dishes= [
        {
            id:1,
            image:img1,
            name:'Jollof rice and chicken',
            price:'N3,000',
            Quantity:'10 Dishes',
        },
    
        {
            id:2,
            image:img,
            name:'Jollof rice and chicken',
            price:'N3,000',
            Quantity:'10 Dishes',
        },
    
        {
            id:3,
            image:img2,
            name:'Jollof rice and chicken',
            price:'N3,000',
            Quantity:'10 Dishes',
        },
    
        {
            id:4,
            image:img3,
            name:'Jollof rice and chicken',
            price:'N3,000',
            Quantity:'10 Dishes',
        },
    
        {
            id:5,
            image:img4,
            name:'Jollof rice and chicken',
            price:'N3,000',
            Quantity:'10 Dishes',
        },
    
        {
            id:6,
            image:img5,
            name:'Jollof rice and chicken',
            price:'N3,000',
            Quantity:'10 Dishes',
        },
    ]


  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <MainSidebar/>

          <main>
          <MainHeader/>

          <section className='main-division'>

              <div className="left">

                <div className="pro-ducts">
                    <h6 onClick={toggleModal}>CREATE NEW</h6>

                    <div className="products">

                        {
                            Dishes.map((dish, id)=>{
                                return (

                                    <div className="product1" key={id}>
                                        <div className="prod1-c">
                                            <img src={dish.image} alt="" />

                                            <div className="rates">
                                                <div className="star-c">
                                                    <FaStar className='s-i'/>
                                                    <FaStar className='s-i'/>
                                                    <FaStar className='s-i'/>
                                                    <FaStar className='s-i'/>
                                                    <FaStar className='s-i'/>
                                                </div>

                                                <p className='av'>Edit</p>

                                                <p className='rem'>Remove</p>
                                            </div>

                                            <p>Name: <span>{dish.name}</span></p>
                                            <p>Price: <span>{dish.price}</span></p>
                                            <p>Quantity: <span>{dish.Quantity}</span></p>
                                        </div>
                                    </div>

                                    )
                        })
                        }

                    </div>
                </div>

                {/* FIRST MODAL */}


        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <form className='product-form'>

                    <div>
                        <p>Product Name</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Price</p>
                        <input type="text" placeholder='N3,000' />
                    </div>

                    <div>
                        <p>Quantity</p>
                        <input type="text" placeholder='5 Dishes' />
                    </div>

                    <div>
                        <p>Images</p>
                        <input type="file"
                            accept="image/*"
                            multiple
                        />
                    </div>

                    <div>
                        <button type="submit">SEND</button>
                    </div>
                
                </form>
                

              </div>

            </div>
            
          </Modal>

              </div>

          </section>


          </main>
        
        </section>


    </div>
  )
}

export default Products