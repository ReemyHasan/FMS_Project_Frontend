// import { AUTH_TOKEN } from "@/src/data/constant/app-constant";
import router from "next/router";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export const AuthContext = createContext({});

const AuthContextProvider = (props: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const [cookies, removeCookie] = useCookies(["role", "token"]);
  useEffect(() => {
    if (cookies["token"]) { 
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      router.push("/sign-in");
    }
  }, [cookies]); 

  const logout = async () => {
    try {
      removeCookie("role", "", { path: "/", expires: new Date(0) });
      removeCookie("token", "", { path: "/", expires: new Date(0) });
      // removeCookie("role","");
      // removeCookie("token","");
      window.location.href = "/sign-in";
    } catch (error) {
      console.error("Error while removing cookies:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: authenticated,
        logout: logout,
        setAuthenticated: setAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
