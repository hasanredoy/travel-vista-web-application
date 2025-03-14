import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const usersCollection = await db.collection("users");
    const findUsers = await usersCollection.find().toArray();
    const status = await findUsers?.map((user) => user?.type);
    console.log(status, "server");
    return NextResponse.json({ data: status });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
