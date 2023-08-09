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
  useEffect(() => {
    if (!cookies["fetch"] ) {
      const fetchData1 = async () => {
        try {
          const response = await fetchData(cookies["token"]);
          setData(response);
          setData1(response);
          setCookie("fetch", 1);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData1();
      console.log(data);
    }
    console.log(data);
    setData1(data);

    const authToken = `Bearer ${cookies["token"]}`;
    const source = new EventSource(
      `http://localhost:6647/api/notifications/sub?token=${authToken}`
    );

    source.addEventListener("open", () => {
      console.log("SSE opened!");
    });

    source.addEventListener("message", (e) => {
      const message = JSON.parse(e.data);
      console.log(message);
      if (message.new_val != null) {
        const newData = message.new_val;
        setData1((prevData: any) => [...prevData, newData]);
        setData((prevData: any) => [...prevData, newData]);
      } else {
        setData((prevData: any) =>
          prevData.filter((item: any) => item.id !== message.old_val.id)
        );
        setData1((prevData: any) =>
          prevData.filter((item: any) => item.id !== message.old_val.id)
        );
      }
    });

    source.addEventListener("error", (e) => {
      console.error("Error: ", e);
    });

    return () => {
      source.close();
      console.log("SSE closed ");
    };
  }, []);
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
