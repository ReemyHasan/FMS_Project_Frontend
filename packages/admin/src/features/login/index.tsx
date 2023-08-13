import React, { useEffect , useState} from "react";
import { Button, Checkbox, Col, Form, Input, Row, message } from "antd";
import Image from "next/image";
import AuthWrapper from "./auth-wrapper";
import styles from "./auth-wrapper.module.css";
import { useCookies } from "react-cookie";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import router from "next/router";

import {
  login, getUserInfo
} from "@/src/services/user-service";
import MainUtils from "@/src/utils/main";

const Login = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  async function UserInfo(data:any,token:any) {
    const response = await getUserInfo(data,token);
    return response;
  }
  async function onFinishSend (values: any){
    const response = await login(values);
    if(!MainUtils.isEmptyObject( response)){
      const info = await UserInfo(values.username, response.data);

      setCookie("token", response.data); 
      setCookie("role", info.role);
      setCookie("username", info.username);
      setCookie("startTime", Date.now());
      if(info.role=="admin"){
      router.push("/");
      }
      else if (info.role=="user"){
        router.push("/user/landing");
      }
      message.success("successfully authenticated!!");
    }
    else{
      message.error("credentials are not correct");
    }
  };

  // const removeCookieAfterOneHour = async () =>  {
  //   removeCookie("role", { });
  //   removeCookie("token", { });
  //   removeCookie("username", { });
  //   removeCookie("fetch", { });
  //   removeCookie("startTime", { });
  //   window.location.href = "/sign-in";
  // };

  // useEffect(() => {
  //   const now = Date.now();
  //   const end = cookies["startTime"] + 60000;
  //   const timer = end - now;  
  //   const timeout = setTimeout(() => {
  //     removeCookieAfterOneHour();
  //   }, timer
  //   );
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);
  return (
    <div data-testid="login-component">
      <AuthWrapper>
        <Row justify={"center"} className={styles.logoImg}>
          <Image
            src={"/images/logo.svg"}
            alt="sign-in-logo"
            height={200}
            width={200}
          />
        </Row>
        <Row className={styles.signInText}>
          {/* <h2>{t("welcome-back")}</h2> */}
          <p>{t("welcome-back-enter-credentials")}</p>
        </Row>
        <Row>
          <Col span={24}>
            <Form name="basic" layout="vertical" onFinish={onFinishSend}>
              <Form.Item label={t("username")} className={styles.formInput}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: t("required-message"),
                    },
                    {
                      type:"string",
                    },
                  ]}
                >
                  <Input
                    placeholder={t("placeholder")}
                    data-testid="email"
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label={t("password.label")}
                className={styles.formInput}
              >
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: t("password.required-message") },
                  ]}
                >
                  <Input.Password
                    placeholder={t("password.placeholder")}
                    data-testid="password"
                  />
                </Form.Item>
              </Form.Item>
              <div>
              </div>
              <Button
                data-testid="submit-button"
                block
                type="primary"
                htmlType="submit"
                className={styles.signBtn}
              >
                {t("sign-in")}
              </Button>
            </Form>
          </Col>
        </Row>
      </AuthWrapper>
    </div>
  );
};
export default Login;
