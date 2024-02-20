"use client";

import RecipeCard from "@/components/recipes/RecipeCard";
import { useEffect, useState } from "react";
import RecipeCardSkeleton from "../skeleton/RecipeCardSkeleton";
import Filters from "./filtergroup/Filters";
import InfiniteScroll from "react-infinite-scroll-component";
import { XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

function RecipeGrid({ filters }) {
  const [recipes, setRecipes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isFiltered, setFiltered] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    cuisine: [],
    course: [],
    diet: [],
    totalTimeInMins: 0,
    servings: 0,
    totalCaloriesInCal: 0,
  }); // FilterItems data
  const [range, setRange] = useState({
    start: 1,
    end: 8,
  });

  async function fetchRecipes(start = 1, end = 8) {
    let url = `/api/recipe?start=${start}&end=${end}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data => getRecipes");
    }

    return res.json();
  }

  async function fetchFilteredRecipes(checkedItems, start = 0, end = 7) {
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
    const newEnd = range.end + 8;
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
    setFiltered(false);
    setHasMore(true);
    getRecipeData();
    setRange({ start: 9, end: 16 });
    setCheckedItems({
      cuisine: [],
      course: [],
      diet: [],
      totalTimeInMins: 0,
      servings: 0,
      totalCaloriesInCal: 0,
    });
  };

  useEffect(() => {
    let filterItems = [];
    for (let key in checkedItems) {
      if (checkedItems[key].length || checkedItems[key] >= 1) {
        filterItems.push(key);
      }
    }

    const count = filterItems.length;
    if (count === 0) {
      setFiltered(false);
      getRecipeData();
      updateRange();
    }
    if (isFiltered) {
      getFilteredRecipes(checkedItems);
      setRange({ start: 8, end: 16 });
    }
    setLoading(false);
  }, [checkedItems]);

  return (
    <>
      <Filters
        filters={filters}
        handleFilterApply={(filterItems) => {
          setLoading(true);
          setCheckedItems({ ...checkedItems, ...filterItems });
          setFiltered(true);
        }}
        checkedItems={checkedItems}
        clearFilter={(clearItem) => {
          setLoading(true);
          setHasMore(true);
          setCheckedItems({ ...checkedItems, ...clearItem });
        }}
      />
      <div className="sm:flex sm:items-center">
        <Button
          type="reset"
          variant="link"
          className="text-sm font-normal rounded-xl "
          size="sm"
          disabled={!isFiltered}
          onClick={handleClick}
        >
          <XCircle size={16} strokeWidth={1.5} className="mr-1" />
          Clear All
        </Button>
        <div className="mt-2 sm:ml-2 sm:mt-0">
          {Object.keys(checkedItems).map((item, index) =>
            checkedItems[item].length >= 1 || checkedItems[item] > 0 ? (
              <Badge key={index} variant="secondary" className="mx-1 sm:mx-2">
                {item}
              </Badge>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <Loader2 size={48} className="mr-2 mt-10 animate-spin" />
        </div>
      )}
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
