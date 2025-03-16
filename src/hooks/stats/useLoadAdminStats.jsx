import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useLoadAdminStats = (role) => {
  //state for admin stat
  const [stats, setStats] = useState({});
  // loading state
  const [loading, setLoading] = useState(true);
  // get user
  const { user } = useSession()?.data || {};
  const email = user?.email;
  useEffect(() => {
    if (!email||role!=="admin") return;
    const StatLoader = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin-stats`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
        const data = await res.json();
        console.log(data)
        setStats(data?.stats);
      } catch (error) {
        console.log("failed to load admin stats", error);
      } finally {
        setLoading(false);
      }
    };

    StatLoader();
  }, [email,role]);


  return [stats,loading]||[]
};

export default useLoadAdminStats;
