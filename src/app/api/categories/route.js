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
    "category_name": "Adventure",
    "description": "Explore thrilling destinations with activities like hiking, rafting, and mountain climbing for the ultimate adrenaline rush.",
    "image": "adventure.jpg"
  },
  {
    "category_name": "Beach Holidays",
    "description": "Relax on stunning beaches with crystal-clear waters, perfect sunsets, and luxurious resorts for a tropical getaway.",
    "image": "beach.jpg"
  },
  {
    "category_name": "Cultural Tours",
    "description": "Immerse yourself in diverse cultures, history, and traditions by visiting ancient landmarks and vibrant local communities.",
    "image": "cultural.jpg"
  },
  {
    "category_name": "Wildlife Safaris",
    "description": "Embark on thrilling safaris to witness wildlife in their natural habitats, from African savannas to Amazon rainforests.",
    "image": "wildlife.jpg"
  },
  {
    "category_name": "Cruises",
    "description": "Set sail on luxurious cruises to explore multiple destinations, enjoy onboard entertainment, and experience the open sea.",
    "image": "cruises.jpg"
  }
]

