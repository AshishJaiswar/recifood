"use client";

import RecipeCard from "@/components/recipes/RecipeCard";
import { useEffect, useState } from "react";
import RecipeCardSkeleton from "../skeleton/RecipeCardSkeleton";
import Filters from "./filtergroup/Filters";
import InfiniteScroll from "react-infinite-scroll-component";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

function RecipeGrid({ filters }) {
  const [recipes, setRecipes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFiltered, setFiltered] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    course: [],
    cuisine: [],
    diet: [],
  }); // FilterItems data
  const [range, setRange] = useState({
    start: 1,
    end: 12,
  });

  async function fetchRecipes(start = 1, end = 12) {
    let url = `/api/recipe?start=${start}&end=${end}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data => getRecipes");
    }

    return res.json();
  }

  async function fetchFilteredRecipes(checkedItems, start = 0, end = 11) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkedItems),
    };

    let url = `/api/recipe/filterby?start=${start}&end=${end}`;
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
    } catch (error) {
      console.log(error);
    }
  };

  const updateRange = () => {
    const newStart = range.end + 1;
    const newEnd = range.end + 12;
    setRange({ start: newStart, end: newEnd });
  };

  const getFilteredRecipes = async (checkedItems) => {
    try {
      const data = await fetchFilteredRecipes(checkedItems);
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoreRecipeData = async () => {
    try {
      let data;
      if (isFiltered) {
        const { start, end } = range;
        data = await fetchFilteredRecipes(checkedItems, start, end);
      } else {
        const { start, end } = range;
        data = await fetchRecipes(start, end);
      }
      updateRange();
      setRecipes((prevItems) => [...prevItems, ...data]);

      data.length > 0 ? setHasMore(true) : setHasMore(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    getRecipeData();
    setRange({ start: 13, end: 24 });
    setFiltered(false);
    setCheckedItems({
      course: [],
      cuisine: [],
      diet: [],
    });
  };

  useEffect(() => {
    getRecipeData();
    updateRange();
  }, []);
  useEffect(() => {
    if (isFiltered) {
      getFilteredRecipes(checkedItems);
      setRange({ start: 12, end: 23 });
    }
  }, [checkedItems]);

  return (
    <>
      <Filters
        filters={filters}
        handleFilterApply={(filterItems) => {
          setCheckedItems({ ...checkedItems, ...filterItems });
          setFiltered(true);
        }}
        checkedItems={checkedItems}
        clearFilter={(item) => {
          setFiltered(false);
          setCheckedItems({ ...checkedItems, [item]: [] });
        }}
      />
      <div className="sm:flex sm:items-center">
        <Button
          type="reset"
          variant="secondary"
          className="rounded-xl hover:bg-slate-300"
          size="sm"
          disabled={!isFiltered}
          onClick={handleClick}
        >
          <XCircle size={20} strokeWidth={1.6} className="mr-1" />
          Clear All
        </Button>
        <div className="mt-2 sm:ml-2 sm:mt-0">
          {checkedItems.course.length >= 1 ? (
            <Badge variant="secondary" className="mx-1 sm:mx-2">
              meal
            </Badge>
          ) : (
            ""
          )}
          {checkedItems.cuisine.length >= 1 ? (
            <Badge variant="secondary" className="mx-1 sm:mx-2">
              cuisines
            </Badge>
          ) : (
            ""
          )}
          {checkedItems.diet.length >= 1 ? (
            <Badge variant="secondary" className="mx-1 sm:mx-2">
              diets
            </Badge>
          ) : (
            ""
          )}
        </div>
      </div>
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
