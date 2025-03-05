import { ObjectId } from "mongodb";

const { connectDB } = require("@/lib/connectDB");
const { NextResponse } = require("next/server");

export const GET = async (request) => {
  const page = parseInt(await request.nextUrl.searchParams.get("page"));
  const size = parseInt(await request.nextUrl.searchParams.get("size"));
  const filter = await request.nextUrl.searchParams.get("filter");
  let query;
  try {
    if (filter) {
      query = { status: filter };
    }
    const db = await connectDB();
    const hosts = await db
      .collection("hosts")
      .find(query)
      .limit(size)
      .skip(size * page)
      .toArray();
    return NextResponse.json({ data: hosts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
export const POST = async (request) => {
  const hostInfo = await request.json();
  const email = await request.nextUrl.searchParams.get("email");
  try {
    const db = await connectDB();
    const hostsCollection = await db.collection("hosts");
    const findHost = await hostsCollection.findOne({ email: email });
    const status = await findHost?.status;
    if (status == "Rejected") {
      const updateStatus = await hostsCollection.updateOne(
        { email: email },
        { $set: { status: "Pending" } }
      );
      return NextResponse.json({ updateStatus });
    }
    const result = await hostsCollection.insertOne(hostInfo);
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};

export const PATCH = async (request) => {
  const userEmail = await request.nextUrl.searchParams.get("email");
  try {
    const db = await connectDB();
    const usersCollection = await db.collection("users");
    const hostsCollection = await db.collection("hosts");
    const res1 = await usersCollection.updateOne(
      { email: userEmail },
      { $set: { type: "host" } }
    );

    const res2 = await hostsCollection.updateOne(
      { email: userEmail },
      { $set: { status: "Approved" } }
    );

    return NextResponse.json({ res1, res2 });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const PUT = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  try {
    const db = await connectDB();
    const hostsCollection = await db.collection("hosts");
    const data = await hostsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: "Rejected", _id: " " } }
    );
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const DELETE = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  try {
    const db = await connectDB();
    const reviewsCollection = await db.collection("reviews");
    const deleteReview = await reviewsCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return NextResponse.json({ data: deleteReview });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
