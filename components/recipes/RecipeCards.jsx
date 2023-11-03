import Filters from "@/components/filtergroup/Filters";
import RecipeGrid from "./RecipeGrid";

function RecipeCards() {
  return (
    <div>
      <Filters />
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
