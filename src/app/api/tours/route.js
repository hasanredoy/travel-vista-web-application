import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const search = await request.nextUrl.searchParams.get("search");
  const category = await request.nextUrl.searchParams.get("category");
  console.log(category);
  try {
    const db = await connectDB();
    const toursCollection = await db.collection("tours");
    let searchQuery = {};

    if (search) {
      searchQuery.$or = [
        { title: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i"} },
      ];
    }
    if(category){
      searchQuery={category:{$regex:category,$options:"i"}}
    }
    const tours = await toursCollection.find(searchQuery).toArray();
    return NextResponse.json({ data: tours });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};

const data = [
  {
    data_id: "001",
    title: "Santorini, Greece",
    destination: "Santorini",
    village_or_city: "City",
    description:
      "Experience breathtaking sunsets, whitewashed houses, and crystal-clear waters on this iconic island.",
    package_duration: "5 days",
    price: "$1,200",
    rating: "4.4",
    max_capacity: "20 people",
    room_type: "Luxury Villa",
    country: "Greece",
    user_review_count: 3,
    image:
      "https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beach_Holidays",
  },
  {
    data_id: "002",
    title: "Kyoto, Japan",
    destination: "Kyoto",
    village_or_city: "City",
    description:
      "Discover the beauty of traditional temples, vibrant gardens, and the rich culture of Japan's ancient capital.",
    package_duration: "7 days",
    price: "$1,800",
    rating: "4.7",
    max_capacity: "15 people",
    room_type: "Traditional Ryokan",
    country: "Japan",
    user_review_count: 3,
    image:
      "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Adventure",
  },
  {
    data_id: "003",
    title: "Cape Town, South Africa",
    destination: "Cape Town",
    village_or_city: "City",
    description:
      "Explore stunning beaches, vibrant culture, and Table Mountain in this coastal gem.",
    package_duration: "7 days",
    price: "$1,400",
    rating: "4.6",
    max_capacity: "20 people",
    room_type: "Seaside Resort",
    country: "South Africa",
    user_review_count: 3,
    image:
      "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beach_Holidays",
  },
  {
    data_id: "004",
    title: "Banff National Park, Canada",
    destination: "Banff",
    village_or_city: "Town",
    description:
      "Enjoy pristine mountain scenery, crystal-clear lakes, and outdoor adventures in this charming town.",
    package_duration: "5 days",
    price: "$1,700",
    rating: "4.8",
    max_capacity: "15 people",
    room_type: "Mountain Cabin",
    country: "Canada",
    user_review_count: 3,
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Mountain_Escapes",
  },
  {
    data_id: "005",
    title: "Dubai, UAE",
    destination: "Dubai",
    village_or_city: "City",
    description:
      "Experience luxury, modern architecture, and the Arabian Desert in this dynamic city.",
    package_duration: "4 days",
    price: "$2,000",
    rating: "4.6",
    max_capacity: "40 people",
    room_type: "Luxury Hotel",
    country: "UAE",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/dubai-skyline-sunset-time-united-arab-emirates_231208-7631.jpg?t=st=1731950045~exp=1731953645~hmac=635982ec7982f1332431db208c8aec4da2cf1bbbba83562e98f997ef32975caf&w=360",
    category: "Adventure",
  },
  {
    data_id: "006",
    title: "Moscow, Russia",
    destination: "Moscow",
    village_or_city: "City",
    description:
      "Discover the history, grandeur, and cultural richness of Russia's iconic capital city.",
    package_duration: "6 days",
    price: "$1,500",
    rating: "4.5",
    max_capacity: "30 people",
    room_type: "Luxury Hotel",
    country: "Russia",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/moscow-business-centre_1398-216.jpg?t=st=1731950163~exp=1731953763~hmac=ad60163a8c17adf21ddd17182db3be48c379ae46185f89aab699007597657edf&w=360",
    category: "Adventure",
  },
  {
    data_id: "007",
    title: "Sydney, Australia",
    destination: "Sydney",
    village_or_city: "City",
    description:
      "Explore the iconic Sydney Opera House, beautiful beaches, and vibrant city life.",
    package_duration: "5 days",
    price: "$2,200",
    rating: "4.7",
    max_capacity: "25 people",
    room_type: "Seaside Apartment",
    country: "Australia",
    user_review_count: 3,
    image:
      "https://images.pexels.com/photos/16872051/pexels-photo-16872051/free-photo-of-aerial-view-of-coastline-of-sydney.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beach_Holidays",
  },
  {
    data_id: "008",
    title: "Machu Picchu, Peru",
    destination: "Machu Picchu",
    village_or_city: "Village",
    description:
      "Experience the wonder of the ancient Inca citadel surrounded by breathtaking mountain scenery.",
    package_duration: "4 days",
    price: "$1,800",
    rating: "4.9",
    max_capacity: "10 people",
    room_type: "Rustic Lodge",
    country: "Peru",
    user_review_count: 3,
    image:
      "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Mountain_Escapes",
  },
  {
    data_id: "009",
    title: "Athens, Greece",
    destination: "Athens",
    village_or_city: "City",
    description:
      "Dive into history and explore ancient ruins while enjoying modern Greek culture.",
    package_duration: "5 days",
    price: "$1,300",
    rating: "4.5",
    max_capacity: "30 people",
    room_type: "Luxury Apartment",
    country: "Greece",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/ancient-greek-ruins-acropolis-athens-greece_181624-11815.jpg?t=st=1731950316~exp=1731953916~hmac=eabd3f02dfc0dcd49c5ee5d64ac9f1204a07f3809dca941463471a5ad1187721&w=360",
    category: "Adventure",
  },
  {
    data_id: "010",
    title: "Tokyo, Japan",
    destination: "Tokyo",
    village_or_city: "City",
    description:
      "Experience the vibrant life of Tokyo with its neon-lit streets and tranquil gardens.",
    package_duration: "6 days",
    price: "$2,100",
    rating: "4.8",
    max_capacity: "20 people",
    room_type: "Luxury Hotel",
    country: "Japan",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/people-walking-japan-street-nighttime_23-2148942945.jpg?t=st=1731950457~exp=1731954057~hmac=808966a36609b6272ea5adff8111f93ceb824ecef7ba77c39a54b63458fc71e8&w=740",
    category: "City_Escapes",
  },
  {
    data_id: "011",
    title: "Queenstown, New Zealand",
    destination: "Queenstown",
    village_or_city: "Town",
    description:
      "Adventure awaits in this stunning town surrounded by towering mountains and clear lakes.",
    package_duration: "5 days",
    price: "$1,900",
    rating: "4.6",
    max_capacity: "15 people",
    room_type: "Boutique Lodge",
    country: "New Zealand",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/breathtaking-view-beautiful-landscape-surrounded-by-mountains-wanaka-town-new-zealand_181624-41030.jpg?t=st=1731950516~exp=1731954116~hmac=a21bb4301120b577ba99a6f7626a104758d42880f87c80e0b620d69d5a9afc23&w=740",
    category: "Adventure",
  },
  {
    data_id: "012",
    title: "Rome, Italy",
    destination: "Rome",
    village_or_city: "City",
    description:
      "Explore the ancient ruins of Rome, vibrant streets, and world-famous cuisine.",
    package_duration: "5 days",
    price: "$1,400",
    rating: "4.7",
    max_capacity: "30 people",
    room_type: "Luxury Apartment",
    country: "Italy",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/roman-coliseum_181624-30510.jpg?t=st=1731950556~exp=1731954156~hmac=847323d421b158544a73f4e52ac9a7edca4ef5de638c46227ea371b12f393b88&w=740",
    category: "City_Escapes",
  },
  {
    data_id: "013",
    title: "Paris, France",
    destination: "Paris",
    village_or_city: "City",
    description:
      "Fall in love with the City of Lights, famous for its art, fashion, and culinary delights.",
    package_duration: "5 days",
    price: "$2,500",
    rating: "4.9",
    max_capacity: "20 people",
    room_type: "Luxury Hotel",
    country: "France",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/eiffel-tower-champ-de-mars-paris-france_53876-94787.jpg?t=st=1731950609~exp=1731954209~hmac=8a5e985bee40c53714d5b5961a6366ab9a38a781db8dcdc10637cbb76aca5c06&w=740",
    category: "City_Escapes",
  },
  {
    data_id: "014",
    title: "Istanbul, Turkey",
    destination: "Istanbul",
    village_or_city: "City",
    description:
      "Immerse yourself in the rich history and vibrant markets of Istanbul.",
    package_duration: "6 days",
    price: "$1,600",
    rating: "4.6",
    max_capacity: "25 people",
    room_type: "Historic Hotel",
    country: "Turkey",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/istanbul-city-camlica-hill-turkey_335224-558.jpg?t=st=1731950678~exp=1731954278~hmac=cdc25bcb04b9eb29dc9f0195a0562114c3e3738d32f774f128fcc5ca8593eee5&w=740",
    category: "City_Escapes",
  },
  {
    data_id: "015",
    title: "Bangkok, Thailand",
    destination: "Bangkok",
    village_or_city: "City",
    description:
      "Enjoy the vibrant street life and cultural landmarks of Bangkok.",
    package_duration: "5 days",
    price: "$1,200",
    rating: "4.4",
    max_capacity: "30 people",
    room_type: "Boutique Hotel",
    country: "Thailand",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/city-with-buildings-bridge_1203-1022.jpg?t=st=1731950714~exp=1731954314~hmac=dc2b7f135b8698321eecd4bf5acd503f9f113576bf4e69def3997f0f807181d9&w=740",
    category: "City_Escapes",
  },
  {
    data_id: "016",
    title: "Seoul, South Korea",
    destination: "Seoul",
    village_or_city: "City",
    description:
      "Experience the dynamic mix of technology and tradition in this vibrant city.",
    package_duration: "6 days",
    price: "$1,900",
    rating: "4.5",
    max_capacity: "25 people",
    room_type: "Modern Hotel",
    country: "South Korea",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/beautiful-architecture-building-seoul-city_74190-3339.jpg?t=st=1731950783~exp=1731954383~hmac=6fd55f1875975e7cf22e0ec8784c5ccfd1dfc799b06add54c829a3ec81cab7c3&w=740",
    category: "City_Escapes",
  },
  {
    data_id: "017",
    title: "Hanoi, Vietnam",
    destination: "Hanoi",
    village_or_city: "City",
    description:
      "Discover the charm of Vietnam's capital with its ancient temples and bustling markets.",
    package_duration: "4 days",
    price: "$1,100",
    rating: "4.3",
    max_capacity: "20 people",
    room_type: "Boutique Hotel",
    country: "Vietnam",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/chinise-building_1417-1713.jpg?t=st=1731950817~exp=1731954417~hmac=82d122bf96fb7221f83cfaae3262581d576ff8ab7814135adafe276192ab3693&w=740",
    category: "City_Escapes",
  },
  {
    data_id: "018",
    title: "Zermatt, Switzerland",
    destination: "Zermatt",
    village_or_city: "Village",
    description:
      "Ski or hike in the shadow of the majestic Matterhorn in this alpine paradise.",
    package_duration: "7 days",
    price: "$3,000",
    rating: "4.9",
    max_capacity: "15 people",
    room_type: "Chalet",
    country: "Switzerland",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/house-surrounded-by-rocky-mountains-covered-greenery-snow-valais-switzerland_181624-26240.jpg?t=st=1731950876~exp=1731954476~hmac=b6380408f1cd1b15a0bb9d6be345fd626a4fad746494576c6c86df5b4268d31a&w=740",
    category: "Mountain_Escapes",
  },
  {
    data_id: "019",
    title: "Dubai Desert, UAE",
    destination: "Dubai Desert",
    village_or_city: "Desert",
    description:
      "Unwind in a luxurious desert retreat surrounded by the vast sand dunes.",
    package_duration: "4 days",
    price: "$1,700",
    rating: "4.7",
    max_capacity: "15 people",
    room_type: "Luxury Tent",
    country: "UAE",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/desert-landscape-uae-emerates_181624-41945.jpg?t=st=1731950935~exp=1731954535~hmac=4a5b2a0a3b3624b49693f7adf7fcab48582cbce3e52b5759187e2fe546d88b2d&w=740",
    category: "Wildlife_Safaris",
  },
  {
    data_id: "020",
    title: "Patagonia, Chile",
    destination: "Patagonia",
    village_or_city: "Region",
    description:
      "Explore the dramatic landscapes, glaciers, and mountain ranges of Patagonia.",
    package_duration: "10 days",
    price: "$4,500",
    rating: "4.9",
    max_capacity: "10 people",
    room_type: "Eco Lodge",
    country: "Chile",
    user_review_count: 3,
    image:
      "https://img.freepik.com/free-photo/patagonia-landscape_181624-47203.jpg?t=st=1731950965~exp=1731954565~hmac=76e5881f2e3d1c7c1708a67cbb5b6a66e44eae8b2530ea3d2a461edb19c0fc27&w=740",
    category: "Mountain_Escapes",
  },
];
