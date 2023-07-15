import * as React from "react";
import { useState, useEffect, useContext } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import { getColumns } from "./columns";
import DataContext from "@/src/context/trap-context";
import { DataSource } from "./data-source";
import ShowDetailsPopup from "./show-details-popup";
import axios from "axios";
import { Spin } from "antd";

export default function ShowTraps() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [modalProps, setModalProps] = useState({
    isOpen: false,
    variableBinding: null,
  });
  const { data, new_val, setNewVal } = useContext(DataContext);
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      axios
        .get("http://192.168.93.198:6647/api/rethink/data")
        .then((res: any) => {
          if (res.data) {
            // console.log(res.data);
            const transformedData = res.data.map((item: any) => ({
              id: item.id,
              timestamp: item.timestamp,
              agentAddress: item.agentAddress,
              severity: item.severity,
              specificTrap: item.specificTrap,
              genericTrap: item.genericTrap,
              variableBindings: item.variableBindings,
            }));
            setData1(transformedData);
            // console.log(data1);
            if(new_val!=null){
            if (new_val.flag == '0') {
              // const transformedData2 =data.map((newData:any)=>({
              //   id: newData.id,
              //   timestamp: newData.timestamp,
              //   agentAddress: newData.agentAddress,
              //   severity: newData.severity,
              //   specificTrap: newData.specificTrap,
              //   genericTrap: newData.genericTrap,
              //   variableBindings: newData.variableBindings,
              
              // })) 
               
              console.log(new_val);
              setData1((prevData:any) => [...prevData, new_val]);
              setNewVal(null); 
              // transformedData2.forEach((item:any) => {
              //   setData1((prevData:any) => [...prevData, item]);
              // });
            
            }
            else if (new_val.flag==-1){
              setData1((prevData:any) => prevData.filter((item:any) => item.id !== new_val.id));
            }
          }
          }
           else {
            alert("Error");
          }
        })
        .catch((err: any) => console.log(err));
    };
    fetchData();
    setLoading(false);
  }, [new_val]);
  // useEffect(() => {
  //   if (!websocket) {
  //     return;
  //   }

  //   websocket.onmessage = function (event) {
  //     const message = JSON.parse(event.data);

  //     const newData = message.new_val;
  //     const transformedData = {
  //       id: newData.id,
  //       agentAddress: newData.agentAddress,
  //       timestamp: newData.timestamp,
  //       severity: newData.severity,
  //       specificTrap: newData.specificTrap,
  //       genericTrap: newData.genericTrap,
  //       variableBindings: newData.variableBindings,
  //     };
  //     setData((prevData: any) => [...prevData, transformedData]);
  //   };

  // }, [websocket]);
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
