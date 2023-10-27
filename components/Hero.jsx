"use client";

import { Dices, Pizza, CakeSlice, Soup, Citrus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import RandomFilter from "./RandomFilter";
import ConfettiGenerator from "confetti-js";
import useSound from "use-sound";
import { useState } from "react";

function Home() {
  const [recipe, setRecipe] = useState("");
  const [play] = useSound("/confetti.mp3");

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
  const recipes = [
    "Fried Rice",
    "Biryani",
    "Chicken curry",
    "Frankie",
    "Soup",
    "Cake",
    "Bread",
    "Masala papad",
  ];

  const handleClick = () => {
    const max = recipes.length;
    const randomNum = Math.floor(Math.random() * max);

    let count = 0;
    const timer = setInterval(() => {
      if (count < max) {
        setRecipe(recipes[count]);
        count++;
      } else count = 0;
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
      setRecipe(recipes[randomNum]);
      count = 0;
      generateConfetti();
      play();
    }, 3000);
  };

  return (
    <div id="hero-container" className="relative text-center">
      <canvas
        id="my-canvas"
        className="absolute -z-10 w-full rounded-3xl"
      ></canvas>
      <h1
        id="hero-title"
        className="text-3xl font-medium px-5 py-10 md:py-14 lg:py-20 sm:px-16 md:text-5xl lg:text-7xl xl:px-52"
      >
        {recipe || <span>Generate a random recipe</span>}
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
      <div id="course-container" className="my-16 md:my-28">
        <h2
          id="course-heading"
          className="text-xl font-medium text-slate-700 sm:text-3xl px-10 sm:px-16 lg:px-40 xl:px-60"
        >
          What culinary course ignites your appetite today?
        </h2>
        <div className="grid gap-4 grid-cols-2 grid-rows-2 my-5 sm:my-8 sm:px-20 lg:grid-cols-4 lg:grid-rows-1 xl:px-40">
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            <Pizza className="course-item mr-2" size={20} strokeWidth={1.5} />
            Appetizers
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            <Soup className="course-item mr-2" size={20} strokeWidth={1.5} />
            Main Course
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            <Citrus className="course-item mr-2" size={20} strokeWidth={1.5} />
            Side Dish
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            <CakeSlice
              className="course-item mr-2"
              size={20}
              strokeWidth={1.5}
            />
            Desserts
          </Link>
        </div>
        <div className="text-center">
          <Link className={buttonVariants({ variant: "link" })} href="">
            View All --&gt;
          </Link>
        </div>
      </div>
      <div id="cuisine-container" className="my-16 md:my-28">
        <h2
          id="cuisine-heading"
          className="text-xl font-medium text-slate-700 sm:text-3xl px-10 sm:px-16 lg:px-40 xl:px-60"
        >
          Explore Indian Flavors
        </h2>
        <div className="grid gap-4 grid-cols-2 grid-rows-2 my-5 sm:my-8 sm:px-20 lg:grid-cols-3 lg:grid-rows-1 xl:px-40">
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            Punjabi
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            Maharashtrian
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            South Indian
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            Gujarati
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            Rajasthani
          </Link>
          <Link className={buttonVariants({ variant: "secondary" })} href="">
            North Indian
          </Link>
        </div>
        <div className="text-center">
          <Link className={buttonVariants({ variant: "link" })} href="">
            View All --&gt;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
