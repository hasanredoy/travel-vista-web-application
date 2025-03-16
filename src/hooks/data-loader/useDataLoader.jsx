import { useEffect, useState } from "react";

const useDataLoader = (url) => {
  const [finalData, setFinalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`;
  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setFinalData(data?.data);
      } catch (error) {
        console.log("Failed to load data.", error);
      } finally {
        setLoading(false);
      }
    };
    LoadData();
  }, [apiUrl]);

  return [finalData, loading] || [];
};

export default useDataLoader;
