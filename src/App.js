import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importación corregida
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Returns from "./pages/Returns";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/main.css";
import { CartProvider } from "./context/CartContext"; // Importación corregida
import { ReturnsProvider } from "./context/ReturnsContext"; // Importación corregida
import Orders from "./pages/Orders";

function App() {
  return (
    <CartProvider>
      <ReturnsProvider>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/returns" element={<Returns />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ReturnsProvider>
    </CartProvider>
  );
}

export default App;
