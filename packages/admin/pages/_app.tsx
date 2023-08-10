import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ConfigProvider as ANTDConfigProvider } from "antd";
import "../src/styles/index.less";
import "../src/styles/vendors/index.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import "@/../shared-library/globals.css";
import AuthContextProvider from "@/src/context/auth-context";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import DataProvider from "../src/context/trap-context/provider"
import "../src/styles/tailwind.css";
import { useCookies } from "react-cookie";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [data, setData] = React.useState([]);
  const contextValue = React.useMemo(() => ({ data, setData }), [
    data,
    setData,
  ]);
  const [cookies, setCookies, removeCookie] = useCookies([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);

  const removeCookieAfterOneHour = async () => {
    removeCookie("role", { path: "/", sameSite: true });
    removeCookie("token", { path: "/", sameSite: true });
    removeCookie("username", { path: "/", sameSite: true });
    removeCookie("fetch", { path: "/", sameSite: true },{ path: "/ar", sameSite: true });
    window.location.href = "/sign-in";
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        removeCookieAfterOneHour();
      },
      1800000 //000
    );
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Fragment>
      <Head>
        <title>{t("fms")}</title>
        <meta name="description" content="fms FMS System Admin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <ANTDConfigProvider
          theme={{
            token: {
              colorPrimary: "#153472",
            },
          }}
        >
          <AuthContextProvider>
          <DataProvider value={contextValue}>
            <Component {...pageProps} />
            </ DataProvider>
          </AuthContextProvider>
        </ANTDConfigProvider>
      </main>
    </Fragment>
  );
}
