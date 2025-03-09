import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (request,{params}) => {
  const id = await params.id
  try {
    
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    const data = await bookingsCollection.updateOne({_id:new ObjectId(id)},{$set:{status:"canceled"}})
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(error);
  }
};