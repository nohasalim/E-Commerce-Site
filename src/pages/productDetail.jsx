import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../store/cartStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCartStore();
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;

    addToCart(product, quantity );
    toast.success(
      <div>
        <img
          src={product.image}
          alt="Product"
          style={{ width: "50px", height: "50px" }}
        />
        <p>Successfully Added To Cart</p>
      </div>,
      { autoClose: 1000 } // Toast will disappear after 2 seconds
    );
  };
  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: newQuantity,
      }));
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>Error: {error}</div>;

  return (<>
  <div className="banner-container">
    <img className="banner-img" src="/images/banner2.png" alt="Banner" />
    <Breadcrumbs/>{/* Add Breadcrumbs component here */}

    </div>
    <div className="product-detail">
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h3>{product.title}</h3>
        <h3>Category: <span>{product.category}</span></h3>
        <p>{`Price: Rp ${product.price.toLocaleString("id-ID")}`}</p>
        <h3>Description:</h3>
        <p>{product.description}</p>
        <div className="actions">
          <input
            type="number"
            value={quantities[product.id] || 1}
            onChange={(e) => handleQuantityChange(product.id, e)}
            min="1"
          />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
      <ToastContainer />
    </div></>
    
  );
}

export default ProductDetail;
