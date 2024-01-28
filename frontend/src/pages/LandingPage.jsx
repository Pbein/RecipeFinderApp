import RecipeCard from "../components/RecipeCard";

function LandingPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-20">
      <RecipeCard
        imageName="Ratatouille.png"
        title="Classic Ratatouille"
        tags="Vegetarian, Vegan, Gluten-Free"
        skillLevel="Difficulty: Anyone can cook!"
      />
      <RecipeCard
        imageName="Paella.png"
        title="Paella"
        tags="Seafood, Gluten-Free, Spanish"
        skillLevel="Difficulty: Intermediate"
      />

      <RecipeCard
        imageName="Charcuterie Board.png"
        title="Charcuterie Board"
        tags="Appetizer, Meat, Cheese, Gluten-Free Option"
        skillLevel="Difficulty: Easy"
      />

      <RecipeCard
        imageName="Caprese Salad.png"
        title="Caprese Salad"
        tags="Vegetarian, Gluten-Free, Italian"
        skillLevel="Difficulty: Easy"
      />

      <RecipeCard
        imageName="Poke Bowl.png"
        title="Poke Bowl"
        tags="Seafood, Rice, Hawaiian"
        skillLevel="Difficulty: Easy"
      />

      <RecipeCard
        imageName="Rainbow Salad.png"
        title="Rainbow Salad"
        tags="Vegetarian, Vegan, Gluten-Free, Healthy"
        skillLevel="Difficulty: Easy"
      />

      <RecipeCard
        imageName="Sushi Platter.png"
        title="Sushi Platter"
        tags="Seafood, Rice, Japanese"
        skillLevel="Difficulty: Advanced"
      />

      <RecipeCard
        imageName="Bibimbap.png"
        title="Bibimbap"
        tags="Rice, Vegetarian Option, Korean"
        skillLevel="Difficulty: Intermediate"
      />

      <RecipeCard
        imageName="Cherry Blossom Cake.png"
        title="Cherry Blossom Cake"
        tags="Dessert, Baking, Floral"
        skillLevel="Difficulty: Advanced"
      />

      <RecipeCard
        imageName="Pavlova.png"
        title="Pavlova"
        tags="Dessert, Gluten-Free, Meringue"
        skillLevel="Difficulty: Intermediate"
      />

      <RecipeCard
        imageName="Croquembouche.png"
        title="Croquembouche"
        tags="Dessert, French, Pastry"
        skillLevel="Difficulty: Advanced"
      />

      <RecipeCard
        imageName="Gazpacho.png"
        title="Gazpacho"
        tags="Soup, Vegetarian, Vegan, Gluten-Free"
        skillLevel="Difficulty: Easy"
      />

      <RecipeCard
        imageName="Laksa.png"
        title="Laksa"
        tags="Soup, Spicy, Southeast Asian"
        skillLevel="Difficulty: Intermediate"
      />

      <RecipeCard
        imageName="Coq au Vin.png"
        title="Coq au Vin"
        tags="Chicken, French, Wine"
        skillLevel="Difficulty: Intermediate"
      />

      <RecipeCard
        imageName="Lobster Thermidor.png"
        title="Lobster Thermidor"
        tags="Seafood, French, Gourmet"
        skillLevel="Difficulty: Advanced"
      />
    </div>
  );
}

export default LandingPage;
