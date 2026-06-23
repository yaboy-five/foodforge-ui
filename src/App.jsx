import { useState } from 'react';
import { BrowserRouter, Router, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from './components/navbar';

import Home from "./pages/home";
import Menu from './pages/menu';
import Cart from "./pages/cart";
import Checkout from './pages/checkout';
import Status from './pages/status';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/status" element={<Status />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;