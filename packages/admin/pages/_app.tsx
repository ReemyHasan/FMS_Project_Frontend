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
import websocket from "../src/features/web-socket";
import DataContext from "../src/context/trap-context";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [data, setData] = React.useState([]);
  const [new_val, setNewVal] = React.useState(null);
  const contextValue = React.useMemo(() => ({ data, setData, websocket,new_val,setNewVal }), [
    data,
    setData,
    websocket,
    new_val,
    setNewVal
  ]);
  React.useEffect(() => {
    if (router.pathname === "/") {
      router.push("/dashboard");
    }
  }, [router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
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
          <DataContext.Provider value={contextValue}>
            <AuthContextProvider>
              {/*// @ts-ignore*/}
              <Component {...pageProps} />
            </AuthContextProvider>
          </DataContext.Provider>
        </ANTDConfigProvider>
      </main>
    </Fragment>
  );
}
