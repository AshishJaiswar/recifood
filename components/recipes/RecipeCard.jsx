import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function RecipeCard({
  recipe: {
    name,
    prepTimeInMins,
    cookTimeInMins,
    totalTimeInMins,
    servings,
    cuisine,
    course,
    diet,
    totalCaloriesInCal,
    link,
    imgURL,
  },
  isNonVeg,
}) {
  return (
    <>
      <div>
        <Link href={link} target="_blank">
          <div className="relative">
            <Card>
              <CardContent className="p-0 h-64">
                <Image
                  className="rounded-lg transition-all duration-200 ease-in  hover:brightness-75"
                  src={imgURL}
                  fill={true}
                  alt={name}
                  loading="lazy"
                  quality={10}
                />
              </CardContent>
            </Card>
            <div className="flex justify-between text-center absolute top-2 w-full px-2 sm:px-5 sm:top-4">
              <Badge className="bg-zinc-800">{totalTimeInMins} min</Badge>
              <Badge
                className={
                  isNonVeg
                    ? "bg-rose-500 hover:bg-rose-500"
                    : "bg-green-500 hover:bg-green-500"
                }
              >
                {isNonVeg ? "Non Veg" : "Veg"}
              </Badge>
            </div>
          </div>
        </Link>
        <h4 className="text-base sm:text-lg font-medium mt-2">
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-4 decoration-2 decoration-violet-600"
          >
            {name}
          </Link>
        </h4>
        <div className="text-sm text-slate-500 font-medium">
          <div className="flex flex-wrap mb-1">
            <span>{cuisine},</span>
            <span className="ml-1">{course}</span>
          </div>
          <div className="flex">
            <span className="flex mr-4 font-semibold">
              <Flame
                size={18}
                strokeWidth={1.6}
                className="text-orange-500 mr-px"
              />
              {totalCaloriesInCal} cal
            </span>
            <span className="flex  items-center font-semibold">
              <Utensils size={16} strokeWidth={1.6} className="mr-1" />
              {servings} servings
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
