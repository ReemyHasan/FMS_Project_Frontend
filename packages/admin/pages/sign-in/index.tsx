import * as React from "react";
import Head from "next/head";
import Login from "@/src/features/login";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
export default function SignIn() {
const { t } = useTranslation(TranslationFiles.COMMON); 
  return (
    <>
      <Head>
        <title>{t("sign-in")}</title>
      </Head>
      <main className={`mainContainer`}>
        <Login />
      </main>
    </>
  );
}
