import * as React from "react";
import Head from "next/head";
import AppLayout from "@/src/components/layout";
import { Fragment } from "react";
import { useRouter } from 'next/router';
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import EditForm from "@/src/features/edit-user";
export default function EditUser() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const router = useRouter();
  const { id } = router.query;
  return (
    <Fragment>
      <Head>
        <title>{t("edit-user")}</title>
      </Head>
      <AppLayout>
        <main className={`app-main-container`}>
          <div className={"page-header"}>{t("edit-user")}</div>
        <EditForm id={id} />
        </main>
      </AppLayout>
    </Fragment>
  );
}
