import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import  MLContent from "@/src/features/ml-model";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import ProtectedRoute from "../../src/features/protectedRoute";
export default function MLModel() {
  const { t } = useTranslation(TranslationFiles.COMMON);

  return (
    <Fragment>
    <ProtectedRoute role="admin">
      <Head>
        <title>{t("ml-model")}</title>
      </Head>
      <AppLayout>
        <MLContent />
      </AppLayout>
      </ProtectedRoute>

    </Fragment>
  );
}
