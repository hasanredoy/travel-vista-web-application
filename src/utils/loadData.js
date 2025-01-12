export const loadData =async(url)=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api${url}`,{next:{revalidate:10}})
  const data = await res.json()
  return data.data
}