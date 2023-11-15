import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function POST(request) {
  const searchParams = request.nextUrl.searchParams;
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const body = await request.json();

  let filterItems = [];
  for (let key in body) {
    if (body[key].length || body[key] >= 1) {
      filterItems.push(key);
    }
  }

  const count = filterItems.length;

  if (count === 1) {
    // First Case
    const key = filterItems[0];

    let operator, values;
    if (
      key === "totalTimeInMins" ||
      key === "servings" ||
      key === "totalCaloriesInCal"
    ) {
      operator = "lte";
      values = body[key];
    } else {
      operator = "in";
      values = `(${JSON.stringify(body[key].map((item) => item.label)).replace(
        /[\[\]']+/g,
        ""
      )})`;
    }
    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .filter(key, operator, values)
      .range(start, end);

    if (error) console.log(error);
    return NextResponse.json(data);
  } else if (count === 2) {
    // Second Case
    const [key1, key2] = filterItems;

    let operators = [];
    let values = [];
    for (let key of filterItems) {
      if (
        key === "totalTimeInMins" ||
        key === "servings" ||
        key === "totalCaloriesInCal"
      ) {
        operators.push("lte");
        values.push(body[key]);
      } else {
        operators.push("in");
        const value = `(${JSON.stringify(
          body[key].map((item) => item.label)
        ).replace(/[\[\]']+/g, "")})`;
        values.push(value);
      }
    }

    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .filter(key1, operators[0], values[0])
      .filter(key2, operators[1], values[1])
      .range(start, end);

    if (error) console.log(error);
    return NextResponse.json(data);
  } else if (count === 3) {
    // Third Case
    const [key1, key2, key3] = filterItems;

    let operators = [];
    let values = [];
    for (let key of filterItems) {
      if (
        key === "totalTimeInMins" ||
        key === "servings" ||
        key === "totalCaloriesInCal"
      ) {
        operators.push("lte");
        values.push(body[key]);
      } else {
        operators.push("in");
        const value = `(${JSON.stringify(
          body[key].map((item) => item.label)
        ).replace(/[\[\]']+/g, "")})`;
        values.push(value);
      }
    }

    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .filter(key1, operators[0], values[0])
      .filter(key2, operators[1], values[1])
      .filter(key3, operators[2], values[2])
      .range(start, end);

    if (error) console.log(error);
    return NextResponse.json(data);
  } else if (count === 4) {
    // Fourth Case
    const [key1, key2, key3, key4] = filterItems;

    let operators = [];
    let values = [];
    for (let key of filterItems) {
      if (
        key === "totalTimeInMins" ||
        key === "servings" ||
        key === "totalCaloriesInCal"
      ) {
        operators.push("lte");
        values.push(body[key]);
      } else {
        operators.push("in");
        const value = `(${JSON.stringify(
          body[key].map((item) => item.label)
        ).replace(/[\[\]']+/g, "")})`;
        values.push(value);
      }
    }

    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .filter(key1, operators[0], values[0])
      .filter(key2, operators[1], values[1])
      .filter(key3, operators[2], values[2])
      .filter(key4, operators[3], values[3])
      .range(start, end);

    if (error) console.log(error);
    return NextResponse.json(data);
  } else if (count === 5) {
    // Fifth Case
    const [key1, key2, key3, key4, key5] = filterItems;

    let operators = [];
    let values = [];
    for (let key of filterItems) {
      if (
        key === "totalTimeInMins" ||
        key === "servings" ||
        key === "totalCaloriesInCal"
      ) {
        operators.push("lte");
        values.push(body[key]);
      } else {
        operators.push("in");
        const value = `(${JSON.stringify(
          body[key].map((item) => item.label)
        ).replace(/[\[\]']+/g, "")})`;
        values.push(value);
      }
    }

    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .filter(key1, operators[0], values[0])
      .filter(key2, operators[1], values[1])
      .filter(key3, operators[2], values[2])
      .filter(key4, operators[3], values[3])
      .filter(key5, operators[4], values[4])
      .range(start, end);

    if (error) console.log(error);
    return NextResponse.json(data);
  } else if (count === 6) {
    // Third Case
    const [key1, key2, key3, key4, key5, key6] = filterItems;

    let operators = [];
    let values = [];
    for (let key of filterItems) {
      if (
        key === "totalTimeInMins" ||
        key === "servings" ||
        key === "totalCaloriesInCal"
      ) {
        operators.push("lte");
        values.push(body[key]);
      } else {
        operators.push("in");
        const value = `(${JSON.stringify(
          body[key].map((item) => item.label)
        ).replace(/[\[\]']+/g, "")})`;
        values.push(value);
      }
    }

    const { data, error } = await supabase
      .from("recipes")
      .select(
        "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
      )
      .filter(key1, operators[0], values[0])
      .filter(key2, operators[1], values[1])
      .filter(key3, operators[2], values[2])
      .filter(key4, operators[3], values[3])
      .filter(key5, operators[4], values[4])
      .filter(key6, operators[5], values[5])
      .range(start, end);

    if (error) console.log(error);
    return NextResponse.json(data);
  }
}
