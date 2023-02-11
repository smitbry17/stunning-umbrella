import React from "react";
import img from "../images/aboutImage.JPG";

function AboutCard() {
  return (
    
    <div>
      {/* About Description */}
    <div className='flex fixed bg-gray-600 bg-opacity-30 ml-64 h-[30rem] top-64 w-3/5 rounded-lg shadow-xl shadow-black'>
        <p className='text-slate-100 text-center text-xl font-semibold leading-loose text-opacity-60 w-[60rem]'>
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
    <div className='w-1/4 h-1/4 absolute right-56 top-28'>
        <img className='object-contain rounded-lg shadow-xl shadow-black' src={img} alt="" />
    </div>

</div>

  );
}

export default AboutCard;
