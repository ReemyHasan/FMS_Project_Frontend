import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
import { DatePicker, Input, Select, message } from "antd";
import { getUserInfo, UpdateUserInfo } from "@/src/services/user-service";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
const SettingProfileContent = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [data, setData] = useState([]);
  const [cookies] = useCookies([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await getUserInfo(cookies["username"], cookies["token"]);
        setData(response);
 
      } catch (error) {

      }
    }
  
    fetchUserInfo();
  }, []);
  const handleUpdate = async () => {
    try {
      const response = await UpdateUserInfo(
        data,
        cookies["token"],
        cookies["role"]
      );

      message.success("your profile information updated successfully.");
      router.push("/profile");
    } catch (error) {
      message.error("Error updating profile information.");
    }
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
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
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <FmsButton
                        className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="primary"
                        borderRadius="32"
                        onClick={handleUpdate}
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
                        <span className=" text-xl font-bold block  tracking-wide text-blueGray-600">
                        <Select 
                        value={data.gender}
                        onChange={(e) =>
                setData({ ...data, gender: e })
              }>
                <Select.Option value="male">{t("male")}</Select.Option>
                <Select.Option value="female">{t("female")}</Select.Option>
              </Select>
                        </span>
                        
                      </div>
                      <div className="pd-top lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                       {data.workingDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  <Input
                  className={"med-size"}
                      placeholder={"username"}
                      value={data.username}
              onChange={(e) =>
                setData({ ...data, username: e.target.value })
              }
            />
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                    <Input
                  className={"med-size"}
                      placeholder={"username"}
                      value={data.country}
              onChange={(e) =>
                setData({ ...data, country: e.target.value })
              }
            />
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                    
            <Input
                  className={"med-size"}
                      placeholder={"email"}
                      value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
            />
                  </div>   
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      <Input
                  className={"med-size"}
                      placeholder={"fname"}
                      value={data.fname}
              onChange={(e) =>
                setData({ ...data, fname: e.target.value })
              }
            />
            <span />
               <Input
                  className={"med-size"}
                      placeholder={"lname"}
                      value={data.lname}
              onChange={(e) =>
                setData({ ...data, lname: e.target.value })
              }
            />
                      </p>
                      <div className="mb-2 text-lightBlue-500 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {t("role")}
                  </div>
                  <div className="mb-2 text-lightBlue-500">
                    <i className="fas fa-university mr-2 text-lg "></i>
                    
                    <Select 
                       value={data.role}
                       onChange={(e) =>
                         setData({ ...data, role: e.target.value })
                       }>
                <Select.Option value="user">{t("user")}</Select.Option>
                <Select.Option value="admin">{t("admin")}</Select.Option>
              </Select>
                  
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
