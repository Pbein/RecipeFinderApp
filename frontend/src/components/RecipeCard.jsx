import { Link } from "react-router-dom";

const RecipeCard = ({ recipeID, title, tags, skillLevel, imageUrl }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/recipes/${recipeID}`}>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="w-full h-auto" />
        )}
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{tags}</p>
        <p className="text-sm text-gray-800">Skill Level: {skillLevel}</p>
        {/* Optionally display or use recipeId here if needed in the future */}
      </div>
    </div>
  );
};

export default RecipeCard;
