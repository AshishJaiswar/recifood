import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET(request, { params: { slug } }) {
  const { data, error } = await supabase.from(`distinct_${slug}`).select();

  if (error) console.log(error);

  return NextResponse.json(data);
}
