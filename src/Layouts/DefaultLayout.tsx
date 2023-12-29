import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Layout/Navbar/Navbar";
import Footer from "../components/Layout/Footer/Footer";

const DefaultLayout = () => {
  const pathName = useLocation().pathname;
  console.log(pathName);
  return (
    <div>
      <div className="main">
        <Navbar />
        <div className="contentContainer">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
