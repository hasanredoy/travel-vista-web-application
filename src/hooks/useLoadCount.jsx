"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const useLoadCount = (url) => {
  const [count, setCount] = useState();
  useEffect(() => {
    const CountLoader = async () => {
     try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`);
      const data = await res.json();
      setCount(data?.count);
     } catch (error) {
      console.log(`Failed to load Count of ${url}`,error)
     }
    };
    CountLoader()
  }, [url]);
  return count || 0;
};

export default useLoadCount;
