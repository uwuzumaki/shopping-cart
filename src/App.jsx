/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
