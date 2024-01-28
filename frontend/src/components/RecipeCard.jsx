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

const RecipeCard = ({ imageName, title, tags, skillLevel }) => {
    const imagePath = getImagePath(imageName);

    return (
        <div className="card bg-white rounded-lg shadow-md overflow-hidden">
             {imagePath && <img src={imagePath} alt={title} className="w-full h-auto" />}
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-600">{tags}</p>
                <p className="text-sm text-gray-800">Skill Level: {skillLevel}</p>
            </div>
        </div>
    );
};

export default RecipeCard;
