import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import SignUpForm from "@/src/features/add-user";
import ProtectedRoute from "../../src/features/protectedRoute";
export default function AddUser() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <Fragment>
      <ProtectedRoute role="admin">
        <Head>
          <title>{t("add-user")}</title>
        </Head>
        <AppLayout>
          <main className={`app-main-container`}>
            <div className={"page-header"}>{t("add-user")}</div>
            <SignUpForm />
          </main>
        </AppLayout>
      </ProtectedRoute>
    </Fragment>
  );
}
