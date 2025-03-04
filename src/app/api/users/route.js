import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const page = parseInt( await request.nextUrl.searchParams.get("page"))
  const size = parseInt(await request.nextUrl.searchParams.get("size"))
  const filter = await request.nextUrl.searchParams.get("filter")
  let query
  try {
    if(filter){
      query = {type:filter}
    }
    const db = await connectDB();
    const usersCollection = await db.collection("users");
    const data = await usersCollection.find(query).limit(size).skip(page*size).toArray();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(error);
  }
};