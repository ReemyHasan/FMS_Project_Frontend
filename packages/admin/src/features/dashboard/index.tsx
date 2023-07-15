import React from "react";
import { Card, Col } from "antd";
import styles from "./index.module.css";
import CardLineChart from "./card-lineChart";
import CardBarChart from "./card-barChart";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import CardUsers from "./card-users";
import CardSocialTraffic from './card-socialTraffics'
import CardStats from './card-stats'
import UsersIcon from '../../components/assets/custom-ant-icons/sidebar/users-icon'
import { UsergroupAddOutlined } from "@ant-design/icons";
const DashboardComponent = () => {
    const { t } = useTranslation(TranslationFiles.COMMON);
    return (
      <>
      <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last month"
                  statIconName="group"
                  statIconColor="primary-blue-600"
                />
              </div>
              
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ADMINS"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since last month"
                  statIconName="admin"
                  statIconColor="secondary-color-yellow"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  // statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
      <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 py-4">
              <CardLineChart />
            </div>
            <div className="w-full xl:w-4/12 px-4 py-4">
              <CardBarChart />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardUsers />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardSocialTraffic />
            </div>
          </div>
        </>
        );
    };
    export default DashboardComponent;


