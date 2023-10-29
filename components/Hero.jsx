import { Pizza, CakeSlice, Soup, Citrus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Generate from "./Generate";

async function Hero() {
  return (
    <div id="hero-container" className="relative text-center">
      <Generate />
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

export default Hero;
