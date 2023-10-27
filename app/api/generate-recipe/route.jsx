import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET() {
  const { data, error } = await supabase.from("recipes").select().eq("id", 1);
  if (error) console.log(error);

  return NextResponse.json(data);
}
