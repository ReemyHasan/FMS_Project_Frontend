import * as React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import AccessDenied from "../src/features/404-page/access-denied";
export default function AccessDeniedPAge() {
  const { t } = useTranslation(TranslationFiles.COMMON); 
  return (
    <>
      <Head>
        <title>{t("access-denied")}</title>
      </Head>
      <main className={`mainContainer`}>
        <AccessDenied />
      </main>
    </>
  );
}
