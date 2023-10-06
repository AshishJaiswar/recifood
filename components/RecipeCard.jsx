import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
            />
          </CardContent>
        </Card>
        <h4 className="text-base sm:text-lg font-medium mt-2">
          Veg Fried Rice
        </h4>
        <div className="text-slate-500">
          <span>Indian</span>
          <span className="mx-2">•</span>
          <span>Breakfast</span>
        </div>
        <div className="flex justify-between absolute top-2 w-full px-2 sm:px-5 sm:top-4">
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
