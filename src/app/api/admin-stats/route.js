import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email } = await request.json();
  try {
    if (!email) {
      return NextResponse.json({ message: "email not found" }, { status: 404 });
    }
    // connect database
    const db = await connectDB();
    // find user
    const findUser = await db.collection("users").findOne({ email });
    if (findUser?.type !== "admin") {
      return NextResponse.json(
        { message: "User isn't admin" },
        { status: 404 }
      );
    }
    //  tours collection
    const toursCollection = await db.collection("tours");

    //  users collection
    const usersCollection = await db.collection("users");
    //  payments collection
    const paymentsCollection = await db.collection("payments");

    // get total tours
    const totalTours = await toursCollection.estimatedDocumentCount();

    // get total user
    const totalUser = await usersCollection.estimatedDocumentCount();
    // get total bookings
    const totalBookings = await paymentsCollection.estimatedDocumentCount();

    // get total blogs 
    const totalBlogs = await db.collection("blogs").countDocuments()

    // get total amount method agg
    const getAmount = await paymentsCollection.aggregate([
      {
        $group: {
          _id: null,
          earnings: { $sum: "$totalPrice" },
        },
      },
    ]).toArray();
    // get total earnings
    const totalEarnings =
      getAmount?.length > 0 ? getAmount[0].earnings : 0;
    // get monthly earnings
    const monthlyEarnings = await paymentsCollection
      .aggregate([
        {
          $group: {
            _id: { 
              month: { $month: "$paymentDate" }, 
              year: { $year: "$paymentDate" } 
            },
            earningsInGroupingStage: { $sum: "$totalPrice" },
          },
        },
        {
          $project: {
            _id: 0,
            monthYear: {
              $concat: [
                {
                  $arrayElemAt: [
                    [
                      "",
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ],
                    "$_id.month",
                  ],
                },
                "",
                { $toString: "$_id.year" },
              ],
            },
            earnings: "$earningsInGroupingStage",
          },
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } }
      ])
      .toArray();

    // get current user
    const currentUsers = totalUser;
    // get last month
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    //  get previous users
    const previousUsers = await usersCollection.countDocuments({
      registerDate: { $lt: lastMonth },
    });

    const growthPercentage =
      previousUsers > 0
        ? ((currentUsers - previousUsers) / previousUsers) * 100
        : 100;

    // admin stats
    const stats = {
      totalUser,
      totalBookings,
      totalEarnings,
      totalTours,
      totalBlogs,
      monthlyGrowth: growthPercentage,
      data: monthlyEarnings,
    };
    return NextResponse.json({ stats }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
};
