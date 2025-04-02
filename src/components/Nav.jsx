import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import CartContext from '../context/CartContext';



const Nav = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  let ctx = useContext(CartContext)
  let navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('loginUser');
    navigate('/login');
  }
  return (
    <div>
    <nav className='bg-indigo-900 text-yellow-50 h-[70px] fixed top-0 left-0 right-0 flex items-center'>
   <div className='flex justify-around w-[100%]'>
   <h1 className='font-extrabold text-2xl '>E-shop.com</h1>
    <div className='md:flex items-center justify-around w-[60%] text-xl hidden'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <div className='flex'>
       <Link to="/cart" className='text-4xl'><TiShoppingCart />
       </Link>
       <sup className='text-xl'>{ctx.cartArr.length}</sup>
       </div>
       <div className='flex gap-5'>
{/* <button className='bg-orange-200 text-red-900 px-4 py-1 rounded-2xl'><Link to="/login">Login</Link></button>  */}
<button onClick={handleLogout} className='bg-blue-700 text-white px-4 py-1 rounded-2xl'>Logout</button> 
{/* <button className='bg-orange-200 text-red-900 px-4 py-1 rounded-2xl'><Link to="/signup">Signup</Link></button> */}
</div>
    </div>
   </div>
  

{showSidebar && <div className='flex flex-col bg-red-900 text-yellow-50 items-center fixed left-0 top-0 h-screen px-30 py-5 gap-10 text-xl md:hidden'>
  <h1 className='font-extrabold text-2xl'>E-shop.com</h1>
 <Link to="/">Home</Link>
 <Link to="/about">About</Link>
       <div className='flex'>
       <Link to="/cart" className='text-4xl'><TiShoppingCart />
       </Link>
       <sup className='text-xl'>{ctx.cartArr.length}</sup>
       </div>
       
<div className='flex flex-col gap-5'>
<button className='bg-orange-200 text-red-900 px-4 py-1 rounded-2xl'><Link to="/login">Login</Link></button> 
<button className='bg-orange-200 text-red-900 px-4 py-1 rounded-2xl'><Link to="/signup">Signup</Link></button>
</div>

 
 
</div>

}

 <h1 className='text-4xl absolute right-4 top-4 md:hidden block' onClick={()=>setshowSidebar(!showSidebar)}><GiHamburgerMenu />
  </h1>
    </nav>

   
    </div>
  )
}

export default Nav
