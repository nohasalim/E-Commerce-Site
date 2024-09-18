import { useState } from "node_modules/react";
import "./SideBarCart.css";
import useCartStore from "../../store/cartStore";
import { Link } from "node_modules/react-router-dom";

// eslint-disable-next-line react/prop-types
function SideBarCart({ closeSidebar }) {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCartStore();
  const total = getTotal();
  const displayTotal = isNaN(total) ? 0 : total;
  const [isVisible, setIsVisible] = useState(true);

  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCloseSidebar = () => {
    setIsVisible(false);
    closeSidebar();
  };

  if (!isVisible) return null;

  return (
    <div className="sidebar">
      <button className="close-shopping-cart" onClick={handleCloseSidebar}>
        ×
      </button>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart-Img">
          <img src="/images/empty_cart1.png" alt="Empty Cart" />
          <Link to="/shop"  onClick={handleCloseSidebar}>
            <button>Go Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="cart-elements">
            {cart.map((item) => (
              <div className="cart-element" key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} />
                  <h5>{item.title}</h5>
                </div>
                <div>
                  <p>{`Rp ${item.price.toLocaleString("id-ID")}`}</p>
                </div>
                <div>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    min="1"
                  />
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="sidebar-footer">
            <h2>
              Total :<span>{` Rp ${displayTotal.toLocaleString("id-ID")}`}</span>
            </h2>

            <Link to="/cartpage"  onClick={handleCloseSidebar}>
              <button className="cart-btn">Cart</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBarCart;
