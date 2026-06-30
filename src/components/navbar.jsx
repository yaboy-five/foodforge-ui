import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"

function Navbar() {
    return (
        <nav>
            <h2>FoodForge</h2>

            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/menu">Menu</link>
                </li>
                <li>
                    <link to="/status">Order Status</link>
                </li>
                <li>
                    <link to="/checkout">Checkout</link>
                </li>
                <li>
                    <link to="/cart">Cart</link>
                </li>
            </ul>
            <span>Welcome, {user?.username}</span>
            <button onClick={logout}>Logout</button>
        </nav>
    );
}

export default Navbar;
