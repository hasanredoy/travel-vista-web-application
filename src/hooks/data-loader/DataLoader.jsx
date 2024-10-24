import axios from "axios";

const loadData = async(URL)=>{
      const res = await axios.get(URL)
      console.log({URL});
      console.log({response:res.data});
      return res?.data
}
const DataLoader = async (url) => {
      const Data = await loadData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`)
  return Data
};

export default DataLoader;