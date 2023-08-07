import * as React from "react";
import { useEffect } from "react"; // Import useEffect
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import Head from "next/head";
import { TranslationFiles } from "@/src/data/core";
import useTranslation from "next-translate/useTranslation";
import DashboardComponent from "@/src/features/dashboard";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import MainUtils from "@/src/utils/main";
export default function Home() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const router = useRouter();
  const [cookies] = useCookies([]);
    if (typeof window !== 'undefined') {
      if (cookies["role"] === "admin" && cookies["token"] && !MainUtils.isEmptyValue(cookies["token"])) {
        router.push("/dashboard");
      } else if (cookies["role"] === "user" && cookies["token"] && !MainUtils.isEmptyValue(cookies["token"])) {
        router.push("/user/landing");
      } else {
        router.push("/sign-in");
      }
    }
  return (
    <Fragment>
      <Head>
        <title>{t("dashboard")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("")}</div>
          {t("Waiting")}
        </main>
      </AppLayout>
    </Fragment>
  );
}
