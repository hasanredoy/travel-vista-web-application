"use client";
import { useEffect, useState } from "react";

const useLoadBlogs = (userBlogs, sortVal) => {
  console.log(userBlogs, sortVal);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data?user-blog=${
    userBlogs || false
  }&sort-value=${sortVal || ""}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        setLoading(false);
      });
  }, [apiUrl]);

  return [data, loading] || [];
};

export default useLoadBlogs;
