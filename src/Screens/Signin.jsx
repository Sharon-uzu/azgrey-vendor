import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import man from '../assets/Group 11.png'





const Signin = () => {

    const navigate = useNavigate();

    const signup = () => {
        navigate('/order')
      }


  return (
    <>

        
        <section className='form-c'>

           <div className='f-l'>
            <img src={man} alt="" />

           </div>

           <div className='f-r'>
            <h3>Hello There!</h3>
            <p>Fill the form to access your account</p>

            <form className='form'>
              

              <div>
                <input type="email" placeholder=' Email Address' />
              </div>

              <div>
                <input type="password" placeholder='Set a password' />
              </div>
              

              <button type="submit" onClick={signup}>Submit</button>
              {/* <p className='switch'>Already have an account? <Link to='/'>Login</Link></p> */}

            </form>
           </div>

        </section>
    </>
  )
}

export default Signin