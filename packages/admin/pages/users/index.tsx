import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import ShowUsers from "@/src/features/show-users";
export default function Users() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  
  return (
    <Fragment>
      <Head>
        <title>{t("users")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("users")}</div>
          <div>
            <ShowUsers />
          </div>
        </main>
      </AppLayout>
    </Fragment>
  );
}
