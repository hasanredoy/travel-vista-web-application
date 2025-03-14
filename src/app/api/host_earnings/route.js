import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const host_email = request.nextUrl.searchParams.get("host_email");

  try {
    const db = await connectDB();
    const earningsCollection = await db.collection("host_earnings");

    // Fetch all earnings for the given host email
    const earningsData = await earningsCollection.find({ host_email }).toArray();

      // Helper function to format date into "Month Year" (e.g., "March 2025")
      const getMonthYear = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleString("en-US", { month: "long", year: "numeric" }); // e.g., "March 2025"
      };
  
      // Group earnings by month-year
      const earningsByMonthYear = earningsData.reduce((acc, entry) => {
        const monthYear = getMonthYear(entry.date);
  
        if (acc[monthYear]) {
          acc[monthYear] += entry.earnings;
        } else {
          acc[monthYear] = entry.earnings;
        }
  
        return acc;
      }, {});
  
      // Convert object into array format
      const formattedEarnings = Object.keys(earningsByMonthYear).map((monthYear) => ({
        monthYear,
        earnings: earningsByMonthYear[monthYear],
      }));
    return NextResponse.json({ data: formattedEarnings });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
