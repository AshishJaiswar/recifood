import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET() {
  const { data, error } = await supabase.from("random_recipe").select();

  if (error) console.log(error);

  return NextResponse.json(data);
}
