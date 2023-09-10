import { Dices, Pizza, CakeSlice, Soup, Citrus } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div id="hero-container" className="text-center">
      <h1
        id="hero-title"
        className="text-3xl font-medium mt-10 mb-10 px-5 sm:px-16 md:mb-20 md:text-5xl md:mt-14 lg:mt-20 lg:text-7xl xl:px-52"
      >
        Generate a random recipe
      </h1>
      <Button
        id="generate-btn"
        className="md:text-lg md:px-8 md:py-6 hover:bg-violet-600 active:bg-violet-600"
      >
        Generate <Dices className="ml-3" />
      </Button>

      <div id="info" className="mt-4 text-sm sm:text-base sm:mt-6">
        Press space to generate a random recipe
      </div>
      <div className="my-16 md:my-28">
        <h2
          id="course-heading"
          className="text-xl font-medium text-slate-700 sm:text-3xl px-10 sm:px-16 lg:px-40 xl:px-60"
        >
          What culinary course ignites your appetite today?
        </h2>
        <div className="grid gap-4 grid-cols-2 grid-rows-2 my-5 sm:my-8 sm:px-20 lg:grid-cols-4 lg:grid-rows-1 xl:px-40">
          <Button variant="secondary">
            <Pizza className="course-item mr-2" size={20} strokeWidth={1.5} />
            Appetizers
          </Button>
          <Button variant="secondary">
            <Soup className="course-item mr-2" size={20} strokeWidth={1.5} />
            Main Course
          </Button>
          <Button variant="secondary">
            <Citrus className="course-item mr-2" size={20} strokeWidth={1.5} />
            Side Dish
          </Button>
          <Button variant="secondary">
            <CakeSlice
              className="course-item mr-2"
              size={20}
              strokeWidth={1.5}
            />
            Desserts
          </Button>
        </div>
        <div className="text-center">
          <Button variant="link">View All --&gt;</Button>
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
          <Button variant="secondary" className="cuisine-item">
            Punjabi
          </Button>
          <Button variant="secondary" className="cuisine-item">
            Maharashtrian
          </Button>
          <Button variant="secondary" className="cuisine-item">
            South Indian
          </Button>
          <Button variant="secondary" className="cuisine-item">
            Gujarati
          </Button>
          <Button variant="secondary" className="cuisine-item">
            Rajasthani
          </Button>
          <Button variant="secondary" className="cuisine-item">
            North Indian
          </Button>
        </div>
        <div className="text-center">
          <Button variant="link" className="view-all">
            View All --&gt;
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
