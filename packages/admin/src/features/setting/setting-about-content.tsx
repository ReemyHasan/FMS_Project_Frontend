import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import React, { useState } from "react";
import { Alert, Input, message } from "antd";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
import { ExclamationOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import {
  UpdateAboutSettingData,
  sendEmailMessage,
} from "@/src/services/setting-service";
import MainUtils from "../../utils/main";
import { useCookies } from "react-cookie";
export default function SettingAboutContent() {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const router = useRouter();
  const [formData, setFormData] = useState({
    subject: "", //fullName
    email: "",
    body: "",
  });
  const [sendingStatus, setSendingStatus] = useState("");
  const [data, setData] = useState([]);

  const [cookies] = useCookies([]);
  async function sendMessage() {
    const response = await sendEmailMessage(formData,cookies["token"],cookies["role"]);
    if (response == true) {
      setSendingStatus("success");
    } else {
      setSendingStatus("error");
    }
  }
  async function UpdateAboutInfo() {
    for (let i = 0; i < data.length; i++) {
      if (!MainUtils.isEmptyValue( data[i].value)) {
        const response = await UpdateAboutSettingData(data[i],cookies["token"],cookies["role"]);
        if (!MainUtils.isEmptyObject(response)) {
          message.success(data[i].key+" Updated successfully");
        } else {
          message.error("error");
        }
      }
    }
  }
  const handleInputChange = (key: string, value: string) => {
    setData((prevData: any) => {
      let dataArray = Array.isArray(prevData) ? prevData : Object.values(prevData);
      const index = dataArray.findIndex((item: any) => item.key === key);
      if (index !== -1) {
        // If the object already exists, update its value property
        return [
          ...dataArray.slice(0, index),
          { ...dataArray[index], value },
          ...dataArray.slice(index + 1),
        ];
      } else {
        // Otherwise, create a new object and add it to the array
        return [
          ...dataArray,
          { key, value },
        ];
      }
    });
  };

  return (
    <>
      <main>
        <div className=" w-full px-4 max-w-full flex-grow flex-1 m-1 text-right">
          <FmsButton
            type="move"
            size="large"
            borderRadius="32"
            onClick={() => {
              UpdateAboutInfo();
            }}
          >
            {"Save".toUpperCase()}
          </FmsButton>
          <span> </span>
          <FmsButton
            type="secondary"
            size="large"
            borderRadius="32"
            onClick={() => {
              router.push("/about");
            }}
          >
            {"check-about-page".toUpperCase()}
          </FmsButton>
        </div>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
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
                  <h1 className="text-white font-semibold text-5xl">
                    <Input
                      placeholder={"h1-text"}
                      value={data.find((item) => item.key === "h1-text")?.value}
                      onChange={(e: any) =>
                        handleInputChange("h1-text", e.target.value)
                      }
                    />
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    <Input
                      placeholder={"p1-text"}
                      value={data.find((item) => item.key === "p1-text")?.value}
                      onChange={(e: any) =>
                        handleInputChange("p1-text", e.target.value)
                      }
                    />
                  </p>
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
            ></svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <ExclamationOutlined
                        style={{ fontSize: "30px", color: "#fff" }}
                        className={"ExclamationCircleOutlined "}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      <Input
                        placeholder={"red-h"}
                        value={data.find((item) => item.key === "red-h")?.value}
                        onChange={(e: any) =>
                          handleInputChange("red-h", e.target.value)
                        }
                      />
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      <Input.TextArea
                        placeholder={"red-p"}
                        value={data.find((item) => item.key === "red-p")?.value}
                      onChange={(e: any) =>
                        handleInputChange("red-p", e.target.value)
                      }
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <ExclamationOutlined
                        style={{ fontSize: "30px", color: "#fff" }}
                        className={"ExclamationCircleOutlined "}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      <Input
                        placeholder={"blue-h"}
                        value={data.find((item) => item.key === "blue-h")?.value}
                        onChange={(e: any) =>
                          handleInputChange("blue-h", e.target.value)
                        }
                      />
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      <Input.TextArea
                        placeholder={"blue-p"}
                        value={data.find((item) => item.key === "blue-p")?.value}
                        onChange={(e: any) =>
                          handleInputChange("blue-p", e.target.value)
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <ExclamationOutlined
                        style={{ fontSize: "30px", color: "#fff" }}
                        className={"ExclamationCircleOutlined "}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      <Input
                        placeholder={"green-h"}
                        value={data.find((item) => item.key === "green-h")?.value}
                        onChange={(e: any) =>
                          handleInputChange("green-h", e.target.value)
                        }
                      />
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      <Input.TextArea
                        placeholder={"green-p"}
                        value={data.find((item) => item.key === "green-p")?.value}
                        onChange={(e: any) =>
                          handleInputChange("green-p", e.target.value)
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <ExclamationOutlined
                    style={{ fontSize: "30px", color: "#000" }}
                    className={"ExclamationCircleOutlined "}
                  />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  <Input
                    placeholder={"section2-h3"}
                    value={data.find((item) => item.key === "section2-h3")?.value}
                        onChange={(e: any) =>
                          handleInputChange("section2-h3", e.target.value)
                        }
                  />
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  <Input.TextArea
                    placeholder={"section2-p"}
                    value={data.find((item) => item.key === "section2-p")?.value}
                        onChange={(e: any) =>
                          handleInputChange("section2-p", e.target.value)
                        }
                  />
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      {"top-services"}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      <Input.TextArea
                        placeholder={"topservice-p"}
                        value={data.find((item) => item.key === "topservice-p")?.value}
                        onChange={(e: any) =>
                          handleInputChange("topservice-p", e.target.value)
                        }
                      />
                    </p>
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
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <ExclamationOutlined
                      style={{ fontSize: "30px", color: "#000" }}
                      className={"ExclamationCircleOutlined "}
                    />
                  </div>
                  <h3 className="text-3xl font-semibold">
                    <Input
                      placeholder={"section3-h"}
                      value={data.find((item) => item.key === "section3-h")?.value}
                        onChange={(e: any) =>
                          handleInputChange("section3-h", e.target.value)
                        }
                    />
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    <Input.TextArea
                      placeholder={"section3-p"}
                      value={data.find((item) => item.key === "section3-p")?.value}
                        onChange={(e: any) =>
                          handleInputChange("section3-p", e.target.value)
                        }
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  <Input
                    placeholder={"Hero-title"}
                    value={data.find((item) => item.key === "Hero-title")?.value}
                    onChange={(e: any) =>
                      handleInputChange("Hero-title", e.target.value)
                    }
                  />
                </h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  <Input.TextArea
                    placeholder={"Hero-p"}
                    value={data.find((item) => item.key === "Hero-p")?.value}
                    onChange={(e: any) =>
                      handleInputChange("Hero-p", e.target.value)
                    }
                  />
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
          
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">{t("more-info").toUpperCase}</h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <ExclamationOutlined
                    style={{ fontSize: "30px", color: "#000" }}
                    className={"ExclamationCircleOutlined "}
                  />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  <Input
                    placeholder={"moreInfo-h1"}
                    value={data.find((item) => item.key === "moreInfo-h1")?.value}
                    onChange={(e: any) =>
                      handleInputChange("moreInfo-h1", e.target.value)
                    }
                  />
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  <Input.TextArea
                    placeholder={"moreInfo-p1"}
                    value={data.find((item) => item.key === "moreInfo-p1")?.value}
                    onChange={(e: any) =>
                      handleInputChange("moreInfo-p1", e.target.value)
                    }
                  />
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <ExclamationOutlined
                    style={{ fontSize: "30px", color: "#000" }}
                    className={"ExclamationCircleOutlined "}
                  />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  <Input
                    placeholder={"moreInfo-h2"}
                    value={data.find((item) => item.key === "moreInfo-h2")?.value}
                    onChange={(e: any) =>
                      handleInputChange("moreInfo-h2", e.target.value)
                    }
                  />
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  <Input.TextArea
                    placeholder={"moreInfo-p2"}
                    value={data.find((item) => item.key === "moreInfo-p2")?.value}
                    onChange={(e: any) =>
                      handleInputChange("moreInfo-p2", e.target.value)
                    }
                  />
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <ExclamationOutlined
                    style={{ fontSize: "30px", color: "#000" }}
                    className={"ExclamationCircleOutlined "}
                  />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  <Input
                    placeholder={"moreInfo-h3"}
                    value={data.find((item) => item.key === "moreInfo-h3")?.value}
                    onChange={(e: any) =>
                      handleInputChange("moreInfo-h3", e.target.value)
                    }
                  />
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  <Input.TextArea
                    placeholder={"moreInfo-p3"}
                    value={data.find((item) => item.key === "moreInfo-p3")?.value}
                    onChange={(e: any) =>
                      handleInputChange("moreInfo-p3", e.target.value)
                    }
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                      {t("full-name").toUpperCase()}
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        {t("message")}
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        value={formData.body}
                        onChange={(e) =>
                          setFormData({ ...formData, body: e.target.value })
                        }
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={sendMessage}
                      >
                        {t("send")}
                      </button>
                      <div>
                        {sendingStatus == "success" && (
                          <Alert
                            message="Message was sent successfully"
                            type="success"
                          />
                        )}
                        {sendingStatus == "error" && (
                          <Alert message="Sending errors" type="error" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
