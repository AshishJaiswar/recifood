"use client";

import RecipeCard from "@/components/recipes/RecipeCard";
import { useEffect, useState } from "react";
import RecipeCardSkeleton from "../skeleton/RecipeCardSkeleton";
import Filters from "./filtergroup/Filters";
import InfiniteScroll from "react-infinite-scroll-component";

function RecipeGrid({ filters }) {
  const [recipes, setRecipes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFiltered, setFiltered] = useState(false);
  const [items, setItems] = useState({}); // FilterItems data
  const [range, setRange] = useState({
    start: 1,
    end: 12,
  });

  async function fetchRecipes() {
    const { start, end } = range;
    let url = `/api/recipe?start=${start}&end=${end}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data => getRecipes");
    }

    return res.json();
  }

  async function fetchFilteredRecipes(filterItems, start, end) {
    let key = Object.keys(filterItems)[0];

    if (key === "meals") {
      key = "course";
    } else if (key === "cuisines") {
      key = "cuisine";
    } else if (key === "diets") {
      key = "diet";
    } else {
      throw new Error("Invalid key");
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterItems),
    };

    let url = `/api/recipe/filterby/${key}?start=${start}&end=${end}`;
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("Failed to fetch data => fetchFilteredRecipes");
    }

    return res.json();
  }

  const getRecipeData = async () => {
    try {
      const data = await fetchRecipes();
      setRecipes(data);
      updateRange();
    } catch (error) {
      console.log(error);
    }
  };

  const updateRange = () => {
    const newStart = range.end + 1;
    const newEnd = range.end + 12;
    setRange({ start: newStart, end: newEnd });
  };

  const getFilteredRecipes = async (filterItems) => {
    try {
      let start = 0;
      let end = 11;
      const data = await fetchFilteredRecipes(filterItems, start, end);
      setRecipes(data);
      setRange({ start: end + 1, end: end + 12 });
    } catch (error) {
      console.log(error);
    }
  };

  const getMoreRecipeData = async () => {
    try {
      let data;
      if (isFiltered) {
        const { start, end } = range;
        data = await fetchFilteredRecipes(items, start, end);
        updateRange();
      } else {
        data = await fetchRecipes();
        updateRange();
      }
      setRecipes((prevItems) => [...prevItems, ...data]);

      data.length > 0 ? setHasMore(true) : setHasMore(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <>
      <Filters
        filters={filters}
        handleFilterApply={(filterItems) => {
          getFilteredRecipes(filterItems);
          setItems(filterItems);
          setFiltered(true);
        }}
      />
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
    </>
  );
}

export default RecipeGrid;
