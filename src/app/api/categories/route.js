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
    "category": "Adventure",
    "description": "Explore thrilling destinations with activities like hiking, rafting, and mountain climbing for the ultimate adrenaline rush.",
    "image": "https://i.postimg.cc/dtL2grXr/map.png"
  },
  {
    "category": "Beach Holidays",
    "description": "Relax on stunning beaches with crystal-clear waters, perfect sunsets, and luxurious resorts for a tropical getaway.",
    "image": "https://i.postimg.cc/pLLgwGvk/summer-holidays.png"
  },
  {
    "category": "Mountain Escapes",
    "description": "Discover breathtaking mountain ranges, enjoy serene landscapes, and embark on challenging treks amidst nature's beauty.",
    "image": "https://i.postimg.cc/63XzXqRw/mountain.png"
  },
  {
    "category": "Wildlife Safaris",
    "description": "Embark on thrilling safaris to witness wildlife in their natural habitats, from African savannas to Amazon rainforests.",
    "image": "https://i.postimg.cc/J0g1sfRr/tree.png"
  },
  {
    "category": "Cruises",
    "description": "Set sail on luxurious cruises to explore multiple destinations, enjoy onboard entertainment, and experience the open sea.",
    "image": "https://i.postimg.cc/Y24NsQTg/boat.png"
  }
]

