import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const bookingInfo = await request.json();
  try {
    const db = await connectDB();
    const bookingCollection = await db.collection("bookings");
    const findUserBooking = await bookingCollection.findOne({
      title: bookingInfo?.title,
    });
    if (findUserBooking) {
      return NextResponse.json({
        message: "This tour is already exist in booking",
      });
    }
    const data = await bookingCollection.insertOne(bookingInfo);
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
