import React, { useState } from "react";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cards from "./components/Cards";
import NewRestaurant from "./components/NewRestaurant";
import AddRestaurant from "./components/AddRestaurant";



function App() {

  const [isLoggedIn,  setIsLoggedIn] = useState(false);


  return (
    <div className='min-h-screen bg-[url("./assets/bg-img3.jpg")] bg-cover bg-repeat-y bg-center relative overflow-hidden'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/restaurants" element={<Cards />} />
        <Route path="/logout" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/newrestaurant" element={<NewRestaurant />} />
        <Route path="/addRestaurant" element={<AddRestaurant/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
