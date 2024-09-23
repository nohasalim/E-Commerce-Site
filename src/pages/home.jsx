import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="homebanner" id="home">
        <img src="/images/banner1.png" alt="Banner" />
      </div>
      <div className="homePage">
        <div className="title">
          <h1>Categories</h1>
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
      </div>
    </section>
  );
}

export default Home;
