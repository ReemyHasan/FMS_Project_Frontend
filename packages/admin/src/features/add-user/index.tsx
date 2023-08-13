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
      setLoading(true);
      const response = await Register(values, cookies["token"], cookies["role"]);
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
                label={t("email")}
                name="email"
                rules={[
                  { required: true, message: "Please enter your email." },
                  { type: 'email', message: 'Please enter a valid email address.' },
                ]}
              >
                <Input placeholder={t("email")} />
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                label={t("username")}
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
                label={t("password.label")}
                name="password"
                rules={[
                  { required: true, message: "Please enter your password." },
                ]}
              >
                <Input.Password placeholder={t("password.label")} />
              </Form.Item>
              <Row gutter={16}>
              <Col span={12}>
              <Form.Item
                label={t("gender")}
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
                label={t("role")}
                name="role"
                rules={[
                  { required: true, message: "Please select a role." },
                ]}
              >
                <Select placeholder={t("role")}>
                  <Option value="user">{t("user")}</Option>
                  <Option value="admin">{t("admin")}</Option>
                </Select>
              </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
              <Col span={12}>
              <Form.Item
                label={t("working-date")}
                name="workingDate"
                rules={[
                  { required: true, message: "Please select a working date." },
                ]}
              >
                <DatePicker placeholder={t("working-date")} />
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                label={t("country")}
                name="country"
                rules={[
                  { required: true, message: "Please select a country." },
                ]}
              >
                <Select placeholder={t("country")}>
                  <Option value="syria">{t("Syria")}</Option>
                  <Option value="USA">{t("USA")}</Option>
                  <Option value="Lebanon">{t("Lebanon")}</Option>
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
