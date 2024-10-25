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
    "name": "Emirates",
    "logo": "https://seeklogo.com/images/E/Emirates_Airlines-logo-3A6A7D24CA-seeklogo.com.png",
    "website": "https://www.emirates.com"
  },
  {
    "name": "Qatar Airways",
    "logo": "https://seeklogo.com/images/Q/qatar-airways-logo-E096F45AE3-seeklogo.com.png",
    "website": "https://www.qatarairways.com"
  },
  {
    "name": "Hilton Hotels",
    "logo": "https://i.pinimg.com/originals/62/81/ed/6281edd49b9cbbe208790650d29cf1fe.png",
    "website": "https://www.hilton.com"
  },
  
    {
      "name": "Expedia",
      "logo": "https://cdn.worldvectorlogo.com/logos/expedia.svg",
      "website": "https://www.expedia.com"
    },
    {
      "name": "Marriott",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSPTP6AD2Jq2f7xYl29OSShxfNSSbLWk3yg&s",
      "website": "https://www.marriott.com"
    },
    {
      "name": "Turo",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjILdSHoTMiW9gUsWFFOq3yIS_ToishBdmQ&s",
      "website": "https://www.turo.com"
    }
  
  
]
