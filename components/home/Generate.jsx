"use client";

import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import RandomFilter from "./RandomFilter";
import Hover from "./Hover";
import ConfettiGenerator from "confetti-js";
import useSound from "use-sound";
import { useState } from "react";
import recipeSet from "@/lib/recipesSet";
import { useKeyPress } from "../custom-hooks/useKeyPress";

function Generate({ filters }) {
  const [recipe, setRecipe] = useState({});
  const [recipeName, setRecipeName] = useState("");
  const [ConfettiPlay] = useSound("/confetti.mp3");
  const [filterBy, setFilter] = useState({
    meal: "random",
    diet: "random",
  });

  useKeyPress(() => {
    handleClick();
  }, ["Space"]);

  // Generating Random number
  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  // Confetti configurations and setup
  const generateConfetti = () => {
    const confettiSettings = {
      target: "my-canvas",
      max: "500",
      size: "1",
      animate: true,
      props: ["circle", "square", "triangle"],
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
      ],
      clock: "30",
      rotate: true,
      height: "500",
      start_from_edge: true,
      respawn: false,
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  };

  // Fetching random recipe on click of Generate button/ Space key
  async function getRecipe() {
    const res = await fetch("/api/random", {
      cache: "no-store",
    });

    if (!res.ok) {
      setRecipeName(null);
      throw new Error("Failed to fetch recipe in generate page");
    }

    return res.json();
  }

  /* Fetching random recipe with filters on click of 
  Generate button / Space key */
  async function getFilteredRecipe() {
    const meal = filterBy.meal;
    const diet = filterBy.diet;
    let url;

    // Constructing url based on selected filter
    if (meal !== "random" && diet !== "random") {
      // If both not selected random
      url = `/api/random/filterby?meal=${meal}&diet=${diet}`;
    } else if (meal !== "random" && diet === "random") {
      /* If meal filter is set other than random such as 
      `Lunch` and diet is set to random */
      url = `/api/random/filterby?meal=${meal}`;
    } else if (meal === "random" && diet !== "random") {
      /* If meal filter is set to random and diet is set set 
      other than random such as `Vegan` */
      url = `/api/random/filterby?diet=${diet}`;
    }

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      setRecipeName(null);
      throw new Error("Failed to fetch recipe in generate page with filters");
    }

    return res.json();
  }

  const handleClick = async () => {
    /* Text animated effect
    - 10 sets of predefined recipes names are kept in `lib/recipeSet.js` file
    - We are randomly choosing a set and looping over array and updating recipeName state
    */
    const setSize = recipeSet.length;
    const randomNum = getRandomNumber(setSize);
    const recipes = recipeSet[randomNum];
    const recipesSize = recipes.length;

    let count = 0;
    const timer = setInterval(() => {
      if (count < recipesSize) {
        setRecipeName(recipes[count]);
        count++;
      } else count = 0;
    }, 200);
    // ------------------------------------------------------------------------------------

    /* Fetching data from supabase via api and upadating recipeName state
    this will be appended at the end.
    */
    let name;
    let data;
    let dataSize;
    if (filterBy.meal === "random" && filterBy.diet === "random") {
      // If filter not selected
      data = await getRecipe();
      setRecipe(data[0]);
      name = data[0]?.name;
    } else {
      // If filter selected
      data = await getFilteredRecipe();
      dataSize = data.length;
      if (dataSize === 0) {
        name = null;
      } else {
        const randomNum = getRandomNumber(dataSize);
        const recipe = data[randomNum];
        setRecipe(recipe);
        name = recipe?.name;
      }
    }

    setTimeout(() => {
      clearInterval(timer);
      setRecipeName(name);
      count = 0;
      if (dataSize !== 0) {
        // If returned data is empty [] then don't execute confetti
        generateConfetti();
        ConfettiPlay();
      }
    }, 2000);
  };

  return (
    <>
      <canvas
        id="my-canvas"
        className="absolute -z-10 w-full rounded-3xl"
      ></canvas>
      <h1
        id="hero-title"
        className="text-3xl min-h-[140px] md:min-h-[230px] font-medium pt-10 pb-8 md:pt-14 lg:pt-20 md:text-5xl lg:text-6xl"
      >
        {recipeName ? (
          <Hover recipeData={recipe}>{recipeName}</Hover>
        ) : recipeName === null ? (
          <span>😅Ops! Please change filter </span>
        ) : (
          <span>Generate a random recipe</span>
        )}
      </h1>
      <RandomFilter
        filters={filters}
        handleSelect={(item) => setFilter({ ...filterBy, ...item })}
      />
      <Button
        id="generate-btn"
        className="md:text-lg md:px-8 md:py-6 hover:bg-violet-600 active:bg-violet-600"
        onClick={handleClick}
      >
        Generate <Dices className="ml-3" />
      </Button>
      <div id="info" className="mt-4 text-sm sm:text-base sm:mt-6">
        Press space to generate a random recipe
      </div>
    </>
  );
}

export default Generate;
