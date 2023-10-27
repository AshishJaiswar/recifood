import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Dot } from "lucide-react";
import Image from "next/image";

function RecipeCard({ dietType }) {
  return (
    <>
      <div className="relative">
        <Card>
          <CardContent className="p-0">
            <Image
              className="rounded-lg"
              src="/omlet.jpg"
              width={500}
              height={500}
              alt="Recipe Item"
            />
          </CardContent>
        </Card>
        <h4 className="text-base sm:text-lg font-medium mt-2">
          Veg Fried Rice
        </h4>
        <div className="text-sm text-slate-500 flex flex-wrap sm:text-base">
          Indian <Dot /> Breakfast <Dot />
          <span className="flex">
            <Flame size={20} strokeWidth={1.6} /> 120 Cal
          </span>
        </div>
        <div className="flex justify-between text-center absolute top-2 w-full px-2 sm:px-5 sm:top-4">
          <Badge>20 min</Badge>
          <Badge
            className={
              dietType === "veg"
                ? "bg-green-500 hover:bg-green-500"
                : dietType === "non-veg"
                ? "bg-rose-500 hover:bg-rose-500"
                : "*"
            }
          >
            {dietType === "veg" ? "Veg" : "Non Veg"}
          </Badge>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
