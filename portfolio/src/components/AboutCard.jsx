import React,{useState} from "react";
import img from "../images/aboutImage.JPG";
import {FaGithub, FaLinkedin} from "react-icons/fa"

function AboutCard() {
  const [showText, setshowText] = useState(false)
  return (
    
    <div>
      {/* About Description */}
    <div className='flex fixed bg-gray-600 bg-opacity-30 ml-64 h-[30rem] top-64 w-3/5 rounded-lg shadow-xl shadow-black'>
        <p className='text-slate-100 fixed mx-5 text-center text-xl font-semibold leading-loose text-opacity-60 w-[55rem]'>
        Hello, My name is Bryan Smith. I am a very self driven person and
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
     <div className='flex fixed flex-row top-[60%] left-[40%]'>
        <a className='hover:bg-slate-100 hover:bg-opacity-60 hover:rounded-full hover:z-10'href='https://github.com/smitbry17' target="_blank"rel="noopener noreferrer">
          <FaGithub size={130}/>
        </a>
      </div>
      <div className={!showText ? "hidden" : "opacity-0 hover:opacity-100 duration-300 absolute z-10 inset-0 flex justify-center items-center text-2xl text-white font-semibold"}>
        LinkedIn
      </div>
      <div className="flex fixed flex-row top-[60%] left-[30%]"> 
      <a className='hover:bg-slate-100 hover:bg-opacity-60 hover:rounded-sm hover:z-10' onMouseEnter={() => setshowText(true) } onMouseLeave={() => setshowText(false)} href=''>
          <FaLinkedin size={130}/>
        </a>
        </div>

</div>

  );
}

export default AboutCard;
