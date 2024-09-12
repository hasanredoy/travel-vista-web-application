import axios from "axios"

export const loadData = async()=>{
  const res = await axios.get('http://localhost:3000/api/featured')
  console.log(res.data?.data);
  return res.data?.data
}