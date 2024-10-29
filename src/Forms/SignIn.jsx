import React, { useState} from 'react'
// import React, { useState, useContext} from 'react'


// import { LoginContext } from '../Context/LoginContext';

// import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  // const navigate = useNavigate();

  // const saveItem = () => {
  //   navigate('/Checkout')
  // }

  // axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   axios.get('https://localhost:8081')
  //   .then(res => {
  //     if(res.data.valid) {
  //       navigate('/');
  //     }else{
  //       navigate('/')
  //     }
  //   })
  // })

  const setInput = (event) =>{
    setValues(prev =>({...prev, [event.target.name]: [event.target.name] }))
  }

  // const [email, setEmail ] = useState('');
  // const [email, setEmail ] = useState('');

  // const {setEmail} =useContext(LoginContext)

  return (
    <div>   
      <div className=" flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setInput(event)}
            value={values.email}
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none"
            onChange={(event) => setInput(event)}
            value={values.password}
          />
        </div>
    </div>
)}

export default SignIn
