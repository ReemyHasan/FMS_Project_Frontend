import React, {useState, useEffect} from "react";
import { Modal } from "antd";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";

interface Props {
    modalProps: any;
  setModalProps: any;
}

export default function ShowDetailsPopup({ modalProps, setModalProps }: Props) {
  const { t } = useTranslation(TranslationFiles.COMMON);

  const [variableBinding,setVariableBinding] = useState(null);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setModalProps(false,null);
  };
  useEffect(() => {
    setVariableBinding(modalProps.variableBinding);
    setIsModalOpen(modalProps.isOpen);
  }, [modalProps])
  

  return (
    <Modal title="Trap Details" visible={isModalOpen} onOk={handleCancel} onCancel={handleCancel}>
      <div>
        {variableBinding &&
          variableBinding.map((item: any, index: number) => (
            <div key={index}>
              <span>{item.oid}</span>: <span>{item.value}</span>
            </div>
          ))}
      </div>
    </Modal>
  );
}