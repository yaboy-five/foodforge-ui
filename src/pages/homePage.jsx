import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getFeaturedItems } from "../services/homeService";
import NavCard from "../components/NavCard";

function HomePage() {

    const navigate = useNavigate();

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        loadFeatured();
    }, []);

    const loadFeatured = async () => {
        const data = await getFeaturedItems();
        setFeatured(data);
    };

    return (
        <div style={{ padding: "20px" }}>
            
            {/* Hero Section */}
            <h1>🍔 FoodForge</h1>
            <p>Your fast and simple food ordering system</p>

            <hr />

            {/* Navigation */}
            <h2>Quick Access</h2>

            <NavCard
                title="View Menu"
                description="Browse all available food items"
                onClick={() => navigate("/menu")}
            />

            <NavCard
                title="Cart"
                description="View items you added"
                onClick={() => navigate("/cart")}
            />

            <NavCard
                title="Checkout"
                description="Proceed to payment and order"
                onClick={() => navigate("/checkout")}
            />

            <NavCard
                title="Order Status"
                description="Track your order in real time"
                onClick={() => navigate("/status")}
            />

            <hr />

            {/* Featured Items */}
            <h2>🔥 Featured Items</h2>

            {featured.length === 0 ? (
                <p>Loading featured items...</p>
            ) : (
                featured.map(item => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "8px"
                        }}
                    >
                        <h3>{item.name}</h3>
                        <p>R{item.price}</p>
                    </div>
                ))
            )}

        </div>
    );
}

export default HomePage;