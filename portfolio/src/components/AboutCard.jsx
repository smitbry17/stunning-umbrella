import React from "react";
import "../index.module.css";
import img from "../images/aboutImage.JPG";

function AboutCard() {
  return (
    <div className='flex h-full'>
    <div className='flex bg-gray-600 bg-opacity-30 ml-64 mt-48 h-96 w-3/5 rounded-lg shadow-xl shadow-black'>
    <div className='flex justify-start pl-12  w-4/5 flex-wrap'>
        <p className='text-slate-100 text-center text-xl font-semibold leading-loose text-opacity-60'>
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
    <div className='w-1/4 h-1/4 absolute right-56 top-28'>
        <img className='object-contain rounded-lg shadow-xl shadow-black' src={img} alt="" />
    </div>

</div>
</div>

  );
}

export default AboutCard;
