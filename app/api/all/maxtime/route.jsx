import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET() {
  const { data, error } = await supabase.from("maxtime").select();

  if (error) console.log("Failed to fetch data => API [/all/maxtime]", error);

  return NextResponse.json(data);
}
