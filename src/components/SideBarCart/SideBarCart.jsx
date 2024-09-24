import { useState } from "react";
import "./SideBarCart.css";
import useCartStore from "../../store/cartStore";
import { Link } from "react-router-dom";

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
      <div className="sidebar-header">
        <h2>Shopping Cart</h2>

        <button className="close-shopping-cart" onClick={handleCloseSidebar}>
          ×
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-Img">
          <img src="/images/empty_cart1.png" alt="Empty Cart" />
          <Link to="/shop" onClick={handleCloseSidebar}>
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
                </div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{`${item.quantity} x $${item.price.toLocaleString(
                    "id-ID"
                  )}`}</p>
                </div>
                <div>
                  <button onClick={() => removeFromCart(item.id)}>x</button>
                </div>
              </div>
            ))}
          </div>
          <div className="sidebar-footer">
            <div className="total-div">
              <h2>Total :</h2>
              <span>{` $${displayTotal.toLocaleString("id-ID")}`}</span>
            </div>

            <Link to="/cartpage" onClick={handleCloseSidebar}>
              <button className="cart-btn">Cart</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBarCart;
