import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div>
        <h3>ModaMix.</h3>
        <label>
          400 University Drive Suite 200 Coral Gables,
          <br />
          FL 33134 USA
        </label>
      </div>
      <div>
        <label>Links</label>
        <div>
          <NavLink to="/home">Home</NavLink>
        </div>
        <div>
          <NavLink to="/shop">Shop</NavLink>
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div>
        <label>Help</label>
        <div>
          <NavLink to="#">Payment Options</NavLink>
        </div>
        <div>
          <NavLink to="#">Returns</NavLink>
        </div>
        <div>
          <NavLink to="#">Privacy Policies</NavLink>
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
  );
}
export default Footer;
