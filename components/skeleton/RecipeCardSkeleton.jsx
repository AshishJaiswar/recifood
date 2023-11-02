import { Skeleton } from "../ui/skeleton";

function RecipeCardSkeleton() {
  return (
    <div>
      <Skeleton className="h-64 w-72 sm:w-80" />
      <Skeleton className="mt-2 h-8 w-72 sm:w-80" />
      <Skeleton className="mt-2 h-4 w-72 sm:w-80" />
      <Skeleton className="mt-2 h-4 w-72 sm:w-80" />
    </div>
  );
}

export default RecipeCardSkeleton;
