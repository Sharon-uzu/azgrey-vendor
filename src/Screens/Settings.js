import React from 'react'
import MainSidebar from '../Components/MainSidebar'
import MainHeader from '../Components/MainHeader'
import img from '../assets/Chicken_Republic_Logo.svg.png'

const Settings = () => {
  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <MainSidebar/>

          <main>
          <MainHeader/>

          <section className='main-division'>

              <div className="left">

                <div className="settings">

                    <div className="set-l">

                        <h3>
                            <p>1</p>
                            Profile
                        </h3>

                        <div className="form">

                            <label htmlFor="Full Name">
                                <p>Your Name</p>
                                <input type="text" />
                            </label>

                            <label htmlFor="Email">
                                <p>Your Email</p>
                                <input type="email" />
                            </label>

                            <label htmlFor="Phone">
                                <p>Your Phone Number</p>
                                <input type="text" />
                            </label>

                            <label htmlFor="Address">
                                <p>Your Address</p>
                                <input type="text" />
                            </label>

                            <button>SEND</button>

                        </div>

                    </div>

                    <div className="set-r">
                        <img src={img} alt="" />
                        <h2>Chicken Republic</h2>
                        <h3>chicken@gmail.com</h3>
                        <h4>091-234-67544</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus sit ipsum qui.</p>

                        
                    </div>
                </div>

            
              </div>

          </section>

          </main>
        
        </section>


    </div>
  )
}

export default Settings