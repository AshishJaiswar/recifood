import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-medium mt-10 mb-5 px-5 sm:px-16 md:mb-8 md:text-5xl md:mt-14 lg:mt-20 lg:text-7xl xl:px-52">
        Generate a random recipe
      </h1>
      <Button className="md:text-lg md:px-8 md:py-6 hover:bg-violet-600 active:bg-violet-600">
        Generate
      </Button>
      <div className="mt-4 text-sm sm:text-base sm:mt-6">
        Press space to generate a random recipe
      </div>
    </div>
  );
}

export default Hero;
