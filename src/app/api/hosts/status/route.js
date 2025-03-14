import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const hostsCollection = await db.collection("hosts");
      const findHost= await hostsCollection.find().toArray()
      const status = await findHost?.map(host=>host?.status)
      return NextResponse.json({data:status})
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
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