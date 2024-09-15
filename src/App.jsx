import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

// Using outlet method of router dom to specify that each page has a navbar with an outlet
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
