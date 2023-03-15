import React from "react";
import {SiMysql, SiMongodb, SiGraphql} from "react-icons/si"
import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io"
import pdfFile from "../images/resume.pdf"

function Skills(){
    return(
        <>
        {/* pause button */}
        {/* <div className="flex absolute top-[5rem] ml-10">
        <input type="checkbox" data-animation-pause id="pausebutton" className="top-[5rem]" />
        <label for="pausebutton" className=" text-white ml-2">Click me to pause animation</label>
        </div> */}

        {/* animation icons */}
        <div className="circulo3" data-animation>

            {/* sql icon */}
            <div className='flex c1 fixed bg-cyan-700 bg-opacity-30 ml-64 h-[6.5rem] w-[7.5rem] rounded-lg shadow-xl shadow-black'>
        <SiMysql className="ml-1" size={110} color="white"/>
        </div>

        {/* html icon */}
        <div className='flex c2 fixed bg-orange-600  ml-64 h-[7rem] w-[7rem] rounded-lg shadow-xl shadow-black'>
        <FaHtml5 size={110} color="white"/>
        </div>

        {/* react icon */}
        <div className='flex c3 fixed bg-gray-600 ml-64 h-[7rem] w-[7.2rem] rounded-lg shadow-xl shadow-black'>
        <FaReact size={110} color="cyan"/>
        </div>

        {/* css icon */}
        <div className='flex c4 fixed bg-cyan-500 ml-64 h-[7rem] w-[7.2rem] rounded-lg shadow-xl shadow-black'>
        <FaCss3Alt size={110} color="white"/>
        </div>

        {/* javascript icon */}
        <div className='flex c5 fixed bg-yellow-200 ml-64 h-[7rem] w-[7.2rem] rounded-lg shadow-xl shadow-black'>
        <IoLogoJavascript size={80} color="black"/>
        </div>

        {/* mongo icon */}
        <div className='flex c6 fixed bg-white ml-64 h-[7rem] pt-8 pl-4 w-[7.2rem] rounded-lg shadow-xl shadow-black'>
        <SiMongodb size={80} color="green"/>
        </div>

        {/* node icon */}
        <div className='flex c7 fixed bg-white ml-64 align-center justify-center h-[7rem] pt-4 w-[7.2rem] rounded-lg shadow-xl shadow-black'>
        <FaNodeJs size={80} color="green"/>
        </div>

        {/* graphql icon */}
        <div className='flex c8 fixed bg-pink-500 ml-64 align-center justify-center h-[7rem] pt-4 w-[7.2rem] rounded-lg shadow-xl shadow-black'>
        <SiGraphql size={80} color="white"/>
        </div>

        </div>
        <div className="flex absolute left-[70rem] top-[6rem] w-[40rem] h-[50rem]">
        <iframe className="left-[30rem]" src={pdfFile} width="100%" height="100%">
        </iframe>
  </div>
        </>
    )
}

export default Skills;