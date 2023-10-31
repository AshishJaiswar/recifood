import Hero from "@/components/Hero";

async function getAllMeals() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/course`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getAllDiets() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/diet`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
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
