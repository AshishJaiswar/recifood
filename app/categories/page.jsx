import CategoryCard from "@/components/CategoryCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Categories() {
  return (
    <>
      <Navbar />
      <div id="popular" className="my-6 lg:my-14">
        <h2 className="text-xl font-medium text-slate-700 my-4 sm:mb-8 sm:text-3xl">
          Most popular dishes
        </h2>
        <div className="grid gap-4 justify-items-center grid-cols-3 sm:grid-cols-6 md:gap-8">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <div id="cuisines-category" className="my-10 lg:my-14">
        <h2 className="text-xl font-medium text-slate-700 my-4 sm:my-4 sm:text-3xl">
          Cuisines
        </h2>
        <p className="mb-6 hidden sm:block">
          Explore vibrant flavours of various cuisines
        </p>
        <div className="grid gap-4 justify-items-center grid-cols-3 sm:grid-cols-6 md:gap-8">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <div id="courses-category" className="my-10 lg:my-14">
        <h2 className="text-xl font-medium text-slate-700 my-4 sm:my-4 sm:text-3xl">
          Courses
        </h2>
        <p className="mb-6 hidden sm:block">
          Explore recipes based on your course meal
        </p>
        <div className="grid gap-4 justify-items-center grid-cols-3 sm:grid-cols-6 md:gap-8">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <div id="courses-category" className="my-10 lg:my-14">
        <h2 className="text-xl font-medium text-slate-700 my-4 sm:my-8 sm:text-3xl">
          Drinks
        </h2>
        <div className="grid gap-4 justify-items-center grid-cols-3 sm:grid-cols-6 md:gap-8">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <div id="courses-category" className="my-10 lg:my-14">
        <h2 className="text-xl font-medium text-slate-700 my-4 sm:my-8 sm:text-3xl">
          Baking
        </h2>
        <div className="grid gap-4 justify-items-center grid-cols-3 sm:grid-cols-6 md:gap-8">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Categories;
