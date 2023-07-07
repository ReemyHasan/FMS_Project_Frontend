import * as React from "react";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import Head from "next/head";
import { TranslationFiles } from "@/src/data/core";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <Fragment>
      <Head>
        <title>{t("dashboard")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("dashboard")}</div>
        </main>
      </AppLayout>
    </Fragment>
  );
}
