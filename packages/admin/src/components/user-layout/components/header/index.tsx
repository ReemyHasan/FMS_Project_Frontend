import React, { useEffect, useContext,useRef } from "react";
import { Layout, Row, Col } from "antd";
import AppLanguageSwitcher from "./app-language-switcher";
import AppNotifications from "./app-notifications";
import NavBar from "./nav-bar";
import UserInfo from "./user-info";
import DataContext from "../../../../context/trap-context";
const { Header } = Layout;

export default function AppHeader() {
  // const { data, setData, websocket, setNewVal } = useContext(DataContext);
  // useEffect(() => {
  //   if (!websocket) {
  //     return;
  //   }
  //   websocket.onmessage = function (event:any) {
  //     const message = JSON.parse(event.data);
  //     console.log(message);
  //     if (message.new_val != null) {
  //       const newData = message.new_val;
  //       const transformedData = {
  //         flag:'0',
  //         id: newData.id,
  //         timestamp: newData.timestamp,
  //         agentAddress: newData.agentAddress,
  //         severity: newData.severity,
  //         specificTrap: newData.specificTrap,
  //         genericTrap: newData.genericTrap,
  //         variableBindings: newData.variableBindings,
  //       };
  //       setNewVal(transformedData);
  //       setData((prevData: any) => [...prevData, newData]);
  //     }
  //     else{
  //       setNewVal({id:message.old_val.id,flag:-1,});
  //     }
  //   };

  //   return () => {
  //     // if (websocket) {
  //     //   websocket.close();
  //     // }
  //   };
  // }, []);
  const openKibana = () => {
    window.open("http://172.29.3.220:5601", "_blank");
  };

  return (
    <Header className="app-header-mini-sidebar">
      <Row justify={"space-between"} className={"fullContent"}>
        {/* <Col span={12}> */}
          {/* <Row align={"middle"}> */}
            <Col span={12}>
             <NavBar />
            </Col>
          {/* </Row> */}
        {/* </Col> */}
        <Col span={12}>
          <Row gutter={8} align={"middle"} justify={"end"}>
          <Col className={"app-notifications"}>
          <a href="http://172.29.3.220:5601" target="_blank" onClick={openKibana}>
          <img src="/images/elasticsearch.svg" alt="Kibana" style={{ width: "40px", height: "30px" }} title="Archive"/>
              </a>
            </Col>
            <Col className={"app-language-switcher"}>
              <AppLanguageSwitcher />
            </Col>
           
            <Col className={"app-user-info"}>
              <UserInfo />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}

// export default AppHeader;
