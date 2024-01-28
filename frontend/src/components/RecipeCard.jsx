// const RecipeCard = ({ image, title, tags, skillLevel }) => {
//     return (
//         <div className="card bg-white rounded-lg shadow-md overflow-hidden">
//             <img src={require('../assets/FoodImages/$(image)')} alt={title} className="w-full h-auto"/>
//             <div className="p-4">
//                 <h3 className="text-lg font-bold">{title}</h3>
//                 <p className="text-sm text-gray-600">{tags}</p>
//                 <p className="text-sm text-gray-800">Skill Level: {skillLevel}</p>
//             </div>
//         </div>
//     );
// }

// export default RecipeCard;

import { getImagePath } from "../helperFunctions/getImagePath";
import { Link } from "react-router-dom";

const RecipeCard = ({ imageName, title, tags, skillLevel, recipeID }) => {
    const imagePath = getImagePath(imageName);

    const recipeIds = {
        ratatouille: "65b5a71071b9ec6b1f3ef8ae",
        // ... add other recipe IDs here
    };

    return (
        <Link to={`/recipes/${recipeIds.ratatouille}`}>
        <div className="card bg-white rounded-lg shadow-md overflow-hidden">
             {imagePath && <img src={imagePath} alt={title} className="w-full h-auto" />}
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-600">{tags}</p>
                <p className="text-sm text-gray-800">Skill Level: {skillLevel}</p>
                {/* Optionally display or use recipeId here if needed in the future */}
            </div>
        </div>
        </Link>
    );
};

export default RecipeCard;
