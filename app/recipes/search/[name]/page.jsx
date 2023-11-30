import SearchCards from "@/components/recipes/search/SearchCards";

export const metadata = {
  title: "Recifood - Search Result",
};

function SearchResult({ params: { name } }) {
  return (
    <>
      <div>
        <h2 className="text-lg font-medium mt-4 sm:text-2xl sm:mt-8">
          Search results for{" "}
          <span className="font-bold">“{decodeURI(name)}”</span>
        </h2>
      </div>
      <SearchCards name={name} />
    </>
  );
}

export default SearchResult;
