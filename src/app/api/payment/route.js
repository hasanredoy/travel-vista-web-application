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

    const year = new Date().getFullYear();
    const month = new Date().getMonth(); // JavaScript months are 0-based

    
    const existingEntry = await hostEarningsCollection.findOne({
      host_email,
      date: {
        $gte: new Date(year, month, 1), // Start of the month
        $lt: new Date(year, month + 2, 1), // Start of next month
      },
    });
    
    if (existingEntry) {
      // If record exists, update the earnings by adding the new amount
      const updatedRes = await hostEarningsCollection.updateOne(
        { _id: existingEntry._id }, // Find by existing document ID
        { $inc: { earnings: paymentData?.totalPrice || 0 } } // Increase earnings
      );
      console.log(updatedRes, "Earnings Updated");
    } else {
      // If no record exists, insert a new document
      const insertDoc = {
        date: new Date(),
        earnings: paymentData?.totalPrice || 0,
        host_email,
      };
      const res = await hostEarningsCollection.insertOne(insertDoc);
      console.log(res, "New Entry Created");
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
