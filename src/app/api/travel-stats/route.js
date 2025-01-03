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
    "description": "Explore 120+ destinations worldwide."
  },
 
  {
    "statistic": "5-Star Reviews",
    "value": 350,
    "description": "350+ positive reviews from satisfied travelers."
  },
  {
    "statistic": "Years of Service",
    "value": 5,
    "description": "Half decade of crafting memorable travel experiences."
  },
  {
    "statistic": "Countries Visited",
    "value": 50,
    "description": "Travel with us across 50 diverse countries and cultures."
  }

]
