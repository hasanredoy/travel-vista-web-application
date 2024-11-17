import { NextResponse } from "next/server"

export const GET= async ()=>{
try {
  return  NextResponse.json({data})
} catch (error) {
  return NextResponse.error({error})
}
}

const data = [
  {
    "data_id": "001",
    "title": "Santorini, Greece",
    "destination": "Santorini",
    "village_or_city": "City",
    "description": "Experience breathtaking sunsets, whitewashed houses, and crystal-clear waters on this iconic island.",
    "package_duration": "5 days",
    "price": "$1,200",
    "rating": "4.4",
    "max_capacity": "20 people",
    "room_type": "Luxury Villa",
    "country": "Greece",
    "user_review_count": 0,
    "image": "https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "data_id": "002",
    "title": "Kyoto, Japan",
    "destination": "Kyoto",
    "village_or_city": "City",
    "description": "Discover the beauty of traditional temples, vibrant gardens, and the rich culture of Japan's ancient capital.",
    "package_duration": "7 days",
    "price": "$1,800",
    "rating": "4.7",
    "max_capacity": "15 people",
    "room_type": "Traditional Ryokan",
    "country": "Japan",
    "user_review_count": 0,
    "image": "kyoto_image.jpg"
  },
  {
    "data_id": "003",
    "title": "Cape Town, South Africa",
    "destination": "Cape Town",
    "village_or_city": "City",
    "description": "Explore stunning beaches, vibrant culture, and Table Mountain in this coastal gem.",
    "package_duration": "7 days",
    "price": "$1,400",
    "rating": "4.6",
    "max_capacity": "20 people",
    "room_type": "Seaside Resort",
    "country": "South Africa",
    "user_review_count": 0,
    "image": "cape_town_image.jpg"
  },
  {
    "data_id": "004",
    "title": "Banff National Park, Canada",
    "destination": "Banff",
    "village_or_city": "Town",
    "description": "Enjoy pristine mountain scenery, crystal-clear lakes, and outdoor adventures in this charming town.",
    "package_duration": "5 days",
    "price": "$1,700",
    "rating": "4.8",
    "max_capacity": "15 people",
    "room_type": "Mountain Cabin",
    "country": "Canada",
    "user_review_count": 0,
       "image": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "data_id": "005",
    "title": "Dubai, UAE",
    "destination": "Dubai",
    "village_or_city": "City",
    "description": "Experience luxury, modern architecture, and the Arabian Desert in this dynamic city.",
    "package_duration": "4 days",
    "price": "$2,000",
    "rating": "4.6",
    "max_capacity": "40 people",
    "room_type": "Luxury Hotel",
    "country": "UAE",
    "user_review_count": 0,
    "image": "dubai_image.jpg"
  },
  {
    "data_id": "006",
    "title": "Moscow, Russia",
    "destination": "Moscow",
    "village_or_city": "City",
    "description": "Discover the history, grandeur, and cultural richness of Russia's iconic capital city.",
    "package_duration": "6 days",
    "price": "$1,500",
    "rating": "4.5",
    "max_capacity": "30 people",
    "room_type": "Luxury Hotel",
    "country": "Russia",
    "user_review_count": 0,
    "image": "moscow_image.jpg"
  },
  {
    "data_id": "007",
    "title": "Sydney, Australia",
    "destination": "Sydney",
    "village_or_city": "City",
    "description": "Explore the iconic Sydney Opera House, beautiful beaches, and vibrant city life.",
    "package_duration": "5 days",
    "price": "$2,200",
    "rating": "4.7",
    "max_capacity": "25 people",
    "room_type": "Seaside Apartment",
    "country": "Australia",
    "user_review_count": 0,
    "image": "sydney_image.jpg"
  },
  {
    "data_id": "008",
    "title": "Machu Picchu, Peru",
    "destination": "Machu Picchu",
    "village_or_city": "Village",
    "description": "Experience the wonder of the ancient Inca citadel surrounded by breathtaking mountain scenery.",
    "package_duration": "4 days",
    "price": "$1,800",
    "rating": "4.9",
    "max_capacity": "10 people",
    "room_type": "Rustic Lodge",
    "country": "Peru",
    "user_review_count": 0,
    "image": "machu_picchu_image.jpg"
  },
  {
    "data_id": "009",
    "title": "Athens, Greece",
    "destination": "Athens",
    "village_or_city": "City",
    "description": "Dive into history and explore ancient ruins while enjoying modern Greek culture.",
    "package_duration": "5 days",
    "price": "$1,300",
    "rating": "4.5",
    "max_capacity": "30 people",
    "room_type": "Luxury Apartment",
    "country": "Greece",
    "user_review_count": 0,
    "image": "athens_image.jpg"
  },
  {
    "data_id": "010",
    "title": "Tokyo, Japan",
    "destination": "Tokyo",
    "village_or_city": "City",
    "description": "Experience the vibrant life of Tokyo with its neon-lit streets and tranquil gardens.",
    "package_duration": "6 days",
    "price": "$2,100",
    "rating": "4.8",
    "max_capacity": "20 people",
    "room_type": "Luxury Hotel",
    "country": "Japan",
    "user_review_count": 0,
    "image": "tokyo_image.jpg"
  },
  {
    "data_id": "011",
    "title": "Queenstown, New Zealand",
    "destination": "Queenstown",
    "village_or_city": "Town",
    "description": "Adventure awaits in this stunning town surrounded by towering mountains and clear lakes.",
    "package_duration": "5 days",
    "price": "$1,900",
    "rating": "4.6",
    "max_capacity": "15 people",
    "room_type": "Boutique Lodge",
    "country": "New Zealand",
    "user_review_count": 0,
    "image": "queenstown_image.jpg"
  },
  {
    "data_id": "012",
    "title": "Rome, Italy",
    "destination": "Rome",
    "village_or_city": "City",
    "description": "Explore the ancient ruins of Rome, vibrant streets, and world-famous cuisine.",
    "package_duration": "5 days",
    "price": "$1,400",
    "rating": "4.7",
    "max_capacity": "30 people",
    "room_type": "Luxury Apartment",
    "country": "Italy",
    "user_review_count": 0,
    "image": "rome_image.jpg"
  },
  {
    "data_id": "013",
    "title": "Paris, France",
    "destination": "Paris",
    "village_or_city": "City",
    "description": "Fall in love with the City of Lights, famous for its art, fashion, and culinary delights.",
    "package_duration": "5 days",
    "price": "$2,500",
    "rating": "4.9",
    "max_capacity": "20 people",
    "room_type": "Luxury Hotel",
    "country": "France",
    "user_review_count": 0,
    "image": "paris_image.jpg"
  },
  {
    "data_id": "014",
    "title": "Istanbul, Turkey",
    "destination": "Istanbul",
    "village_or_city": "City",
    "description": "Immerse yourself in the rich history and vibrant markets of Istanbul.",
    "package_duration": "6 days",
    "price": "$1,600",
    "rating": "4.6",
    "max_capacity": "25 people",
    "room_type": "Historic Hotel",
    "country": "Turkey",
    "user_review_count": 0,
    "image": "istanbul_image.jpg"
  },
  {
    "data_id": "015",
    "title": "Bangkok, Thailand",
    "destination": "Bangkok",
    "village_or_city": "City",
    "description": "Enjoy the vibrant street life and cultural landmarks of Bangkok.",
    "package_duration": "5 days",
    "price": "$1,200",
    "rating": "4.4",
    "max_capacity": "30 people",
    "room_type": "Boutique Hotel",
    "country": "Thailand",
    "user_review_count": 0,
    "image": "bangkok_image.jpg"
  },
  {
    "data_id": "016",
    "title": "Seoul, South Korea",
    "destination": "Seoul",
    "village_or_city": "City",
    "description": "Experience the dynamic mix of technology and tradition in this vibrant city.",
    "package_duration": "6 days",
    "price": "$1,900",
    "rating": "4.5",
    "max_capacity": "25 people",
    "room_type": "Modern Hotel",
    "country": "South Korea",
    "user_review_count": 0,
    "image": "seoul_image.jpg"
  },
  {
    "data_id": "017",
    "title": "Hanoi, Vietnam",
    "destination": "Hanoi",
    "village_or_city": "City",
    "description": "Discover the charm of Vietnam's capital with its ancient temples and bustling markets.",
    "package_duration": "4 days",
    "price": "$1,100",
    "rating": "4.3",
    "max_capacity": "20 people",
    "room_type": "Boutique Hotel",
    "country": "Vietnam",
    "user_review_count": 0,
    "image": "hanoi_image.jpg"
  },
  {
    "data_id": "018",
    "title": "Zermatt, Switzerland",
    "destination": "Zermatt",
    "village_or_city": "Village",
    "description": "Ski or hike in the shadow of the majestic Matterhorn in this alpine paradise.",
    "package_duration": "7 days",
    "price": "$3,000",
    "rating": "4.9",
    "max_capacity": "15 people",
    "room_type": "Chalet",
    "country": "Switzerland",
    "user_review_count": 0,
    "image": "zermatt_image.jpg"
  },
  {
    "data_id": "019",
    "title": "Dubai Desert, UAE",
    "destination": "Dubai Desert",
    "village_or_city": "Desert",
    "description": "Unwind in a luxurious desert retreat surrounded by golden dunes.",
    "package_duration": "3 days",
    "price": "$1,500",
    "rating": "4.8",
    "max_capacity": "10 people",
    "room_type": "Luxury Camp",
    "country": "UAE",
    "user_review_count": 0,
    "image": "dubai_desert_image.jpg"
  },
  {
    "data_id": "020",
    "title": "Reykjavik, Iceland",
    "destination": "Reykjavik",
    "village_or_city": "City",
    "description": "Explore the stunning landscapes and vibrant culture of Iceland's capital.",
    "package_duration": "5 days",
    "price": "$2,000",
    "rating": "4.7",
    "max_capacity": "20 people",
    "room_type": "Boutique Hotel",
    "country": "Iceland",
    "user_review_count": 0,
    "image": "reykjavik_image.jpg"
  }
]
