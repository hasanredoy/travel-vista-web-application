'use client'
import DataLoader from "@/hooks/data-loader/DataLoader";

const TravelStats = () => {
  const stats = DataLoader('travel-stats')
  console.log(stats);
  return (
    <div>
      
    </div>
  );
};

export default TravelStats;