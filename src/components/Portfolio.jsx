import React, { useState } from "react";
import jateImg from "../images/jate.png";
import purrfectImg from "../images/purrfect.png";
import boardImg from "../images/board.png";
import "../index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Portfolio() {
  const [selectedImg, setselectedImg] = useState("jate");
  const [selectedItem, setselectedItem] = useState(null);
  let img;
  if (selectedImg === "jate") {
    img = jateImg;
  } else if (selectedImg === "purrfect") {
    img = purrfectImg;
  } else if (selectedImg === "board") {
    img = boardImg;
  }
  let link;
  let galink;
  if (selectedImg === "jate") {
    link = "https://evening-gorge-15067.herokuapp.com/";
    galink = "https://github.com/smitbry17/fantastic-garbanzo";
  } else if (selectedImg === "purrfect") {
    link = "https://cryptic-retreat-89387.herokuapp.com/";
    galink = "https://github.com/talexander91/Purrfect_Pals";
  } else if (selectedImg === "board") {
    link = "https://sdanimc.github.io/shire-board-game/";
    galink = "https://github.com/sdanimc/shire-board-game";
  }
  return (
    // containing div
    <div className=" flex h-full justify-evenly items-center">
      {/* Buttons */}
      <div className="flex overflow-y-hidden overflow-y-none bg-gray-600 bg-opacity-30 ml-64 mt-56 pb-16 h-4/5 w-1/5 rounded-lg shadow-xl shadow-black">
        <ul className="w-full">
          <li
            onClick={() => {
              setselectedItem("jate");
              setselectedImg("jate");
            }}
            type="button"
            className={`flex shadow-black shadow-xl items-center justify-center w-2/4 ml-24 h-20 mt-16 text-slate-100 text-opacity-30 hover:text-white border border-slate-100 hover:bg-black hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${
              selectedItem === "jate" ? "selected" : ""
            }`}
          >
            Jate Text Editor
          </li>
          <li
            onClick={() => {
              setselectedItem("purrfect");
              setselectedImg("purrfect");
            }}
            className={`flex shadow-black shadow-xl items-center justify-center w-2/4 ml-24 h-20 mt-16 text-slate-100 text-opacity-30 hover:text-white border border-slate-100 hover:bg-black hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${
              selectedItem === "purrfect" ? "selected" : ""
            }`}
          >
            Purrfect Pals
          </li>
          <li
            onClick={() => {
              setselectedItem("board");
              setselectedImg("board");
            }}
            className={`flex shadow-black shadow-xl items-center justify-center w-2/4 ml-24 h-20 mt-16 text-slate-100 text-opacity-30 hover:text-white border border-slate-100 hover:bg-black hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${
              selectedItem === "board" ? "selected" : ""
            }`}
          >
            Board and Booze
          </li>
        </ul>
      </div>

      {/* Image section */}

      <a className=" flex bg-gray-600 bg-opacity-30 h-3/5 w-3/6 pt-16 mt-56 rounded-lg shadow-xl shadow-black items-center justify-center">
        <div className="group relative">
          <img
            className="border-slate-100 border-2 w-3/4 h-3/4 rounded-lg ml-32 shadow-xl shadow-black mb-24 hover:cursor-pointer"
            src={img}
            alt=""
          />
          <div className="absolute top-[0.5px] left-[0.5px] w-[74.7%] h-0 flex ml-32 flex-row justify-center items-center bg-black opacity-0 group-hover:h-[363.5px] group-hover:opacity-80 group-hover:rounded-lg group-hover:backdrop-filter group-hover:backdrop-blur-lg duration-500">
            <a
              className="rounded-full bg-slate-100 hover:bg-amber-600 duration-300"
              href={galink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={130} />
            </a>
            <a
              className=" ml-[200px] rounded-full bg-slate-100 hover:bg-amber-600 duration-300"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite size={130} />
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Portfolio;
