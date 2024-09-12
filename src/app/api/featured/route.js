import { NextResponse } from "next/server"

export const GET = async()=>{
  try {
  return NextResponse.json({data})
} catch (error) {
  console.log(error);
    return NextResponse.json({})
    
  }
}
const data =[
  {
    "title": "Santorini, Greece",
    "destination": "Santorini",
    "village_or_city": "City",
    "description": "Experience breathtaking sunsets, whitewashed houses, and crystal-clear waters on this iconic island.",
    "package_duration": "5 days",
    "price": "$1,200",
    "max_capacity": "20 people",
    "room_type": "Luxury Villa",
    "image": "https://img.freepik.com/free-photo/vertical-high-angle-shot-white-buildings-santorini-greece_181624-31643.jpg?t=st=1726076614~exp=1726080214~hmac=e6ffb67d7840c0078babac9fa75472ec96bf8796d2e0b17ff1c15ff9b1870650&w=360"
  },
  {
    "title": "Banff National Park, Canada",
    "destination": "Banff National Park",
    "village_or_city": "Village",
    "description": "Explore the stunning Rocky Mountains, turquoise lakes, and wildlife in Canada's first national park.",
    "package_duration": "7 days",
    "price": "$1,500",
    "max_capacity": "15 people",
    "room_type": "Mountain Lodge",
    "image": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "title": "Cape Town, South Africa",
    "destination": "Cape Town",
    "village_or_city": "City",
    "description": "Discover the natural beauty of Table Mountain, coastal views, and vibrant culture.",
    "package_duration": "6 days",
    "price": "$1,100",
    "max_capacity": "30 people",
    "room_type": "Seaside Hotel",
    "image": "https://img.freepik.com/free-photo/aerial-shot-beautiful-las-teresitas-beach-located-san-andres-spain_181624-46610.jpg?t=st=1726077041~exp=1726080641~hmac=817edad924c3006b96aac0e51fca6d767ce96d9b735d8e2faf4525192825b431&w=740"
  },
  {
    "title": "Kyoto, Japan",
    "destination": "Kyoto",
    "village_or_city": "City",
    "description": "Visit ancient temples, peaceful gardens, and experience the rich history of Japan's cultural heart.",
    "package_duration": "4 days",
    "price": "$900",
    "max_capacity": "25 people",
    "room_type": "Traditional Ryokan",
    "image": "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "title": "Machu Picchu, Peru",
    "destination": "Machu Picchu",
    "village_or_city": "Village",
    "description": "Hike to the ancient Incan city and witness one of the Seven Wonders of the World.",
    "package_duration": "5 days",
    "price": "$1,300",
    "max_capacity": "20 people",
    "room_type": "Mountain Lodge",
    "image": "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "title": "Sydney, Australia",
    "destination": "Sydney",
    "village_or_city": "City",
    "description": "Enjoy the vibrant city life, iconic landmarks like the Sydney Opera House, and beautiful beaches.",
    "package_duration": "3 days",
    "price": "$800",
    "max_capacity": "40 people",
    "room_type": "Luxury Hotel",
    "image": "https://images.pexels.com/photos/16872051/pexels-photo-16872051/free-photo-of-aerial-view-of-coastline-of-sydney.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]
