import { useState } from 'react';
import { BrowserRouter, Router, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from './components/navbar';

import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import HomePage from "./pages/homePage";
import MenuPage from './pages/menuPage';
import CartPage from "./pages/cartPage";
import CheckoutPage from './pages/checkoutPage';
import StatusPage from './pages/statusPage';

import { CartProvider } from './context/CartContext';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route 
                    path="/" 
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    } 
                />

                <Route 
                    path="/menu" 
                    element={
                        <ProtectedRoute>
                            <MenuPage />
                        </ProtectedRoute>
                    } 
                />

                <Route 
                    path="/cart" 
                    element={
                        <ProtectedRoute>
                            <CartPage />
                        </ProtectedRoute>
                    } 
                />

                <Route 
                    path="/checkout" 
                    element={
                        <ProtectedRoute>
                            <CheckoutPage />
                        </ProtectedRoute>
                    } 
                />

                <Route 
                    path="/status" 
                    element={
                        <ProtectedRoute>
                            <StatusPage />
                        </ProtectedRoute>
                    } 
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;