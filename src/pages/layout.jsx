import { HashLink as NavLink } from 'react-router-hash-link';
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideBarCart from "../components/SideBarCart/SideBarCart";
import { useState } from "react";

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
      <div className="shop-information">
        <div>
          <img src="/images/quality.png" alt="Quality" />
        </div>
        <div>
          <img src="/images/warranty.png" alt="Warranty" />
        </div>
        <div>
          <img src="/images/shipping.png" alt="Shipping" />
        </div>
        <div>
          <img src="/images/support.png" alt="Support" />
        </div>
      </div>
      <footer>
        <div>
          <h3>Funiro.</h3>
          <label>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </label>
        </div>
        <div>
          <label>Links</label>
          <div>
            <NavLink smooth to="#home">Home</NavLink>
          </div>
          <div>
            <NavLink smooth to="#shop">Shop</NavLink>
          </div>
          <div>
            <NavLink smooth to="#contact">Contact</NavLink>
          </div>
        </div>
        <div>
          <label>Help</label>
          <div>
            <NavLink smooth to="#payment-options">Payment Options</NavLink>
          </div>
          <div>
            <NavLink smooth to="#returns">Returns</NavLink>
          </div>
          <div>
            <NavLink smooth to="#privacy-policies">Privacy Policies</NavLink>
          </div>
        </div>
        <div>
          <div>
            <label>Newsletter</label>
          </div>
          <input placeholder="Enter Your Email Address" />
          <button>SUBSCRIBE</button>
        </div>
      </footer>
      <div className="copyRights">
        <p>Developed By : Eng\ Noha AbdAllah Salim @2024</p>
      </div>
    </main>
  );
}

export default Layout;
