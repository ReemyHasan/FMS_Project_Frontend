import * as React from "react";
import Head from "next/head";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import AboutContent from "@/src/features/about"
import UserLayout from "../../../src/components/user-layout";
export default function landing() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <Fragment>
      <Head>
        <title>{t("landing")}</title>
      </Head>
      <UserLayout > 
          <AboutContent />
          </UserLayout>
    </Fragment>
  );
}
