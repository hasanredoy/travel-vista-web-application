import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
 
  try {
    const db = await connectDB();
    const usersCollection = await db.collection("users");
    
    const count = await usersCollection.estimatedDocumentCount()
    return NextResponse.json({ count });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
