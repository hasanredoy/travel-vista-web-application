'use client'
import useDataLoader from "@/hooks/data-loader/useDataLoader"

const BlogDetails=({id})=> {
  const blogDetails = useDataLoader(`blog-data/${id}`)
  return (
    <div>BlogDetails</div>
  )
}

export default BlogDetails