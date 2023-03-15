import React,{useState} from "react";
import img from "../images/aboutImage.JPG";
import {FaGithub, FaLinkedin} from "react-icons/fa"

function AboutCard() {
  return (
    
    <div>
      {/* About Description */}
    <div className='flex fixed bg-gray-600 bg-opacity-30 ml-64 h-[30rem] top-64 w-3/5 rounded-lg shadow-xl shadow-black'>
        <p className='text-slate-100 fixed mx-5 text-center text-xl font-semibold leading-loose text-opacity-60 w-[55rem]'>
        Hello, My name is Bryan Smith. I am a certified Full Stack Developer from the University of California Irvine Full-Stack Development bootcamp. I am a very self driven person and
            have worked with teams and by myself in many capacities in life. At
            a very young age I started building computers and trying to give
            myself a base understanding of coding originally with linux scripts
            and game development. I have also spent a large amount of my life
            competing both in sports and gaming. This has lead me to be in many
            team leadership positions to work towards a mutual end goal or even
            drive myself towards success.

        </p>
    </div>
    {/* About Image */}
    <div className='w-1/4 h-1/4 fixed right-56 top-28'>
        <img className='object-contain rounded-lg shadow-xl shadow-black' src={img} alt="" />
    </div>

     {/* Icons */}
     <div className='group flex fixed flex-col top-[57%] left-[40%]'>
     <span className="invisible group-hover:visible text-center text-slate-100 text-lg">Github</span>
        <a className='hover:bg-slate-100 hover:bg-opacity-60 hover:rounded-full hover:z-10'href='https://github.com/smitbry17' target="_blank"rel="noopener noreferrer">
          <FaGithub size={130}/>
        </a>
      </div>
      <div className=" group flex fixed flex-col top-[57%] left-[30%]">
      <span className="invisible group-hover:visible text-center text-slate-100 text-lg">Linkedin</span>
      <a className='hover:bg-slate-100 hover:bg-opacity-60 hover:rounded-xl hover:z-10' href='https://www.linkedin.com/in/bryan-smith-286043198/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={130}/>
        </a>
        </div>

</div>

  );
}

export default AboutCard;
