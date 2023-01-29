import Navbar from "./components/Navbar";
import AboutCard from "./components/AboutCard";
import Portfolio from "./components/Portfolio";
import "./index.module.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [pages] = useState([
  //   {
  //     name: "about me",
  //   },
  //   { name: "portfolio" },
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className='h-full' id='App'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<AboutCard />}/>
      <Route path='/Portfolio' element={<Portfolio />}/>
    </Routes>
    </div>

  );
}

export default App;
