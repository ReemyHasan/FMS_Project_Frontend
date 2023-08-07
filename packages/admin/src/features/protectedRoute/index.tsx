import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ role, children }:any) => {
  const router = useRouter();
  const [cookies] = useCookies([]);

//   useEffect(() => {
    if (typeof window !== "undefined" && cookies["role"] !== role) {
      router.push("/access-denied");
    }
//   }, [cookies, role, router]);

  return children;
};

export default ProtectedRoute;