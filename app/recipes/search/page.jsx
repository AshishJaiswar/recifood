import RecipeCard from "@/components/RecipeCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function SearchResult() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default SearchResult;
