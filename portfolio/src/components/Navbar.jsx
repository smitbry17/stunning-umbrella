import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed flex w-full h-[60px] justify-between items-center px-4 z-10 bg-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-slate-200 text-slate-200">
   
    <div>
      <span>My Portfolio</span> 
      </div>
     
     {/* Menu */}
      
        <ul className='flex'>
      <Link to='/' className=" hover:cursor-pointer border-r-2 hover:scale-120 hover:border-r-8">About Me</Link>
      <Link  to='/Skills' className=" hover:cursor-pointer border-r-2 hover:scale-120 hover:border-r-8">Skills</Link>
      <Link to='/Contact' className=" hover:cursor-pointer border-r-2 hover:scale-120 hover:border-r-8">Contact</Link>
      <Link to='/Portfolio' className=" hover:cursor-pointer border-r-2 hover:scale-120 hover:border-r-8">Portfolio</Link>
      </ul>

      {/* Hamburger */}
      <div className='hidden'></div>

      {/* Mobile */}
      <div className='hidden'></div>
</div>
  )
}

export default Navbar