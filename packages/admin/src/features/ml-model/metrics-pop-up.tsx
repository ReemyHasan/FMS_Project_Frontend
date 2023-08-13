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

export default function MetricsPopUp({ modalProps, setModalProps }: Props) {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const metricsArray = Array.isArray(modalProps.metrics) ? modalProps.metrics : [];

  const [isModalOpen,setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setModalProps(false,null);
  };
  useEffect(() => {
    setIsModalOpen(modalProps.isOpen);
  }, [modalProps])
  

  return (
    <Modal 
    title="Metrics Details" 
    visible={isModalOpen} 
    onOk={handleCancel} 
    onCancel={handleCancel}
    >
     <div>
      {metricsArray.map((metric, index) => (
        <div key={index}>{metric}</div>
      ))}
    </div>
    </Modal>
  );
}