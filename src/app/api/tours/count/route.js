import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
 
  try {
    const db = await connectDB();
    const toursCollection = await db.collection("tours");
    
    const count = await toursCollection.estimatedDocumentCount()
    return NextResponse.json({ count });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
