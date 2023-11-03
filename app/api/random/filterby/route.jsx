import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const meal = searchParams.get("meal");
  const diet = searchParams.get("diet");

  let recipes;
  let errorMsg;

  if (meal !== null && diet === null) {
    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .eq("course", meal);

    recipes = data;
    errorMsg = error;
  } else if (meal === null && diet !== null) {
    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .eq("diet", diet);

    recipes = data;
    errorMsg = error;
  } else if (meal !== null && diet !== null) {
    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .eq("course", meal)
      .eq("diet", diet);

    recipes = data;
    errorMsg = error;
  }
  if (errorMsg)
    console.log(
      "Failed to fetch filtered random recipe => API [/random/filterby?queryParams]",
      errorMsg
    );

  return NextResponse.json(recipes);
}
