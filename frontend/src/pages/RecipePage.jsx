import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function RecipePage() {
    const params = useParams();
    const recipeId = params.recipeId; // This is the recipe ID from the URL
    console.log(recipeId, params);
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getRecipe() {
            try {
                const response = await axios.get(`http://localhost:5000/api/recipes/${recipeId}`);
                setRecipe(response.data.data); // Assuming your API nests the recipe under 'data'
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        getRecipe();
    }, [recipeId]);
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!recipe) return <div>No recipe found.</div>;

    return (
        <div className="max-w-4xl mx-auto p-4 bg-slate-300">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">{recipe.title}</h1>
            <p className="text-gray-600 mb-6">{recipe.description}</p>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ingredients</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    {recipe.ingredients?.map((ingredient, index) => (
                        <li key={index} className="mb-1">{ingredient.name} - {ingredient.quantity}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Instructions</h2>
                <ol className="list-decimal pl-5 text-gray-700">
                    {recipe.instructions?.map((instruction, index) => (
                        <li key={index} className="mb-4">{instruction.details}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default RecipePage;
