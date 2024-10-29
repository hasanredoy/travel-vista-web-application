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
    "value": 54000,
    "description": "Over 54,000 unforgettable journeys planned and counting."
  },
  {
    "statistic": "Returning Customers",
    "value": 85,
    "description": "85% of our travelers choose to explore with us again."
  },
  {
    "statistic": "5-Star Reviews",
    "value": 35000,
    "description": "35,000+ positive reviews from satisfied travelers around the globe."
  },
  {
    "statistic": "Years of Service",
    "value": 10,
    "description": "A decade of crafting memorable travel experiences."
  },
  {
    "statistic": "Top-Rated Guides",
    "value": 200,
    "description": "200 expert guides dedicated to making each trip exceptional."
  },
  {
    "statistic": "Unique Experiences",
    "value": 400,
    "description": "400+ handpicked activities and excursions for all kinds of travelers."
  },
  {
    "statistic": "Countries Visited",
    "value": 50,
    "description": "Travel with us across 50 diverse countries and cultures."
  },
  {
    "statistic": "Custom Trips",
    "value": 2500,
    "description": "Over 2,500 personalized trips crafted to meet individual preferences."
  },
  {
    "statistic": "Customer Satisfaction",
    "value": 98,
    "description": "98% customer satisfaction rating on travel experiences and service."
  }
]
