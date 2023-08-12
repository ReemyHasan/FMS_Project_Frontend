import * as React from "react";
import { useState, useEffect, useContext } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import { getColumns } from "./columns";
import ShowDetailsPopup from "./show-details-popup";
import { Spin } from "antd";
import { useCookies } from "react-cookie";
import DataContext from "../../context/trap-context";
import { fetchData } from "../../services/traps-service";
export default function ShowTraps() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [modalProps, setModalProps] = useState({
    isOpen: false,
    variableBinding: null,
  });
  const { data, setData } = useContext(DataContext);
  const [data1, setData1] = useState(data);
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies([]);
  useEffect(()=>{
    setData1(data);
  }, [data])
 
  return (
    <div>
      <Spin spinning={loading}>
        <FmsTable
          title={t("traps")}
          columns={getColumns(setModalProps)}
          data={data1}
          t={t}
          setData={setData1}
          pageSizeOptions={["20", "50", "100"]}
          defaultPageSize={20}
        />
        <ShowDetailsPopup
          modalProps={modalProps}
          setModalProps={setModalProps}
        />
      </Spin>
    </div>
  );
}
