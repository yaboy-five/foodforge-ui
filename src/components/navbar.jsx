import { Link } from "react-router-dom";

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
        </nav>
    );
}

export default Navbar;
