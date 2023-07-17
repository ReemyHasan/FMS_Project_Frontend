import * as React from "react";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import { getColumns } from "./columns";
import { DataSource } from "./data-source";
import EditUserPopup from "./edit-user-popup"
export default function ShowUsers() {
  const { t } = useTranslation(TranslationFiles.COMMON);
const [modalProps, setModalProps] = useState({
  isOpen: false,
  data: null,
});
  const [data, setData] = useState(DataSource);
  return (
          <div>
            <FmsTable
              title={t("users")}
              columns={getColumns(setModalProps)}
              data={data}
              rowSelection={{
                type: "checkbox",
              }}
              t={t}
              setData= {setData}
              pageSizeOptions={["10", "20", "50"]}
              defaultPageSize={10}
            />
                    <EditUserPopup
          modalProps={modalProps}
          setModalProps={setModalProps}
        />
          </div>
  );
}
