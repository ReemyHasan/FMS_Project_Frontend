import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button, message, Select, DatePicker } from "antd"; // Make sure to import the correct antd components
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import { Register } from "@/src/services/user-service";
import { useCookies } from "react-cookie";

const { Option } = Select;

const SignUpForm = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [cookies] = useCookies([]);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values:any) => {
    try {
      console.log(values);
      setLoading(true);
      await Register(values, cookies["token"], cookies["role"]);
      setLoading(false);
      message.success("User registered successfully!");
    } catch (error) {
      setLoading(false);
      console.error(error);
      message.error("Error occurred while registering user.");
    }
  };

  return (
    <div data-testid="new-stock-form">
      <Row gutter={16} justify="center">
        <Col span={16}>
          <Card title={t("add-new-user")}>
            <Form
              name="signUpForm"
              layout="vertical"
              onFinish={onFinish}
            >
              <Row gutter={16}>
                <Col span={12}>
              <Form.Item
                label={t("fname")}
                name="fname"
                rules={[
                  { required: true, message: "Please enter your first name." },
                ]}
              >
                <Input placeholder={t("fname")} />
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                label={t("lname")}
                name="lname"
                rules={[
                  { required: true, message: "Please enter your last name." },
                ]}
              >
                <Input placeholder={t("lname")} />
              </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
              <Col span={12}>
              <Form.Item
                label={t("email.label")}
                name="email"
                rules={[
                  { required: true, message: "Please enter your email." },
                  { type: 'email', message: 'Please enter a valid email address.' },
                ]}
              >
                <Input placeholder={t("email.label")} />
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                label={t("username.label")}
                name="username"
                rules={[
                  { required: true, message: "Please enter your username." },
                ]}
              >
                <Input placeholder={t("username")} />
              </Form.Item>
              </Col>
              </Row>
              <Form.Item
                label={t("password")}
                name="password"
                rules={[
                  { required: true, message: "Please enter your password." },
                ]}
              >
                <Input.Password placeholder={t("password")} />
              </Form.Item>
              <Row gutter={16}>
              <Col span={12}>
              <Form.Item
                label={t("gender-label")}
                name="gender"
                rules={[
                  { required: true, message: "Please select your gender." },
                ]}
              >
                <Select placeholder={t("gender")}>
                  <Option value="male">{t("male")}</Option>
                  <Option value="female">{t("female")}</Option>
                </Select>
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                label={t("role.label")}
                name="role"
                rules={[
                  { required: true, message: "Please select a role." },
                ]}
              >
                <Select placeholder={t("role.label")}>
                  <Option value="user">{t("user")}</Option>
                  <Option value="admin">{t("admin")}</Option>
                </Select>
              </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
              <Col span={12}>
              <Form.Item
                label={t("workingDate.label")}
                name="workingDate"
                rules={[
                  { required: true, message: "Please select a working date." },
                ]}
              >
                <DatePicker placeholder={t("workingDate.label")} />
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                label={t("country.label")}
                name="country"
                rules={[
                  { required: true, message: "Please select a country." },
                ]}
              >
                <Select placeholder={t("country.label")}>
                  <Option value="syria">{t("syria")}</Option>
                  <Option value="others">{t("others")}</Option>
                </Select>
              </Form.Item>
              </Col>
              </Row>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  {t("save")}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpForm;
