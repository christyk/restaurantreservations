import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

const Main = () => {
    return (
        <Routes> 
            <Route path="/" element={<Home />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
        </Routes>
    );
};

export default Main;