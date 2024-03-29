import Hero from "@/components/home/Hero";

async function getAllMeals() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/course`);

  if (!res.ok) {
    throw new Error("Failed to meals data => getAllMeals");
  }

  return res.json();
}

async function getAllDiets() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/diet`);

  if (!res.ok) {
    throw new Error("Failed to fetch diet data => getAllDiets");
  }

  return res.json();
}

export default async function Index() {
  const meal = await getAllMeals();
  const diet = await getAllDiets();

  const filters = { meal, diet };

  return (
    <>
      <Hero filters={filters} />
    </>
  );
}
