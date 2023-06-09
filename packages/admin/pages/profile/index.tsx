import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import ProfileForm from "@/src/features/profile";
export default function Profile() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <Fragment>
      <Head>
        <title>{t("profile")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("profile")}</div>
        <ProfileForm />
        </main>
      </AppLayout>
    </Fragment>
  );
}
