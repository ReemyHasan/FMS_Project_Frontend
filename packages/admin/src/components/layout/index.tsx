import React, { ReactNode, useState, useEffect, useContext  } from "react";
import { Layout } from "antd";
import AppContentView from "./components/content-view";
import AppSidebar from "./components/sidebar";
import AppHeader from "./components/header";
import { useCookies } from "react-cookie";
import DataContext from "../../context/trap-context";
import { fetchData } from "../../services/traps-service";
import { ApiGatewayURL } from "@/src/data/constant/app-constant";
type AppLayoutProps = {
  children: ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const { data, setData } = useContext(DataContext);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const handleBeforeUnload = () => {
      removeCookie("fetch");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    if (!cookies["fetch"] ) {
      const fetchData1 = async () => {
        try {
          const response = await fetchData(cookies["token"]);
          setData(response);
          setCookie("fetch", 1);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData1();
    }

    const authToken = `${cookies["token"]}`;
    const source = new EventSource(
      `${ApiGatewayURL}/api/notifications/sub?token=${authToken}`
    );

    source.addEventListener("open", () => {
      console.log("SSE opened!");
    });

    source.addEventListener("message", (e) => {
      const message = JSON.parse(e.data);
      console.log(message);
      if (message.new_val != null) {
        const newData = message.new_val;
        setData((prevData: any) => [...prevData, newData]);
      } else {
        setData((prevData: any) =>
          prevData.filter((item: any) => item.id !== message.old_val.id)
        );
      }
    });

    source.addEventListener("error", (e) => {
      console.error("Error: ", e);
    });

    return () => {
      source.close();
      window.removeEventListener("beforeunload", handleBeforeUnload); // Remove the event listener
      console.log("SSE closed ");
    };
  }, []);

  return (
    <div className={"app-layout"}>
        <Layout className={"app-layout-mini-sidebar"}>
          <AppSidebar isCollapsed={isCollapsed} />
          <Layout className="app-layout-mini-sidebar-main">
            <AppHeader toggleCollapse={toggleCollapse} />
            <AppContentView>{children}</AppContentView>
          </Layout>
        </Layout>
    </div>
  );
};

export default React.memo(AppLayout);
