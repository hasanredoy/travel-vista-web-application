import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const host_email = request.nextUrl.searchParams.get("host_email");

  try {
    const db = await connectDB();
    const earningsCollection = db.collection("host_earnings");

    const earningsData = await earningsCollection.aggregate([
      { 
        $match: { host_email } // Filter by host_email
      },
      { 
        $group: { 
          _id: { 
            month: { $month: "$date" }, 
            year: { $year: "$date" } 
          },
          totalEarnings: { $sum: "$earnings" } 
        }
      },
      {
        $project: {
          _id: 0, 
          monthYear: {
            $concat: [
              { $arrayElemAt: [
                [ "", "January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December" 
                ], "$_id.month" 
              ] }, 
              " ", 
              { $toString: "$_id.year" }
            ]
          },
          earnings: "$totalEarnings"
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } } // Sort by year and month
    ]).toArray();

    return NextResponse.json({ data: earningsData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
