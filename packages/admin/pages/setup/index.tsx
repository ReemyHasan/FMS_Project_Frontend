import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
export default function Setup() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <Fragment>
      <Head>
        <title>{t("setup")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>{t("setup")}</main>
      </AppLayout>
    </Fragment>
  );
}
