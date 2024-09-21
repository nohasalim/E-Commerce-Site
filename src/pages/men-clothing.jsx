import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import Pagination from "../components/Pagination/Pagination"; // Import the Pagination component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";

function MenClothing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); // Number of products per page
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
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
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

  if (loading) return <div>Loading men&apos;s clothing products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
       <div className="banner-container">
      <img className="banner-img" src="/images/banner2.png" alt="Banner" />
      <Breadcrumbs/>{/* Add Breadcrumbs component here */}

      </div>

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

export default MenClothing;
