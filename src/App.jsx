import { BrowserRouter, Routes, Route } from "node_modules/react-router-dom";
import { useState } from "react";

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
import NavBar from "./components/NavBar/NavBar";
import SideBarCart from "./components/SideBarCart/SideBarCart";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <NavBar toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      {isSidebarOpen && <SideBarCart closeSidebar={toggleSidebar} />}
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
