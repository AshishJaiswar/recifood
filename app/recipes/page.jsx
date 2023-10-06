import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Filters from "@/components/Filters";
import RecipeCard from "@/components/RecipeCard";

function Recipes() {
  return (
    <>
      <Navbar />
      <Filters />
      <div>
        <h3 className="text-lg font-medium my-4 sm:text-2xl">Recipies</h3>
        <p>
          6000+ recipes and counting! Dive into our kitchen and find your next
          culinary masterpiece
        </p>
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

export default Recipes;
