import React, {useState, useEffect} from "react";
import { Col, DatePicker, Input, Modal, Row, Select } from "antd";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
interface Props {
    modalProps: any;
  setModalProps: any;
}

export default function EditUserPopup({ modalProps, setModalProps }: Props) {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setModalProps(false,null);
  };
  useEffect(() => {
    setIsModalOpen(modalProps.isOpen);
  }, [modalProps])
  

  return (
    <Modal title="edit-user" visible={isModalOpen} onOk={handleCancel} onCancel={handleCancel}>
        <Row gutter={[12, 12]}>
        <Col span={24}>
            <Input />
            </Col>
        <Col span={24}>
            <Input />
            </Col>
        <Col span={24}>
            <Select />
            </Col>
        <Col span={24}>
            <Select />
            </Col>
        <Col span={24}>
            <Select />
            </Col>
        <Col span={24}>
            <DatePicker />
            </Col>
        <Col span={24}>
            <Input.TextArea />
            </Col>
        </Row>

    </Modal>
  );
}