import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const email = request.nextUrl.searchParams.get("email");

  try {
    const db = await connectDB();
    const paymentCollections = db.collection("payments");

    // Fetch all payments for the given email
    const result = await paymentCollections.find({ email }).toArray();

    return NextResponse.json({ data: result});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

export const POST = async (request) => {
  const paymentData = await request.json();
  const email = await paymentData?.email;
  const host_email = await paymentData?.host_email;
  try {
    const db = await connectDB();
    const paymentCollections = await db.collection("payments");
    const hostEarningsCollection = await db.collection("host_earnings")
    const result = await paymentCollections.insertOne(paymentData);

    const data = await db
      .collection("bookings")
      .updateOne(
        { email, status: "pending" },
        { $set: { status: "confirmed" } }
      );
    
    const user = await db.collection("users").findOne({ email });

    if (user&&data?.modifiedCount>0) {
      await db
        .collection("users")
        .updateOne({ email }, { $inc: { destinationCovered: 1 || 0 } });
    } else {
      await db
        .collection("users")
        .updateOne(
          { email },
          { $set: { destinationCovered: 1 || 0 } },
          { upsert: true }
        );
    }

    
    if (host_email)  {
      // If no record exists, insert a new document
      const insertDoc = {
        date: new Date(),
        earnings: paymentData?.totalPrice || 0,
        host_email,
      };
      const res = await hostEarningsCollection.insertOne(insertDoc);
    }
    
    

    return NextResponse.json({ result, data});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const PATCH = async (request) => {
  const email = await request.nextUrl.searchParams.get("email");
  try {
    const db = await connectDB();
    const paymentsCollection = await db.collection("payments");
    const data = await paymentsCollection.updateMany({email},{$set:{email:null}});
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};