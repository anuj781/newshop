import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import View from "./pages/View"
import About from "./pages/About"


function App() {
 
  let login = true;

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={login===true? <Home/> : <Navigate to={'/login'}/>}/>

      
      <Route path="/about" element={<About/>}/>
      <Route path='/cart' element={login===true? <Cart/> : <Navigate to ='/login'/>}/>
              <Route path='/login' element={login===false? <Login/> : <Navigate to='/'/>}/>
              <Route path='/signup' element={login===false? <Signup/> : <Navigate to='/'/>}/>
              <Route path='/view' element={login===true?<View/>:<Navigate to='/login'/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
