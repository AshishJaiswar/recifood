import Hero from "@/components/home/Hero";

async function getAllMeals() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/all/course`, {
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

export default async function Index() {
  // const meal = await getAllMeals();
  const meal = [
    { course: "World Breakfast" },
    { course: "Dinner" },
    { course: "Snack" },
    { course: "Side Dish" },
    { course: "Main Course" },
    { course: "Appetizer" },
    { course: "Lunch" },
    { course: "Dessert" },
    { course: "South Indian Breakfast" },
    { course: "Indian Breakfast" },
  ];
  // const diet = await getAllDiets();
  const diet = [
    { diet: "High Protein Non Vegetarian" },
    { diet: "Gluten Free" },
    { diet: "Sugar Free Diet" },
    { diet: "Eggetarian" },
    { diet: "Non Vegetarian" },
    { diet: "No Onion No Garlic (Sattvic)" },
    { diet: "High Protein Vegetarian" },
    { diet: "Vegetarian" },
    { diet: "Diabetic Friendly" },
    { diet: "Vegan" },
  ];
  const filters = { meal, diet };

  return (
    <>
      <Hero filters={filters} />
    </>
  );
}
