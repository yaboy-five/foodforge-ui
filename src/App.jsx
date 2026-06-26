import { useState } from 'react';
import { BrowserRouter, Router, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import NavBar from './components/navBar';

import HomePage from "./pages/homePage";
import MenuPage from './pages/menuPage';
import CartPage from "./pages/cartPage";
import CheckoutPage from './pages/checkoutPage';
import StatusPage from './pages/statusPage';

import { CartProvider } from './context/CartContext';

function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/status" element={<StatusPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;