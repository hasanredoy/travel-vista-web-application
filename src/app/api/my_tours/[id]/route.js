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

export const PUT = async (request, { params }) => {
  const updateDoc = await request.json();
  try {
    const id = params?.id;
    const db = await connectDB();
    const toursCollection = await db.collection("tours");

    const updateTour = await toursCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { ...updateDoc },
      },
      { upsert: true }
    );
  return NextResponse.json({ data: updateTour });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
