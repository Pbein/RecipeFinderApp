import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { useState, useEffect } from "react";

function LandingPage() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axios.get(`http://localhost:5000/api/recipes`);
        setRecipes(response.data.data); // Assuming your API nests the recipe under 'data'
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!recipes.length) return <div>No recipe found.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-20">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipeID={recipe._id}
          title={recipe.title}
          tags={recipe.tags || recipe.description}
          skillLevel={recipe.skillLevel}
          imageUrl={recipe.imageUrl}
        />
      ))}
    </div>
  );
}

export default LandingPage;
