import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Jewelry from "./Jewelry";
import SingleJewelry from "./SingleJewelry";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/jewelry" element={<Jewelry/>}/>
        <Route path="/:jewelryId" element={<SingleJewelry/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
