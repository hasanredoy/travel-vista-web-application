import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
var bcrypt = require("bcryptjs");

export const POST = async (request) => {
  const userData = await request.json();

  try {
    // connect data base
    const db = await connectDB();
    // get user collection
    const userCollection = await db.collection("users");
    // check user by email
    const checkUser = await userCollection.findOne({ email: userData?.email });
    // make password salty before saving in mongo db
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(userData?.password, salt);
    // user data after hased user user password
    const user = {
      name: userData?.name,
      email: userData?.email,
      phone: userData?.phone,
      registerDate: userData?.date,
      type: userData?.type,
      image: userData?.photo,
      password: hashedPassword,
      bio: userData?.bio,
    };
    console.log({ user });
    if (checkUser) {
      return NextResponse.json({ message: "user exist" });
    }
    const result = await userCollection.insertOne(user);
    console.log({ result });
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export const PUT = async (request) => {
  try {
    const userInfo = await request.json();

    const db = await connectDB();
    const userCollection = db.collection("users");
    // find user
    const findUser = await userCollection.findOne({ email: userInfo?.email });

    // updateDoc for update user
    const updateDoc = {
      $set: { bio: userInfo?.bio, about: userInfo?.about },
    };
    if (!findUser) {
      return NextResponse.json({ message: "something went wrong" });
    }

    const updateUser = await userCollection.updateOne(
      { email: findUser?.email },
      updateDoc
    );

    return NextResponse.json({ data: updateUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
