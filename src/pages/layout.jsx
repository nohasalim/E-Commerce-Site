import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideBarCart from "../components/SideBarCart/SideBarCart";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import ShopInformation from "../components/ShopInformation/ShopInformation";
import CopyRights from "../components/CopyRights/CopyRights";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main>
      <NavBar toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      {isSidebarOpen && <SideBarCart closeSidebar={toggleSidebar} />}

      <section className="page-section">
        <Outlet />
      </section>
      <ShopInformation/>
      <Footer/>
      <CopyRights/>
    </main>
  );
}

export default Layout;
