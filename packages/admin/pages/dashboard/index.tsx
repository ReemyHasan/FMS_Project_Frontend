import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { UserCard, FaultChart } from "@/src/features/dashboard";
import ChartComponent from "@/src/features/dashboard/chart";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import { Row } from "antd";
export default function Dashboard() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const userNumber = 10; // Replace with your user number data

  return (
    <Fragment>
      <Head>
        <title>{t("dashboard")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("dashboard")}</div>
          <Row gutter={56}>
            <UserCard userNumber={userNumber} />
            <FaultChart />
            <ChartComponent />
          </Row>
        </main>
      </AppLayout>
    </Fragment>
  );
}
