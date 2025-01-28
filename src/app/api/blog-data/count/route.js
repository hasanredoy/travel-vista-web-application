import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
 
  try {
    const db = await connectDB();
    const blogsCollection  = await db.collection("blogs");
    
    const count = await blogsCollection .estimatedDocumentCount()
    return NextResponse.json({ count });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
