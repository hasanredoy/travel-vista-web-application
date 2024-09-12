// 'use client'
// import useLoadData from "@/hooks/useLoadData";

import { loadData } from "@/hooks/loadData";


const Cards =async () => {
const data = await loadData('')
console.log(data);

  return (
    <div>
      
    </div>
  );
};

export default Cards;