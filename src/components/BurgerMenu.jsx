import React, { useState } from 'react'
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineClose}from "react-icons/ai"
import { NavLink } from 'react-router-dom'
function BurgerMenu() {
    const [handle,setHandle] = useState(true)
   
  return (
    <div>
        <div className='mb-5 relative'>
        

        {handle && <button className='lg:hidden' onClick={() => setHandle(false)}><RxHamburgerMenu size={30}></RxHamburgerMenu></button>}
      {!handle && <button onClick={() => setHandle(true)}><AiOutlineClose size={30}></AiOutlineClose></button>}
   

      {!handle && <div>
        <div className="gap-2 bg-[#F0F6FF] dark:bg-[#181920]   px-7 py-2 absolute rounded-xl flex flex-col ">
          <NavLink className="text-gray-500" to="/">
            Home
          </NavLink>
          <NavLink className="text-gray-500" to="/about">
            About
          </NavLink>
          <NavLink className="text-gray-500" to="/product">
            Products
          </NavLink>
          <NavLink className="text-gray-500" to="/cart">
            Cart
          </NavLink>
        </div>
       </div>}

 
        </div>
         

       
    </div>
  )
}

export default BurgerMenu