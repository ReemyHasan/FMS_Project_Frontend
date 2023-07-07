import { AUTH_TOKEN } from "@/src/data/constant/app-constant";
import router from "next/router";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export const AuthContext = createContext({});

const AuthContextProvider = (props: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const [cookies, removeCookies] = useCookies([AUTH_TOKEN]);
  useEffect(() => {
    if (cookies[AUTH_TOKEN]) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      router.push("/sign-in");
    }
  }, [cookies[AUTH_TOKEN]]);

  const logout = async () => {
    removeCookies(AUTH_TOKEN, { path: "/", sameSite: true });
    window.location.href = "/sign-in";
  };

  return (
    <AuthContext.Provider
      value={{
        logout: logout,
        setAuthenticated: setAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
