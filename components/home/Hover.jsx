import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Flame,
  Clock4,
  Drumstick,
  Utensils,
  ChefHat,
  Soup,
  LeafyGreen,
} from "lucide-react";
import Image from "next/image";

function Hover({ recipeData, children }) {
  const {
    name,
    cuisine,
    course,
    diet,
    totalCaloriesInCal,
    servings,
    totalTimeInMins,
    link,
    imgURL,
  } = recipeData;

  return (
    <>
      <HoverCard>
        <HoverCardTrigger
          href={link}
          target="_blank"
          className="hover:underline underline-offset-8 decoration-4 leading-tight decoration-violet-600"
        >
          {children}
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div>
            <div>
              <Image
                className="rounded-lg"
                src={imgURL}
                width={300}
                height={100}
                alt={name}
              />
            </div>
            <div className="mt-2 text-left">
              <h3 className="text-lg">{name}</h3>
              <div className="text-slate-800 text-base mt-2">
                <p className="flex items-center">
                  <span>
                    <Clock4 size={18} strokeWidth={1.6} />
                  </span>
                  <span className="ml-2">{totalTimeInMins} mins</span>
                </p>
                <p className="flex my-1">
                  <span>
                    <ChefHat size={20} strokeWidth={1.6} />
                  </span>
                  <span className="ml-2">{cuisine}</span>
                </p>
                <p className="flex my-1">
                  <span>
                    <Soup size={20} strokeWidth={1.6} />
                  </span>
                  <span className="ml-2">{course}</span>
                </p>
                <p className="flex my-1">
                  {diet === "Non Vegetarian" || diet === "Eggetarian" ? (
                    <span className="text-rose-500">
                      <Drumstick size={20} strokeWidth={1.6} />{" "}
                    </span>
                  ) : (
                    <span className="text-green-500">
                      <LeafyGreen size={20} strokeWidth={1.6} />{" "}
                    </span>
                  )}
                  <span className="ml-2">{diet}</span>
                </p>
                <p className="flex my-1 ">
                  <span className="text-orange-500">
                    <Flame size={20} strokeWidth={1.6} />
                  </span>
                  <span className="ml-2">Calories - {totalCaloriesInCal}</span>
                </p>
                <p className="flex my-1 ">
                  <span>
                    <Utensils size={20} strokeWidth={1.6} />
                  </span>
                  <span className="ml-2">Servings - {servings}</span>
                </p>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
}

export default Hover;
