import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
 
  try {
    const db = await connectDB();
    const hostsCollection = await db.collection("hosts")
    const count = await hostsCollection.estimatedDocumentCount()
    return NextResponse.json({ count });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
