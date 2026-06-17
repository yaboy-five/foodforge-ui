// template imports
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

// my Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/status" element={<h1>Order Status</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Welcome to FoodForge</h1>
        <p>Order your favourite meals online.</p>
      </main>

      <Footer />
    </>
  );
}

export default App;
