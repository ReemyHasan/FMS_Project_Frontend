import React, {useEffect, useState} from "react";
import CardLineChart from "./card-lineChart";
import CardBarChart from "./card-barChart";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import CardUsers from "./card-users";
import CardStats from './card-stats'
import { getAdminsCount, getUsersCount } from "@/src/services/user-service";
import {accuracy} from "@/src/services/ml-model-service"
import {getTrapsCount, getErrorTrapCount, getWarningTrapCount, getInfoTrapCount} from "@/src/services/traps-service";
import { useCookies } from "react-cookie";
const DashboardComponent = () => {
    const { t } = useTranslation(TranslationFiles.COMMON);
    const [cookies] = useCookies([]);
    const [userCount, setUserCount] = useState();
    const [adminCount, setAdminCount] = useState([]);
    const [trapCount, setTrapCount] = useState([]);
    const [errorTrapCount, setErrorTrapCount] = useState([]);
    const [warnTrapCount, setWarnTrapCount] = useState([]);
    const [infoTrapCount, setInfoTrapCount] = useState([]);
    const [accu, setAccuracy] = useState([]);
    useEffect(() => {
      async function fetchAdminCount() {
        try {
          const response1 = await getAdminsCount(cookies["token"], cookies["role"]);
          setAdminCount(response1);
        } catch (error) {
          console.log("error:"+error);
        }
      }
      async function fetchUserCount() {
        try {
          const response2 = await getUsersCount(cookies["token"], cookies["role"]);
          setUserCount(response2)
        } catch (error) {
          console.log("error:"+error);
        }
      }
      async function fetchTrapsCount() {
        try {
          const response2 = await getTrapsCount(cookies["token"]);
          setTrapCount(response2)
        } catch (error) {
          console.log("error:"+error);
        }
      }
      async function fetchErrorTrapsCount() {
        try {
          const response2 = await getErrorTrapCount(cookies["token"]);
          setErrorTrapCount(response2)
        } catch (error) {
          console.log("error:"+error);
        }
      }
      async function fetchWarnignTrapsCount() {
        try {
          const response2 = await getWarningTrapCount(cookies["token"]);
          setWarnTrapCount(response2)
        } catch (error) {
          console.log("error:"+error);
        }
      }
      async function fetchInfoTrapsCount() {
        try {
          const response2 = await getInfoTrapCount(cookies["token"]);
          setInfoTrapCount(response2)
        } catch (error) {
          console.log("error:"+error);
        }
      }
      async function fetchAccuracy() {
        try {
          const response2 = await accuracy(cookies["token"], cookies["role"]);
          setAccuracy(response2)
        } catch (error) {
          console.log("error:"+error);
        }
      }
      fetchAdminCount();
      fetchUserCount();
      fetchTrapsCount();
      fetchErrorTrapsCount();
      fetchWarnignTrapsCount();
      fetchInfoTrapsCount();
      fetchAccuracy();
    }, []);
    return (
      <>
      <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={t("traps")}
                  statTitle={trapCount !== undefined ? trapCount : "..."}
                  statArrow="up"
                  statPercent={trapCount !== undefined ? `${(errorTrapCount/(trapCount+errorTrapCount)).toFixed(2)}` : "..."}
                  statPercentColor="text-red-500"
                  statDescripiron={t("error-traps")}
                  statIconName="traps"
                  statIconColor="bg-red-600"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={t("users")}
                  statTitle={userCount !== undefined ? userCount : "..."}
                  statArrow="down"
                  statPercent={`${(userCount/(userCount+adminCount)).toFixed(2)}`}
                  statPercentColor={
                    userCount !== undefined && adminCount !== undefined
                      ? parseFloat(userCount) / (userCount + adminCount) >= 0.5
                        ? "text-emerald-500" // Set the color for percent > 0.5
                        : "text-red-500" // Set the color for percent <= 0.5
                      : "text-gray-500" // Default color if counts are not available
                  }
                  statDescripiron={t("users-in-the-system")}
                  statIconName="group"
                  statIconColor="primary-blue-600"
                />
              </div>
              
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={t("admins")}
                  statTitle={adminCount !== undefined ? adminCount : "..."}
                  statArrow="down"
                  statPercent={`${(adminCount/(userCount+adminCount)).toFixed(2)}`}
                  statPercentColor={
                    userCount !== undefined && adminCount !== undefined
                      ? parseFloat(adminCount) / (userCount + adminCount) >= 0.5
                        ? "text-emerald-500" // Set the color for percent > 0.5
                        : "text-red-500" // Set the color for percent <= 0.5
                      : "text-gray-500" // Default color if counts are not available
                  }
                  statDescripiron={t("admins-in-the-system")}
                  statIconName="admin"
                  statIconColor="secondary-color-yellow"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={t("model-performance")}
                  statTitle="Accuracy"
                  statArrow="up"
                  statPercent={`${accu}`}
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="model"
                  statIconColor="bg-emerald-500"
                />
              </div>
            </div>
      <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 py-4">
              <CardLineChart />
            </div>
            <div className="w-full xl:w-4/12 px-4 py-4">
              <CardBarChart 
              errorTrapCount = {errorTrapCount}
              warnTrapCount = {warnTrapCount}
              infoTrapCount = {infoTrapCount}
              trapCount = {trapCount}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4 shadow-2xl">
            {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"> */}
              <CardUsers />
            {/* </div> */}
           
          </div>
        </>
        );
    };
    export default DashboardComponent;


