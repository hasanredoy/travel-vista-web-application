"use client"
import UserProfile from "@/pages/dashboard/common/UserProfile"
import { useParams } from "next/navigation"

const UserProfilePage = () => {
  const {id} = useParams()
  return <UserProfile id={id}/>
}

export default UserProfilePage
