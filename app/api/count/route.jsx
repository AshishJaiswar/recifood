import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET() {
  const { count, error } = await supabase
    .from("recipes")
    .select("*", { count: "exact", head: true });

  if (error) console.log(error);

  return NextResponse.json(count);
}
