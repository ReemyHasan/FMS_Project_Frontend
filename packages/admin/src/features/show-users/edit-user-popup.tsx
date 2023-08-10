import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  message,
} from "antd";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import { UpdateUserInfo } from "@/src/services/user-service";
import { useCookies } from "react-cookie";
import MainUtils from "@/src/utils/main";

interface Props {
  modalProps: any;
  setModalProps: any;
}

export default function EditUserPopup({ modalProps, setModalProps }: Props) {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [cookies] = useCookies([]);
  const handleCancel = () => {
    setModalProps(false, null);
  };
  useEffect(() => {
    console.log(MainUtils.cloneObject(modalProps.data));
    setIsModalOpen(modalProps.isOpen);
    setUserData(modalProps.data);
  }, [modalProps]);

  const handleUpdate = async () => {
    try {
      const response = await UpdateUserInfo(
        userData,
        cookies["token"],
        cookies["role"]
      );

      message.success("User information updated successfully.");
      setModalProps(false, null);
    } catch (error) {
      message.error("Error updating user information.");
    }
  };

  return (
    <Modal
      title="edit-user"
      visible={isModalOpen}
      onOk={handleUpdate}
      onCancel={handleCancel}
    >
      <Row gutter={16} justify="center">
        <Col span={16}>
          <Form initialValues={userData} onFinish={handleUpdate}>
            <Form.Item label="first-name" name="fname">
              <Input
                onChange={(e) =>
                  setUserData({ ...userData, fname: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label="last-name" name="lname">
              <Input
                onChange={(e) =>
                  setUserData({ ...userData, lname: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label="username" name="username">
              <Input
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label="email" name="email" rules={[{ type: "email" }]}>
              <Input
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label={t("password")} name="password">
              <Input.Password
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label={t("gender-label")} name="gender">
              <Select onChange={(e) => setUserData({ ...userData, gender: e })}>
                <Select.Option value="male">{t("male")}</Select.Option>
                <Select.Option value="female">{t("female")}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={t("role.label")} name="role">
              <Select onChange={(e) => setUserData({ ...userData, role: e })}>
                <Select.Option value="user">{t("user")}</Select.Option>
                <Select.Option value="admin">{t("admin")}</Select.Option>
              </Select>
            </Form.Item>
            {/* <Form.Item label={t("workingDate.label")} name="workingDate" >
              <DatePicker />
            </Form.Item> */}
            <Form.Item label={t("country.label")} name="country">
              <Select
                onChange={(e) => setUserData({ ...userData, country: e })}
              >
                <Select.Option value="syria">{t("syria")}</Select.Option>
                <Select.Option value="USA">{t("USA")}</Select.Option>
                <Select.Option value="Lebanon">{t("Lebanon")}</Select.Option>{" "}
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
}
