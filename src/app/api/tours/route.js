import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const search = await request.nextUrl.searchParams.get("search");
  const category = await request.nextUrl.searchParams.get("category");
  const page = parseInt( await request.nextUrl.searchParams.get("page"))
  const size = parseInt(await request.nextUrl.searchParams.get("size"))
  const sortValFormClient = await request.nextUrl.searchParams.get("sort");
  console.log({size,page});

  try {
    const db = await connectDB();
    const toursCollection = await db.collection("tours");
    let searchQuery = {};
    let sort = {};
    if (sortValFormClient == "low") {
      sort = { price: 1 };
    }
    if (sortValFormClient == "high") {
      sort = { price: -1 };
    }

    if (search) {
      searchQuery.$or = [
        { title: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i" } },
      ];
    }
    if (category) {
      searchQuery = { category: { $regex: category, $options: "i" } };
    }
    const tours = await toursCollection.find(searchQuery).sort(sort).limit(size).skip(size*page).toArray();
    return NextResponse.json({ data: tours });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
