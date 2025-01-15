"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useLoadBlogs = (userBlogs, sortVal) => {
  console.log(userBlogs, sortVal);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const session = useSession()
  const userEmail = session?.data?.user?.email
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data?user-blog=${
    userBlogs?userEmail:""
  }&sort=${sortVal || ""}`;
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
