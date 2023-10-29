"use client";

import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import RandomFilter from "./RandomFilter";
import Hover from "./Hover";
import ConfettiGenerator from "confetti-js";
import useSound from "use-sound";
import { useState } from "react";
import recipeSet from "@/lib/recipesSet";
import Link from "next/link";

function Generate() {
  const [recipe, setRecipe] = useState({});
  const [recipeName, setRecipeName] = useState("");
  const [ConfettiPlay] = useSound("/confetti.mp3");

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

  // Fetching random recipe on click of Generate button

  async function getRecipe() {
    const count = await fetch("/api/count");
    const max = await count.json();
    const randomId = getRandomNumber(max);

    const res = await fetch(`/api/recipe/${randomId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const handleClick = async () => {
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

    const data = await getRecipe();
    setRecipe(data[0]);
    const { name } = data[0];

    setTimeout(() => {
      clearInterval(timer);
      setRecipeName(name); // set recipe fetched from supabase
      count = 0;
      generateConfetti();
      ConfettiPlay();
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
        ) : (
          <span>Generate a random recipe</span>
        )}
      </h1>
      <RandomFilter />
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
