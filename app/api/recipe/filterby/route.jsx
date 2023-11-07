import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function POST(request) {
  const searchParams = request.nextUrl.searchParams;
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const body = await request.json();

  let query;
  if (body.course.length) {
    const courses = JSON.stringify(body.course.map((item) => item.label));
    query = `course.in.(${courses.replace(/[\[\]']/g, "")})`;
  } else if (body.cuisine.length) {
    const cuisines = JSON.stringify(body.cuisine.map((item) => item.label));
    query = `cuisine.in.(${cuisines.replace(/[\[\]']/g, "")})`;
  } else if (body.diet.length) {
    const diets = JSON.stringify(body.diet.map((item) => item.label));
    query = `diet.in.(${diets.replace(/[\[\]']/g, "")})`;
  }

  const { data, error } = await supabase
    .from("recipes")
    .select(
      "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
    )
    .or(query)
    .range(start, end);

  if (error) console.log(error);

  return NextResponse.json(data);
}
