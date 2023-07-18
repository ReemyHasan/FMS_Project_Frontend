import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import ShowTraps from "@/src/features/show-traps";
import UserLayout from "../../../src/components/user-layout";
export default function Traps() {
  const { t } = useTranslation(TranslationFiles.COMMON);
 
  return (
    <Fragment>
      <Head>
        <title>{t("traps")}</title>
      </Head>
      <UserLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("new-traps")}</div>
          <div>
           <ShowTraps />
          </div>
        </main>
      </UserLayout>
    </Fragment>
  );
}
