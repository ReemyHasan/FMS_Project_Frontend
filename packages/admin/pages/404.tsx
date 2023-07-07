import * as React from "react";
import Head from "next/head";
import NotFound from "@/src/features/404-page";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
export default function NotFoundPage() {
  const { t } = useTranslation(TranslationFiles.COMMON); 
  return (
    <>
      <Head>
        <title>{t("not-found")}</title>
      </Head>
      <main className={`mainContainer`}>
        <NotFound />
      </main>
    </>
  );
}
