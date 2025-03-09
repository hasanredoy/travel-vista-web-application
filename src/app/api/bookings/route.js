import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const email = await request.nextUrl.searchParams.get("email")
  try {
    const db = await connectDB();
    const bookingCollection = await db.collection("bookings");
    const findUserBooking = await bookingCollection.find({
     email
    }).toArray()
    if (findUserBooking) {
      return NextResponse.json({ data:findUserBooking});
    }
    return NextResponse.json({message: "User haven't booked any tour." });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
export const POST = async (request) => {
  const bookingInfo = await request.json();
  try {
    const db = await connectDB();
    const bookingCollection = await db.collection("bookings");
    const findUserBooking = await bookingCollection.findOne({
      title: bookingInfo?.title,email:bookingInfo?.email
    });
    console.log(findUserBooking,'server')
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
