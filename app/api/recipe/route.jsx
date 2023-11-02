import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const { data, error } = await supabase
    .from("recipes")
    .select(
      "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
    )
    .gte("id", start)
    .lte("id", end);
  if (error) console.log(error);

  return NextResponse.json(data);
}
