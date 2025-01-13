export const loadData =async(url)=>{
try { const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api${url}`,{next:{revalidate:10}})
  const data = await res.json()
  const result  = data?.data
  return result ||[]}
    catch (error) {
      console.error('Failed to load data:', error);
      return [];
  }
}