import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';

function App() {
  const location = useLocation();
  
  // State to manage the cart items
  const [cart, setCart] = useState([]);
  
  // Function to add items to the cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const showHeaderAndFooter = location.pathname !== '/login';

  return (
    <>
      {showHeaderAndFooter && <Header cartCount={cart.length} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<CheckOut />} />

      </Routes>
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
