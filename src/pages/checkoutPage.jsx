import { useState } from "react";
import {
    reviewOrder,
    processCheckout,
    processPayment,
    orderConfirmation,
    cancelCheckout
} from "../services/checkoutService";

function CheckoutPage() {

    const [order, setOrder] = useState(null);
    const [message, setMessage] = useState("");

    const handleReview = async () => {
        try {
            const data = await reviewOrder();
            setOrder(data);
            setMessage("");
        } catch (error) {
            setMessage("Unable to review order.");
        }
    };

    const handleCheckout = async () => {
        try {
            const data = await processCheckout();
            setOrder(data.data);
            setMessage(data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Checkout failed.");
        }
    };

    const handlePayment = async () => {
        try {
            const data = await processPayment();
            setOrder(data.data);
            setMessage(data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Payment failed.");
        }
    };

    const handleConfirmation = async () => {
        try {
            const data = await orderConfirmation();
            setOrder(data.data);
            setMessage(data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Confirmation failed.");
        }
    };

    const handleCancel = async () => {
        try {
            const data = await cancelCheckout();
            setOrder(data.data);
            setMessage(data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Cancellation failed.");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Checkout</h1>

            <button onClick={handleReview}>Review Order</button>{" "}
            <button onClick={handleCheckout}>Process Checkout</button>{" "}
            <button onClick={handlePayment}>Process Payment</button>{" "}
            <button onClick={handleConfirmation}>Confirm Order</button>{" "}
            <button onClick={handleCancel}>Cancel Order</button>

            <hr />

            {message && <h3>{message}</h3>}

            {order && (
                <div>
                    <h2>Current Order</h2>

                    <p><strong>Order ID:</strong> {order.id}</p>

                    <p>
                        <strong>Status:</strong> {order.orderStatus}
                    </p>

                    <p>
                        <strong>Payment:</strong> {order.paymentStatus}
                    </p>

                    <p>
                        <strong>Total:</strong> R{order.total.toFixed(2)}
                    </p>

                    <h3>Items</h3>

                    <ul>
                        {order.items.map((item) => (
                            <li key={item.id}>
                                {item.name} × {item.quantity} - R{item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;