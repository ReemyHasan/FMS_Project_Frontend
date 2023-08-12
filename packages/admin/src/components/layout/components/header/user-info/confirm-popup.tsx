import React, { useContext } from "react";
import { Button, Modal, Space } from "antd";
import { AuthContext } from "@/src/context/auth-context";
import { ExclamationCircleFilled } from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
const ConfirmPopup: React.FC = () => {
  
  const { t } = useTranslation(TranslationFiles.COMMON); 
  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: t("confirm-logout"),
      icon: <ExclamationCircleFilled />,
      onOk() {
        logout();
      },
      onCancel() {
      },
    });
  };

  const { logout }: any = useContext(AuthContext);
  return (
    <Space wrap>
      <div className="popup-li" onClick={showConfirm}>
        <h4>{t("logout")}</h4>
      </div>
    </Space>
  );
};

export default ConfirmPopup;
