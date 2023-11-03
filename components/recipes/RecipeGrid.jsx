"use client";

import RecipeCard from "@/components/recipes/RecipeCard";
import { useEffect, useState } from "react";
import RecipeCardSkeleton from "../skeleton/RecipeCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

function RecipeGrid() {
  const [recipes, setRecipes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [range, setRange] = useState({
    start: 1,
    end: 12,
  });

  async function getRecipes() {
    const { start, end } = range;
    let url = `/api/recipe?start=${start}&end=${end}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data => getRecipes");
    }

    return res.json();
  }

  const getRecipeData = async () => {
    try {
      const data = await getRecipes();
      setRecipes(data);
      const newStart = range.end + 1;
      const newEnd = range.end + 12;
      setRange({ start: newStart, end: newEnd });
    } catch (error) {
      console.log(error);
    }
  };

  const getMoreRecipeData = async () => {
    try {
      const data = await getRecipes();
      setRecipes((prevItems) => [...prevItems, ...data]);

      data.length > 0 ? setHasMore(true) : setHasMore(false);

      const newStart = range.end + 1;
      const newEnd = range.end + 12;
      setRange({ start: newStart, end: newEnd });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <InfiniteScroll
      className="grid min-h-[800px] md:min-h-[1200px] gap-8 my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      dataLength={recipes?.length} //This is important field to render the next data
      next={getMoreRecipeData}
      hasMore={hasMore}
      loader={
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
          <RecipeCardSkeleton />
          <RecipeCardSkeleton />
        </>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {recipes &&
        recipes.map((recipe) => (
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
    </InfiniteScroll>
  );
}

export default RecipeGrid;
