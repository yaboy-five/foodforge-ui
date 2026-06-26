import { useEffect, useState } from "react";
import { getMenu } from "../services/menuService";
import { useCart } from "../context/CartContext"

function MenuPage() {
    const [menu, setMenu] = useState([]);
    const [loadding, setLoading] = useState(true);
    const { addToCart } = usecart();

    useEffect(() => {
        loadRecipes();
    }, []);

    const loadRecipes = async () => {
        try {
            const data = await getMenu();
            setMenu(data.recipes);
        } catch (error) {
            console.error("Menu loading Error:",error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h2>Loading menu...</h2>
    }

    return (
        <div>
            <h1>FoodForge Menu</h1>

            {menu.length === 0 ? (
                <p>No menu items available</p>
            ) : (
                menu.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                            padding: "10px",
                            borderRadius: "8px"
                        }}
                    >
                        <h3>{item.name}</h3>
                        <p>Price: R{item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default MenuPage;