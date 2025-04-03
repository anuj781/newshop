import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Typed from 'typed.js';
import UserContext from '../context/UserContext';


const Login = () => {

  let userStore = useContext(UserContext)
  console.log(userStore)
  
  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();

  let database= JSON.parse(localStorage.getItem('Ecom'))  ||  []
  console.log(database)

  const handleSubmit = (e) =>{
  e.preventDefault()
  // console.log("hi")
  let obj = {
    email:emailRef.current.value,
    password:passwordRef.current.value
  }
  console.log(obj)
  let find = database.find((ele) => ele.email === obj.email);

  if (find) {
    if (find.password === obj.password) {
      localStorage.setItem('Login',JSON.stringify({email:obj.email, login:true}))
       userStore.setuser({email:obj.email, login:true})
      // navigate('/')
    } else {
      alert("wrong password");
    }
  } else {
    return alert("user not found please signup");
  }
  }
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Login page'],
      typeSpeed: 120,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div>
      

      <div className='flex justify-center mt-[150px]'>
     
      
     
      <form action="" className='bg-indigo-400 flex flex-col w-[350px] h-[370px] px-6 py-6 gap-3 rounded-md text-white text-xl'>
      <h3 className='mt-300px'>This is  <span ref={el} /></h3>
        <label htmlFor="">Email</label>
        <input ref={emailRef} type="email" className=' border-2 border-white rounded-md' />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} type="password" className=' border-2 border-white rounded-md' />
        <button onClick={handleSubmit} className='bg-indigo-700 text-white rounded-md py-1 cursor-pointer'>Login</button>
        <p className='text-center'>Already have an account? <Link to={'/signup'} className='text-blue-700'>Signup</Link> </p>
      </form>
    </div>
    </div>
  )
}

export default Login
