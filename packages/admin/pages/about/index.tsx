import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import AboutContent from "@/src/features/about"
export default function About() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <Fragment>
      <Head>
        <title>{t("about")}</title>
      </Head>
      <AppLayout>
        {/* <main className={`app-main-container`}> */}
          {/* <div className={"page-header"}>{t("communications")}</div> */}
          <AboutContent />
        {/* </main> */}
      </AppLayout>
    </Fragment>
  );
}
