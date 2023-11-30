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
async function getMaxTime() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/maxtime`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch diet data => getAllDiets");
  }

  return res.json();
}

const transfromData = (data) => {
  return data.map((obj) => {
    const key = Object.keys(obj);
    const item = obj[key[0]];
    return { id: item.toLowerCase().replace(" ", "_"), label: item };
  });
};

export const metadata = {
  title: "Recifood - Explore all recipes",
};

async function Recipes() {
  let course = await getAllMeals();
  let cuisine = await getAllCuisines();
  let diet = await getAllDiets();
  let maxTime = await getMaxTime();
  course = transfromData(course);
  cuisine = transfromData(cuisine);
  diet = transfromData(diet);
  maxTime = maxTime[0].max;

  const filters = { course, cuisine, diet, maxTime };

  return (
    <>
      <Recipecards filters={filters} />
    </>
  );
}

export default Recipes;
