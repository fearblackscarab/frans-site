import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Bracelets from "./pages/Bracelets";
import Necklaces from "./pages/Necklaces"
import Earrings from "./pages/Earrings"
import SingleJewelry from "./pages/SingleJewelry";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bracelets" element={<Bracelets/>}/>
        <Route path="/necklaces" element={<Necklaces/>}/>
        <Route path="/earrings" element={<Earrings/>}/>
        <Route path="/:jewelryId" element={<SingleJewelry/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
