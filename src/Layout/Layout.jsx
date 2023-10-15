import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Header/Footer";

const Layout = () => {
  return (
    <div>
      <div className="bg-[#3B2B2B]">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
