import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';



const Nav = () => {
  let userStore = useContext(UserContext);
  console.log(userStore)
  let navigate = useNavigate();

  let login = userStore.user.login


  const [showSidebar, setshowSidebar] = useState(false);
  let ctx = useContext(CartContext)
  
  const handleLogout = ()=>{
    userStore.setuser({email:'', login:false})
    localStorage.removeItem('Login')

  
  }


 


  




 

  return (
    <div>
    <nav className='bg-indigo-900 text-yellow-50 h-[70px] fixed top-0 left-0 right-0 flex items-center '>
   <div className='flex justify-between px-5 w-[100%]'>
   <h1 className='font-extrabold text-2xl text-start '>E-shop.com</h1>
    <div className='md:flex items-center justify-around w-[60%] text-xl hidden'>
    {login===true && <Link to="/">Home</Link>}
    {login===true && <Link to="/about">About</Link>}
   { login === true &&  <div className='flex'>
       
       <Link to="/cart" className='text-4xl'><TiShoppingCart />
      </Link>
      
      <sup className='text-xl'>{ctx.cartArr.length}</sup>
      </div>}
       <div className='flex gap-5  ml-70'>
        { login===false &&
          <button className='bg-blue-700 text-white px-4 py-1 rounded-2xl'><Link to="/login">Login</Link></button> 
        }
        {login === true && <button onClick={handleLogout} className='bg-blue-700 text-white px-4 py-1 rounded-2xl'>Logout</button> 
      }
        { login===false && 
        <button className='bg-blue-700 text-white px-4 py-1 rounded-2xl'><Link to="/signup">Signup</Link></button>


        }
</div>
    </div>
   </div>
  

{showSidebar && <div className='flex flex-col bg-indigo-900 text-yellow-50 items-center fixed left-0 top-0 h-screen px-5  gap-10 text-xl md:hidden z-50'>
  <h1 className='font-extrabold text-2xl mt-5'>E-shop.com</h1>
  {login===true &&  <Link to="/">Home</Link>  }
 {login===true&& <Link to="/about">About</Link>}
       {login === true &&
       <div className='flex'>
       <Link to="/cart" className='text-4xl'><TiShoppingCart />
       </Link>
       <sup className='text-xl'>{ctx.cartArr.length}</sup>
       </div>

       }
       
<div className='flex flex-col gap-5'>
  {login === false && <button className='bg-blue-700 text-white px-4 py-1 rounded-2xl'><Link to="/login">Login</Link></button> 
  }
      {login === true && <button onClick={handleLogout} className='bg-blue-700 text-white px-4 py-1 rounded-2xl'>Logout</button> 
      }
  {
    login === false && <button className='bg-blue-700 text-white px-4 py-1 rounded-2xl'><Link to="/signup">Signup</Link></button>

  }
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
