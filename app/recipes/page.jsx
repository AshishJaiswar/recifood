import Recipecards from "@/components/recipes/RecipeCards";

async function getAllMeals() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/course`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to meals data => getAllMeals");
  }

  return res.json();
}
async function getAllCuisines() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/cuisine`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to meals data => getAllMeals");
  }

  return res.json();
}

async function getAllDiets() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/diet`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch diet data => getAllDiets");
  }

  return res.json();
}
async function getAllTime() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/totaltime`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch diet data => getAllDiets");
  }

  return res.json();
}

async function Recipes() {
  let meals = await getAllMeals();
  let cuisines = await getAllCuisines();
  let diets = await getAllDiets();
  let times = await getAllTime();

  meals = meals.map(({ course }) => {
    return { id: course.toLowerCase().replace(" ", "_"), label: course };
  });
  cuisines = cuisines.map(({ cuisine }) => {
    return { id: cuisine.toLowerCase().replace(" ", "_"), label: cuisine };
  });
  diets = diets.map(({ diet }) => {
    return { id: diet.toLowerCase().replace(" ", "_"), label: diet };
  });

  times = times.map(({ totalTimeInMins }) => {
    return totalTimeInMins;
  });

  const maxTime = Math.max(...times);

  const filters = { meals, cuisines, diets, maxTime };
  return (
    <>
      <Recipecards filters={filters} />
    </>
  );
}

export default Recipes;
