import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import ProductDetail from "./pages/productDetail";
import Jewellery from "./pages/jewellery";
import Electronics from "./pages/electronics";
import MenClothing from "./pages/men-clothing";
import WomenClothing from "./pages/women-clothing";
import CartPage from "./components/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} /> {/* Default route */}
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/shop/jewellery" element={<Jewellery />} />
          <Route path="/shop/electronics" element={<Electronics />} />
          <Route path="/shop/men-clothing" element={<MenClothing />} />
          <Route path="/shop/women-clothing" element={<WomenClothing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
