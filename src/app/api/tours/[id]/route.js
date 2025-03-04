import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const id = params?.id;
    const db = await connectDB();
    const toursCollection = await db.collection("tours");
    const result = await toursCollection.findOne({ _id: new ObjectId(id) });
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(error);
  }
};
