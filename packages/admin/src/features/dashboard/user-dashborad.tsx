import React, {useEffect, useState} from "react";
import CardLineChart from "./card-lineChart";
import CardBarChart from "./card-barChart";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import { getAdminsCount, getUsersCount } from "@/src/services/user-service";
import {getTrapsCount, getErrorTrapCount, getWarningTrapCount, getInfoTrapCount} from "@/src/services/traps-service";
import { useCookies } from "react-cookie";
const UserDashboardComponent = () => {
    const { t } = useTranslation(TranslationFiles.COMMON);
    const [cookies] = useCookies([]);
    const [trapCount, setTrapCount] = useState([]);
    const [errorTrapCount, setErrorTrapCount] = useState([]);
    const [warnTrapCount, setWarnTrapCount] = useState([]);
    const [infoTrapCount, setInfoTrapCount] = useState([]);
    useEffect(() => {
      
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

      fetchTrapsCount();
      fetchErrorTrapsCount();
      fetchWarnignTrapsCount();
      fetchInfoTrapsCount();
    }, []);
    return (
      <>
      <div className="flex flex-wrap">
           
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

           
          </div>
        </>
        );
    };
    export default UserDashboardComponent;


