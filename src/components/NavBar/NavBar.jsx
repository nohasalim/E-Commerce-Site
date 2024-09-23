import { useState } from "react";
import { NavLink } from "react-router-dom";
import useCartStore from "../../store/cartStore";

import "./NavBar.css";

// eslint-disable-next-line react/prop-types
function NavBar({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCartStore();
  const displayCartCount = isNaN(cartCount) ? 0 : cartCount;

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <button className="toggle-button" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="logo-div">
        <img src="/images/Logo.png" alt="Logo" />
        <h1>ModaMix</h1>
      </div>

      <div className="cartdiv">
        <button
          className="cart-button"
          onClick={() => {
            closeNav();
            toggleSidebar();
          }}
        >
          <img src="/images/cart.png" alt="Cart" />
          <span className="cart-counter">{displayCartCount}</span>
        </button>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <button className="close-nav" onClick={closeNav}>
          ×
        </button>

        <div>
          <NavLink to="/">
            <div className="logo">
              <img src="/images/Logo.png" alt="Logo" />
              <h1>ModaMix</h1>
            </div>
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/home"
            onClick={closeNav}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/shop"
            onClick={closeNav}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Shop
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/contact"
            onClick={closeNav}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </div>

        <div>
          <button
            className="cart-button"
            onClick={() => {
              closeNav();
              toggleSidebar();
            }}
          >
            <img src="/images/cart.png" alt="Cart" />
            <span className="cart-counter">{displayCartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
