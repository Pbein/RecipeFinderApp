import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function RecipePage() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getRecipe() {
            try {
                const response = await axios.get(
                    `http://localhost:5000/recipes/${recipeId}`
                );
                setRecipe(response.data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        getRecipe();
    }, [recipeId]);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {recipe && (
                <div>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                </div>
            )}
        </div>
    );
}

export default RecipePage;