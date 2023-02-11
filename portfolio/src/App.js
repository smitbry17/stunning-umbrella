import Navbar from "./components/Navbar";
import AboutCard from "./components/AboutCard";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutCard />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
