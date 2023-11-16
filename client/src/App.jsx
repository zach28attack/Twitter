import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {Outlet} from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <SideBar />
    </>
  );
}

export default App;
