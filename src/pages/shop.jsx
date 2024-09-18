import { useState, useEffect } from "node_modules/react";
import { Link } from "node_modules/react-router-dom";
import { ToastContainer, toast } from "node_modules/react-toastify";
import "node_modules/react-toastify/dist/ReactToastify.css";
import useCartStore from "../store/cartStore";
import Pagination from "../components/Pagination/Pagination"; // Import the Pagination component

function Shop() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); // Number of products per page
  const { addToCart } = useCartStore();
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
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
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // Calculate the current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      
      <div className="shop-page">
        <div className="product">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{`Rp ${product.price.toLocaleString("id-ID")}`}</p>
              </Link>
              <div className="actions">
                <input
                  type="number"
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e)}
                  min="1"
                />
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / productsPerPage)}
          onPageChange={paginate}
        />
        <ToastContainer />
      </div>
    </>
  );
}

export default Shop;
