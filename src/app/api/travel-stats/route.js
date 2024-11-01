import { NextResponse } from "next/server"

export const GET = async()=>{
  try {
  return NextResponse.json({data})
} catch (error) {
  console.log(error);
    return NextResponse.json({})
    
  }
}

const data = [
  {
    "statistic": "Destinations Covered",
    "value": 120,
    "description": "Explore 120+ destinations worldwide, from bustling cities to serene escapes."
  },
  {
    "statistic": "Total Trips Booked",
    "value": 540,
    "description": "Over 54,000 unforgettable journeys planned and counting."
  },
  {
    "statistic": "5-Star Reviews",
    "value": 350,
    "description": "35,000+ positive reviews from satisfied travelers around the globe."
  },
  {
    "statistic": "Years of Service",
    "value": 5,
    "description": "A decade of crafting memorable travel experiences."
  },
  {
    "statistic": "Countries Visited",
    "value": 50,
    "description": "Travel with us across 50 diverse countries and cultures."
  },
  {
    "statistic": "Customer Satisfaction",
    "value": 98,
    "description": "98% customer satisfaction rating on travel experiences and service."
  }
]
