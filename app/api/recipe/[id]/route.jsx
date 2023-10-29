import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET(request, { params: { id } }) {
  const { data, error } = await supabase.from("recipes").select().eq("id", id);

  if (error) console.log(error);

  return NextResponse.json(data);
}
