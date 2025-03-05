import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const email = await request.nextUrl.searchParams.get("email")
  try {
    const db = await connectDB();
    const hostsCollection = await db.collection("hosts");
      const findHost= await hostsCollection.findOne({email:email})
      const status = await findHost?.status
      return NextResponse.json({status})
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};