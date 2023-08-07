import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import  DashboardComponent from "@/src/features/dashboard";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import ProtectedRoute from "../../src/features/protectedRoute";
export default function Dashboard() {
  const { t } = useTranslation(TranslationFiles.COMMON);

  return (
    <Fragment>
    <ProtectedRoute role="admin">
      <Head>
        <title>{t("dashboard")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("")}</div>
          <DashboardComponent />
        </main>
      </AppLayout>
      </ProtectedRoute>

    </Fragment>
  );
}
