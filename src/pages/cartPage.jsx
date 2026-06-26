import { useEffect, useState } from "react";

import { usecart } from "../context/CartContext"

import {
    viewCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
} from "../services/cartService";

function CartPage() {

    const [cart, setCart] = useState(null);
    const [message, setMessage] = useState("");
    const { cart, removeFromCart, clearCart } = useCart();

    const loadCart = async () => {
        const data = await viewCart();
        setCart(data);
    };

    useEffect(() => {
        loadCart();
    }, []);

    const handleAddSample = async () => {
        const data = await addToCart({
            id: 1,
            name: "Burger",
            price: 79.99,
            quantity: 1
        });

        setCart(data.data);
        setMessage(data.message);
    };

    const handleUpdate = async (id) => {
        const newQty = 2;

        const data = await updateCartItem(id, newQty);
        setCart(data.data);
        setMessage(data.message);
    };

    const handleRemove = async (id) => {
        const data = await removeFromCart(id);
        setCart(data.data);
        setMessage(data.message);
    };

    const handleClear = async () => {
        const data = await clearCart();
        setCart(data.data);
        setMessage(data.message);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Cart</h1>

            <button onClick={handleAddSample}>
                Add Sample Burger
            </button>

            <button onClick={handleClear}>
                Clear Cart
            </button>

            <h3>{message}</h3>

            {cart && (
                <div>
                    <h2>Total: R{cart.total.toFixed(2)}</h2>

                    {cart.items.map(item => (
                        <div key={item.id} style={{ marginBottom: "10px" }}>
                            <p>
                                {item.name} × {item.quantity} — R{item.price}
                            </p>

                            <button onClick={() => handleUpdate(item.id)}>
                                + Quantity
                            </button>

                            <button onClick={() => handleRemove(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CartPage;