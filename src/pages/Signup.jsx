import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

 let nameRef = useRef();
 let emailRef = useRef();
 let passwordRef = useRef();
 let navigate = useNavigate();

 let arr = JSON.parse(localStorage.getItem('Ecom'))  ||  []
 console.log(arr)

 const handleSubmit = (e)=>{
   e.preventDefault()
   // console.log("hello")
   let obj = {
     name:nameRef.current.value,
     email:emailRef.current.value,
     password:passwordRef.current.value
   }
   console.log(obj)
   if(obj.name  && obj.email && obj.password){

     let find = arr.find((ele)=>ele.email===obj.email);
     if(find){
       return alert('user already registered')
     }else{
       arr.push(obj)
       localStorage.setItem('Ecom', JSON.stringify(arr))
       navigate('/login')
       // alert('user registered successfully')
     }

   
   }
   else{
     alert('please fill all the fields')
   }
  
 }
 
  return (
    <div className='flex justify-center mt-[150px]'>
      <form action="" className='bg-indigo-300 flex flex-col w-[350px] p-6 gap-3 rounded-md text-xl '>
        <label htmlFor="">Name</label>
        <input ref={nameRef} type="text" className=' border-2 border-black rounded-md' />
        <label htmlFor="">Email</label>
        <input ref={emailRef} type="email" className=' border-2 border-black rounded-md' />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} type="password" className=' border-2 border-black rounded-md' />
        <button onClick={handleSubmit} className=' bg-indigo-900 text-white py-1 rounded-md cursor-pointer'>Signup</button>
        <p className='text-center'>Already have an account? <Link to={'/login'} className='text-blue-700'>Login</Link> </p>
      </form>
    </div>
  )
}

export default Signup
