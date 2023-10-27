import RecipeCard from "@/components/RecipeCard";

function SearchResult() {
  return (
    <>
      <div>
        <h2 className="text-lg font-medium mt-4 sm:text-2xl sm:mt-8">
          Search results for <span className="font-bold">“Mutter Panner”</span>
        </h2>
      </div>
      <div className="grid gap-4 my-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        <RecipeCard dietType="veg" />
        <RecipeCard dietType="non-veg" />
        <RecipeCard dietType="veg" />
      </div>
    </>
  );
}

export default SearchResult;
