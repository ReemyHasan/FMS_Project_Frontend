import * as React from "react";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import { getColumns } from "./columns";
import { DataSource } from "./data-source";
import ShowDetailsPopup from "./show-details-popup";
export default function ShowTraps() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [modalProps, setModalProps] =  useState({ isOpen: false, variableBinding: null });
  const [data, setData] = useState([]);
  let socket: WebSocket | null = null;

  function getWebSocket() {
    if (!socket) {
      socket = new WebSocket("ws://192.168.26.46:6647/fms-websocket");
      socket.onopen = function () {
        console.log("Connected to WebSocket server");
      };
      socket.onmessage = function (event) {
        const message = JSON.parse(event.data);

        const newData = message.new_val;
        const transformedData = {
          id: newData.id,
          agentAddress: newData.agentAddress,
          timestamp: newData.timestamp,
          severity: newData.severity,
          specificTrap: newData.specificTrap,
          genericTrap: newData.genericTrap,
          variableBindings: newData.variableBindings,
        };
        //  console.log(transformedData);
        setData((prevData: any) => [...prevData, transformedData]);
      };
      socket.onclose = function () {
        console.log("Disconnected from WebSocket server");
        socket = null;
      };
    }
    return socket;
  }

  useEffect(() => {
    const socket = getWebSocket();
    return () => {
      socket.close();
    };
  }, []);
  return (
    <div>
      <FmsTable
        title={t("traps")}
        columns={getColumns(setModalProps)}
        data={data}
        t={t}
        setData={setData}
      />
       <ShowDetailsPopup
        modalProps={modalProps}
        setModalProps={setModalProps}
      />
    </div>
  );
}
