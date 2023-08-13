import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  sendFileToServer,
  feedbackReset,
  calcMetrics,
  trainModel,
} from "../../services/ml-model-service";
import MetricsPopUp from "./metrics-pop-up";
import MainUtils from "@/src/utils/main";
export default function MLContent() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [cookies] = useCookies([]);
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [modalProps, setModalProps] = useState({
    isOpen: false,
    metrics: "",
  });
  const handleFileChange = (info: any) => {
    if (info.fileList.length > 0) {
      const i = info.fileList[0].originFileObj;

      setSelectedFile(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const uploadFile = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      sendFileToServer(formData, cookies["token"], cookies["role"]);
    }
  };
  const Reset = async () => {
    feedbackReset(cookies["token"], cookies["role"]);
  };
  const calcMetric = async () => {
    const res = await calcMetrics(cookies["token"], cookies["role"]);
    if (!MainUtils.isEmptyValue(res)) {
      const resArray = res.split(",");
      return resArray;
    }
    return "";
  };
  const train = async () => {
    await trainModel(cookies["token"], cookies["role"]);
  };
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/ml-model.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl"></h1>
                  <p className="mt-4 text-lg text-blueGray-200"></p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    {/* <p className="mt-2 mb-4 text-blueGray-500"> */}
                    <Upload
                      className="font-bold hover:shadow-md m-2 mt-3 shadow text-xs rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      customRequest={() => {}}
                      beforeUpload={() => false}
                      showUploadList={false}
                      onChange={handleFileChange}
                    >
                      <Button icon={<UploadOutlined />}>
                        {t("select-file")}
                      </Button>
                    </Upload>
                    <button
                      className="move active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      size="large"
                      borderRadius="32"
                      onClick={uploadFile}
                    >
                      {t("failures-feedback")}
                    </button>
                    {/* </p> */}
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <p className="mt-2 mb-4 text-blueGray-500">
                      <button
                        className="traity active:bg-blueGray-600 uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        size="large"
                        borderRadius="32"
                        onClick={Reset}
                      >
                        {t("reset-knowledge-base")}
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <p className="mt-2 mb-4 text-blueGray-500">
                      <button
                        className="secondary active:bg-blueGray-600 uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        size="large"
                        borderRadius="32"
                        onClick={train}
                      >
                        {t("train-model")}
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full  px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <p className="mt-2 mb-4 text-blueGray-500">
                      <button
                        className="link active:bg-blueGray-600 uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        size="large"
                        borderRadius="32"
                        onClick={async () => {
                          const metrics = await calcMetric();
                          setModalProps({ isOpen: true, metrics: metrics });
                        }}
                      >
                        {t("calc-metrics")}
                      </button>
                      <MetricsPopUp
                        modalProps={modalProps}
                        setModalProps={setModalProps}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Our Machine Learning Model
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  There is a powerful machine learning model builtin within the
                  system to identify if there are faults in the network by
                  montioring certain data from edge devices in the network. It
                  classifies intances coming from devices into three classes
                  [A,D,NE]. A means there is a fault in the Access Layer of the
                  network. D means there is a fault in the Distribution Layer of
                  te netwrok. NE means there is no fault detected.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="/images/ml2.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    ></svg>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/images/ml1.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                {/* <div className="md:pr-12"> */}
                <h3 className="text-3xl font-semibold">How To Use?</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  You can view the instances and there classification by the
                  model in the Kibana Dashboard by clicking the Elastic logo on
                  the top right corner of the page. You can also give new data
                  to knowledge base of the model by uploading a csv file of the
                  following format: time1,time2,class This format means that the
                  instances that lay in the range between the timestamp time1
                  and the timestamp time2 should be classified as what the class
                  field is (A,D, or NE). After adding the information the model
                  does train automatically. Thus, there is a train model button
                  that will request the model to train on the new and the old
                  data together. You can evaluate the performance of the model
                  by clicking the calc metrics button which will trigger the
                  model to test itself on a builtin dataset and return the
                  results.
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
