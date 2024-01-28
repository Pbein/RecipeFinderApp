import { getImagePath } from "../helperFunctions/getImagePath";
import { Link } from "react-router-dom";

const RecipeCard = ({ imageName, title, tags, skillLevel, recipeID = null }) => {
  const imagePath = getImagePath(imageName);

  const recipeIds = {
    ratatouille: "65b5a71071b9ec6b1f3ef8ae",
    // ... add other recipe IDs here
  };

  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/recipes/${recipeID || recipeIds.ratatouille}`}>
        {imagePath && (
          <img src={imagePath} alt={title} className="w-full h-auto" />
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
