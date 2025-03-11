import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const email = await request.nextUrl.searchParams.get("email");
  try {
    const db = await connectDB();
    const paymentCollections = await db.collection("payments");
    const result = await paymentCollections.find({ email }).toArray();
    const itemsIds = await result?.map((payment) => payment?.itemsIds);
    const toursCollection = await db.collection("tours");
    // Convert string IDs to ObjectId
    const paymentsIds = itemsIds.map((id) => new ObjectId(id));
   console.log(paymentsIds,"server" )
    // Query the database with the converted ObjectIds
    const findMatchingTour = await toursCollection
      .find({ _id: { $in: paymentsIds } })
      .toArray();

    console.log(findMatchingTour, "1");
    const matchingTourTitle = await findMatchingTour?.map(
      (tour) => tour?.title
    );
    console.log(matchingTourTitle, "2");

    return NextResponse.json({ data: result, matchingTourTitle });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
export const POST = async (request) => {
  const paymentData = await request.json();
  const email = await paymentData?.email;
  try {
    const db = await connectDB();
    const paymentCollections = await db.collection("payments");
    const result = await paymentCollections.insertOne(paymentData);

    const data = await db
      .collection("bookings")
      .updateMany(
        { email, status: "pending" },
        { $set: { status: "confirmed" } }
      );
    const length = await paymentData?.itemsIds?.length;
    const user = await db.collection("users").findOne({ email });

    if (user) {
      await db
        .collection("users")
        .updateOne({ email }, { $inc: { destinationCovered: length || 0 } });
    } else {
      await db
        .collection("users")
        .updateOne(
          { email },
          { $set: { destinationCovered: length || 0 } },
          { upsert: true }
        );
    }
    console.log(updateUser, "hello");

    return NextResponse.json({ result, data, updateUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
