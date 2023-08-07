import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import SettingProfileContent from "../../../src/features/setting/setting-profile";
import ProtectedRoute from "../../../src/features/protectedRoute";
export default function Setup() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <Fragment>
          <ProtectedRoute role="admin">
      <Head>
        <title>{t("setup")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>
          <SettingProfileContent />
          </main>
      </AppLayout>
      </ProtectedRoute>
    </Fragment>
  );
}
