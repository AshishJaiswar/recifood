"use client";

import Filters from "@/components/filtergroup/Filters";
import RecipeCard from "@/components/RecipeCard";
import { useEffect, useState } from "react";
import RecipeCardSkeleton from "./skeleton/RecipeCardSkeleton";

function RecipeGrid() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [range, setRange] = useState({
    start: 1,
    end: 20,
  });

  async function getRecipes() {
    const { start, end } = range;
    let url = `/api/recipe?start=${start}&end=${end}`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const getRecipeData = async () => {
    const data = await getRecipes();
    setRecipes(data);
  };

  useEffect(() => {
    getRecipeData();
    // return () => {}
    setLoading(false);
  }, []);
  return (
    <>
      <Filters />
      <div>
        <h3 className="text-lg font-medium my-4 sm:text-2xl">Recipes</h3>
        <p>
          1500+ recipes and counting! Dive into our kitchen and find your next
          culinary masterpiece
        </p>
      </div>

      <div className="grid min-h-[800px] md:min-h-[1200px] gap-8 my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading && (
          <>
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
            <RecipeCardSkeleton />
          </>
        )}
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isNonVeg={[
              "Non Vegetarian",
              "High Protein Non Vegetarian",
              "Eggetarian",
            ].includes(recipe.diet)}
          />
        ))}
      </div>
    </>
  );
}

export default RecipeGrid;
