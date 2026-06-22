import { useEffect, useState } from "react";
import { browseMenu } from "../services/menuService";

function Menu() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        loadRecipes();
    }, []);

    const loadRecipes = async () => {
        try {
            const data = await browseMenu();
            setRecipes(data.recipes);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Food Menu</h1>

            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <p>Cuisine: {recipe.cuisine}</p>
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        width="200"
                    />
                </div>
            ))}
        </div>
    );
}

export default Menu;