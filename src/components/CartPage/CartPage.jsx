import useCartStore from "../../store/cartStore";
import { Link } from "node_modules/react-router-dom";

import "./CartPage.css";
function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCartStore();
  const total = getTotal();
  const displayTotal = isNaN(total) ? 0 : total;

  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="cart">

      {cart.length === 0 ? (
        <div className="Empty-cart-style">
          <h3>Your Cart Is Empty </h3>

          <img src="/images/empty-cart.png" alt="Empty Cart" />
          <Link to="/shop">
            <button>Go Shopping</button>
          </Link>
        </div>
      ) : (
        <div className="all-items">

          <div className="selected-items">
            <div className="cart-items1">
              <p>Product</p> <p> Price</p> <p>Quantity </p>
            </div>
            {cart.map((item) => (
              <div className="cart-items" key={item.id}>
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
                  <img src="/images/deleteicon.png" alt="Delete Icon" />
                </button>
              </div>
            ))}
          </div>
          <div className="total-cost">
            <div className="cart-items2">
              <h1>Cart Totals</h1>
              <div className="cart-items3">
                <p>Total : </p>
                <p>{`Rp ${displayTotal.toLocaleString("id-ID")}`}</p>
              </div>
              <button>Check Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
