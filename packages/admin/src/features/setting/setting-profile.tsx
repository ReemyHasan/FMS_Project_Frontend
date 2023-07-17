import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
import { DatePicker, Input, Select } from "antd";
import { FileAddOutlined, UploadOutlined } from "@ant-design/icons";

const SettingProfileContent = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [imageSrc, setImageSrc] = useState("/images/Reem.jpg");
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
     <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                  <label htmlFor="image-upload" className="file-input-label">
                        <img
                          alt="..."
                          src={imageSrc}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                        
                        <div className="add-image-button pd-top">
                        <FmsButton 
                        type={"secondary"} 
                        className={"pd-top"}
                        size={"large"}
                        borderRadius={8}
                        onclick={
                            handleImageUpload
                        }
                        >
                        <input
                          type="file"
                          id="image-upload"
                          accept=".jpg,.jpeg,.png"
                          onChange={handleImageUpload}
                        //   className="hidden"
                        />
                        </FmsButton>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <FmsButton
                        className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="primary"
                        borderRadius="32"

                      >
                        {t("save")}
                      </FmsButton>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          
                        </span>
                        <span className="text-sm text-blueGray-400">
                         
                        </span>
                      </div>
                      <div className="pd-top mr-4 p-3 text-center">
                        <span className=" text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        <Select
                    placeholder={t("gender")}
                    //   value={""}
                      onChange={(e: any) =>
                        {}
                      }
                    />
                        </span>
                        
                      </div>
                      <div className="pd-top lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        <DatePicker 
                      placeholder={t("start-working-date")}
                      //   value={""}
                        onChange={(e: any) =>
                          {}}/>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  <Input
                  className={"med-size"}
                      placeholder={"name"}
                    //   value={""}
                      onChange={(e: any) =>
                        {}
                      }/>
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                    <Input
                    className={"med-size"}
                      placeholder={"country"}
                    //   value={""}
                      onChange={(e: any) =>
                        {}
                      }/>
                  </div>
                  
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      <Input
                      placeholder={"role"}
                    //   value={""}
                      onChange={(e: any) =>
                        {}
                      }/>
                      </p>
                      <div className="mb-2 text-lightBlue-500 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {t("description")}
                  </div>
                  <div className="mb-2 text-lightBlue-500">
                    <i className="fas fa-university mr-2 text-lg "></i>
                    <Input.TextArea
                      placeholder={"description"}
                    //   value={""}
                      onChange={(e: any) =>
                        {}
                      }/>
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
};
export default SettingProfileContent;
