"use client";

import RecipeCard from "../RecipeCard";
import InfiniteScroll from "react-infinite-scroll-component";
import RecipeCardSkeleton from "@/components/skeleton/RecipeCardSkeleton";
import { useEffect, useState } from "react";

function SearchCards({ name }) {
  const [recipes, setRecipes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [range, setRange] = useState({
    start: 1,
    end: 12,
  });

  async function fetchRecipes(start = 1, end = 12) {
    let url = `/api/recipe/${name}?start=${start}&end=${end}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data => fetchRecipes");
    }

    return res.json();
  }

  const updateRange = () => {
    const newStart = range.end + 1;
    const newEnd = range.end + 12;
    setRange({ start: newStart, end: newEnd });
  };

  useEffect(() => {
    (async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    })();
    updateRange();
  }, []);

  const getMoreRecipeData = async () => {
    const { start, end } = range;
    const data = await fetchRecipes(start, end);
    data.length > 0 ? setHasMore(true) : setHasMore(false);
    setRecipes((prevItems) => [...prevItems, ...data]);
    updateRange();
  };
  return (
    <InfiniteScroll
      className="grid gap-8 my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
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

export default SearchCards;
