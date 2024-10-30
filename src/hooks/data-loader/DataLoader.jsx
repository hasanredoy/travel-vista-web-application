import axios from "axios";

const loadData = async (URL) => {
  try {
    const res = await axios.get(URL);
    // console.log({ response: res?.data?.data });
    return res?.data || [];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
};

const DataLoader = async (url) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`;
  return await loadData(apiUrl);
};

export default DataLoader;
