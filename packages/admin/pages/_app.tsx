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
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { t } = useTranslation(TranslationFiles.COMMON);

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
          <AuthContextProvider>
            {/*// @ts-ignore*/}
            <Component {...pageProps} />
          </AuthContextProvider>
        </ANTDConfigProvider>
      </main>
    </Fragment>
  );
}
