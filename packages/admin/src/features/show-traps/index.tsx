import * as React from "react";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import { Columns } from "./columns";
import { DataSource } from "./data-source";
export default function ShowTraps() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [columns, setColumns] = useState({
    columns: Columns
});

  const [data, setData] = useState({
    dataSource: DataSource
});
  return (
          <div>
            <FmsTable
              title={t("traps")}
              columns={columns.columns}
              data={{ dataSource: data.dataSource, total: data.dataSource.length }}
              t={t}
              setData= {setData}
              setColumns={setColumns}
            />
          </div>
  );
}
