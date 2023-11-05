import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function POST(request, { params: { slug } }) {
  const searchParams = request.nextUrl.searchParams;
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const body = await request.json();
  const values = Object.values(body);
  const { data, error } = await supabase
    .from("recipes")
    .select(
      "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
    )
    .in(slug, values)
    .range(start, end);

  if (error) console.log(error);

  return NextResponse.json(data);
}
