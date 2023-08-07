import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import ShowUsers from "@/src/features/show-users";
import ProtectedRoute from "../../src/features/protectedRoute";
export default function Users() {
  const { t } = useTranslation(TranslationFiles.COMMON);

  return (
    <Fragment>
      <ProtectedRoute role="admin">
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
      </ProtectedRoute>
    </Fragment>
  );
}
