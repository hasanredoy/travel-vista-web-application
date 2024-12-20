"use client";

import axios from "axios";
import { useState } from "react";

const API = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
export const usePostImage = (image, setLoading) => {
  // state to hadle image url
  const [imageUrl, setImageUrl] = useState(null);

  const imageData = new FormData();
  imageData.append("image", image);
  if(!imageData) return null

  try {
    if(!image)return null
    axios
      .post(`https://api.imgbb.com/1/upload?key=${API}`, imageData)
      .then((res) => {
        setImageUrl(res?.data?.data?.display_url);
        setLoading(false);
      });
  } catch (error) {
    console.log(error);
  }
  return imageUrl;
};
