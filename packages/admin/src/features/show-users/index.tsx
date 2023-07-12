import * as React from "react";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import { Columns } from "./columns";
import { DataSource } from "./data-source";
export default function ShowUsers() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [columns, setColumns] = useState({
    columns: Columns
});
  const [data, setData] = useState(DataSource);
  return (
          <div>
            <FmsTable
              title={t("users")}
              columns={columns.columns}
              data={data}
              rowSelection={{
                type: "checkbox",
              }}
              t={t}
              setData= {setData}
              setColumns={setColumns}
            />
          </div>
  );
}
