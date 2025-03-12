import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const email = await request.nextUrl.searchParams.get("email")
  try {
    
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    const data = await bookingsCollection.findOne({email,status:"pending"})
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(error);
  }
};