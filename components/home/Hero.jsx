import { Badge } from "../ui/badge";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Generate from "./Generate";
import Image from "next/image";

async function Hero({ filters }) {
  return (
    <div className="relative text-center">
      <Generate filters={filters} />
      <div className="my-14 md:my-28">
        <h2
          id="course-heading"
          className="text-xl font-medium text-slate-700 sm:text-3xl sm:px-16 lg:px-40 xl:px-60"
        >
          What culinary course ignites your appetite today?
        </h2>
        <div className="mt-8 sm:mt-14 sm:flex justify-center items-center">
          <Image
            id="collage"
            className="rounded sm:w-1/2"
            src="/foodplates.jpg"
            width={800}
            height={400}
            alt="Food Collage"
          />

          <div className="mt-4 p-5">
            <p>
              Embark on a culinary adventure and unlock the magic of flavors!
              &nbsp;
              <span className="hidden sm:block">
                Dive into our realm by clicking on the recipe view button now.
              </span>
            </p>
            <div className="my-2">
              <Badge className="bg-zinc-800 hover:bg-zinc-800">Appetizer</Badge>
              <Badge className="bg-zinc-800 hover:bg-zinc-800 mx-1 sm:mx-4">
                Snacks
              </Badge>
              <Badge className="bg-zinc-800 hover:bg-zinc-800">Drinks</Badge>
            </div>
            <Link
              href="/recipes"
              className={buttonVariants({ variant: "link" })}
            >
              View Recipes -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
