import Filters from "./filtergroup/Filters";
import RecipeGrid from "./RecipeGrid";

function RecipeCards({ filters }) {
  return (
    <div>
      <Filters filters={filters} />
      <div>
        <h3 className="text-lg font-medium my-4 sm:text-2xl">Recipes</h3>
        <p>
          1500+ recipes and counting! Dive into our kitchen and find your next
          culinary masterpiece
        </p>
      </div>
      <RecipeGrid />
    </div>
  );
}

export default RecipeCards;
