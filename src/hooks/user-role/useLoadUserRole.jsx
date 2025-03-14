import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const useLoadUserRole = () => {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
const {user} = useSession()?.data||{}
const email = user?.email
  useEffect(() => {
    if (!email) return; // Prevent unnecessary requests

    const LoadUserRole = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user-role`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();
        setRole(data?.user_role || ""); // Set role in state
      } catch (error) {
        console.error("Failed to fetch user role:", error);
      } finally {
        setLoading(false);
      }
    };

    LoadUserRole();
  }, [email]);

  return role
};

export default useLoadUserRole;
