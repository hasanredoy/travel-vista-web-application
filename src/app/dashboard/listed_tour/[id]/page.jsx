"use client"
import { useParams } from "next/navigation"
import EditTour from "@/pages/dashboard/common/EditTour"

const EditPage = () => {
  const {id} = useParams()
  return <EditTour id={id}></EditTour>
}

export default EditPage
