import { Link } from "node_modules/react-router-dom";

function Home() {
  return (
    <>
      
      <section className="homePage">
        <div className="title">
          <label>Categories</label>
        </div>
        <div className="categories">
          <Link to="/shop/electronics">
            <div>
              <img src="/images/electronics.jpeg" alt="Electronics" />
              <h1>Electronics</h1>
            </div>
          </Link>
          <Link to="/shop/jewellery">
            <div>
              <img src="/images/Jewellery.jpeg" alt="Jewellery" />
              <h1>Jewellery</h1>
            </div>
          </Link>
          <Link to="/shop/men-clothing">
            <div>
              <img src="/images/men.png" alt="Men's clothing" />
              <h1>Men&apos;s Clothing</h1>
            </div>
          </Link>
          <Link to="/shop/women-clothing">
            <div>
              <img src="/images/women.jpeg" alt="Women's clothing" />
              <h1>Women&apos;s Clothing</h1>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
