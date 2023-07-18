import * as React from "react";
import Head from "next/head";
import UserLayout from "../../../src/components/user-layout";
import  DashboardComponent from "@/src/features/dashboard";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
export default function Dashboard() {
  const { t } = useTranslation(TranslationFiles.COMMON);

  return (
    <Fragment>
      <Head>
        <title>{t("dashboard")}</title>
      </Head>
      <UserLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("")}</div>
          <DashboardComponent />
        </main>
      </UserLayout>
    </Fragment>
  );
}
