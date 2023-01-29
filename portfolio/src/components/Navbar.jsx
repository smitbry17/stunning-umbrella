import React from 'react'
import '../index.module.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
  <>
    <nav className="sticky top-0 z-10 bg-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-slate-200">
  <div className="max-w-vwy mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-slate-200 font-semibold ">My Portfolio</span>
      <div className="flex space-x-4 text-slate-200 ml-11">
      <Link to='/' className=" hover:cursor-pointer border-r-2 pl-4 pr-6 hover:scale-120 hover:border-r-8">About Me</Link>
      <span  className=" hover:cursor-pointer border-r-2 pl-4 pr-6 hover:scale-120 hover:border-r-8">Skills</span>
      <span className=" hover:cursor-pointer border-r-2 pl-4 pr-6 hover:scale-120 hover:border-r-8">Contact</span>
      <Link to='/Portfolio' className=" hover:cursor-pointer border-r-2 pl-4 pr-6 hover:scale-120 hover:border-r-8">Portfolio</Link>
      </div>
    </div>
    </div>
</nav>
</>
  )
}

export default Navbar