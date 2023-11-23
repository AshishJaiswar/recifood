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

async function Recipes() {
  // let course = await getAllMeals();
  // let cuisine = await getAllCuisines();
  // let diet = await getAllDiets();
  // let maxTime = await getMaxTime();

  let course = [
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
  let cuisine = [
    { cuisine: "Kongunadu" },
    { cuisine: "European" },
    { cuisine: "Rajasthani" },
    { cuisine: "Lucknowi" },
    { cuisine: "Awadhi" },
    { cuisine: "Indian" },
    { cuisine: "Kashmiri" },
    { cuisine: "French" },
    { cuisine: "Sindhi" },
    { cuisine: "Karnataka" },
    { cuisine: "Asian" },
    { cuisine: "Thai" },
    { cuisine: "Middle Eastern" },
    { cuisine: "Korean" },
    { cuisine: "British" },
    { cuisine: "Punjabi" },
    { cuisine: "Oriya" },
    { cuisine: "Sichuan" },
    { cuisine: "Coorg" },
    { cuisine: "Goan" },
    { cuisine: "Konkan" },
    { cuisine: "Chinese" },
    { cuisine: "Coastal Karnataka" },
    { cuisine: "Indonesian" },
    { cuisine: "Himachal" },
    { cuisine: "Arab" },
    { cuisine: "Pakistani" },
    { cuisine: "Nepalese" },
    { cuisine: "Mughlai" },
    { cuisine: "North East India" },
    { cuisine: "Hyderabadi" },
    { cuisine: "Greek" },
    { cuisine: "Andhra" },
    { cuisine: "Udupi" },
    { cuisine: "Maharashtrian" },
    { cuisine: "Sri Lankan" },
    { cuisine: "Chettinad" },
    { cuisine: "Side Dish" },
    { cuisine: "American" },
    { cuisine: "kerala" },
    { cuisine: "Japanese" },
    { cuisine: "Parsi" },
    { cuisine: "South Indian" },
    { cuisine: "North Karnataka" },
    { cuisine: "Gujarati" },
    { cuisine: "North Indian" },
    { cuisine: "Shandong" },
    { cuisine: "Malabar" },
    { cuisine: "Mangalorean" },
    { cuisine: "Caribbean" },
    { cuisine: "Haryana" },
    { cuisine: "Italian" },
    { cuisine: "Bihari" },
    { cuisine: "Tamil Nadu" },
    { cuisine: "African" },
    { cuisine: "Gujarati ﻿" },
    { cuisine: "Vietnamese" },
    { cuisine: "Cantonese" },
    { cuisine: "Indo Chinese" },
    { cuisine: "Mexican" },
    { cuisine: "South Karnataka" },
    { cuisine: "Assamese" },
    { cuisine: "Mediterranean" },
    { cuisine: "Fusion" },
    { cuisine: "Uttar Pradesh" },
    { cuisine: "Continental" },
    { cuisine: "Malvani" },
    { cuisine: "Bengali" },
  ];
  let diet = [
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
  let maxTime = [{ max: 960 }];
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
