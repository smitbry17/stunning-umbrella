import React from "react";
import img from "../images/unknown.png";

function Portfolio() {
  return (
    <div className=" flex h-full justify-evenly items-center">
      <div className="flex overflow-y-hidden overflow-y-none bg-gray-600 bg-opacity-30 ml-64 mt-28 pb-16 h-4/5 w-1/5 rounded-lg shadow-xl shadow-black">
        <ul className="w-full">
          <li
            type="button"
            className="flex items-center justify-center w-2/4 ml-24 h-20 pt-10 pb-10 mt-20 text-slate-100 text-opacity-30 hover:text-white border border-slate-100 hover:bg-black hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            HTML/CSS
          </li>
          <li className=" flex items-center justify-center active:bg-black active:bg-opacity-30 w-2/4 ml-24 h-20 mt-16 text-slate-100 text-opacity-30 hover:text-white border border-slate-100 hover:bg-black hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Javascript/Framework
          </li>
          <li className=" flex items-center justify-center w-2/4 ml-24 h-20 mt-16 text-slate-100 text-opacity-30 hover:text-white border border-slate-100 hover:bg-black hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Node/SQL
          </li>
          <li></li>
        </ul>
      </div>

      <div className=" flex bg-gray-600 bg-opacity-30 h-3/5 w-3/6 pt-16 mt-28 rounded-lg shadow-xl shadow-black items-center justify-center">
        <img
          className="border-slate-100 border-2 z-10 w-3/4 h-3/4 rounded-lg shadow-xl shadow-black hover:bg-black mb-24 hover:bg-opacity-30 hover:cursor-pointer"
          src={img}
          alt=""
        />
        {/* <Project project={project}/> */}
      </div>
    </div>
  );
}

export default Portfolio;
