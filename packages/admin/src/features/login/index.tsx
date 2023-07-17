import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import Image from "next/image";
import AuthWrapper from "./auth-wrapper";
import styles from "./auth-wrapper.module.css";
import { AUTH_TOKEN } from "@/src/data/constant/app-constant";
import { useCookies } from "react-cookie";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import router from "next/router";

const Login = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [cookies, setCookies] = useCookies([AUTH_TOKEN]);

  const onFinishSend = (values: any) => {
    if(values.email=="admin@f.com"){
    setCookies(AUTH_TOKEN, values.email);
    router.push("/");
    }
    else if(values.email=="user@f.com"){
      setCookies(AUTH_TOKEN, values.email);
      router.push("/user");      
    }
  };
  return (
    <div data-testid="login-component">
      <AuthWrapper>
        <Row justify={"center"} className={styles.logoImg}>
          <Image
            src={"/images/logo.png"}
            alt="sign-in-logo"
            height={200}
            width={230}
          />
        </Row>
        <Row className={styles.signInText}>
          <h2>{t("welcome-back")}</h2>
          <p>{t("welcome-back-enter-credentials")}</p>
        </Row>
        <Row>
          <Col span={24}>
            <Form name="basic" layout="vertical" onFinish={onFinishSend}>
              <Form.Item label={t("email.label")} className={styles.formInput}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: t("email.required-message"),
                    },
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input
                    placeholder={t("email.placeholder")}
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
                <Form.Item className={styles.rememberMe}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>{t("remember-me")}</Checkbox>
                  </Form.Item>

                  <a className={styles.loginFormForgot} href="">
                    {t("forget-password")}
                  </a>
                </Form.Item>
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
