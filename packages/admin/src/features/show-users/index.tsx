import * as React from "react";
import { useState ,useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import { getColumns } from "./columns";
import EditUserPopup from "./edit-user-popup";
import { getAllUsers, deleteUser } from "@/src/services/user-service";
import { useCookies } from "react-cookie";
import { message } from "antd";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
export default function ShowUsers() {
  const { t } = useTranslation(TranslationFiles.COMMON);
const [modalProps, setModalProps] = useState({
  isOpen: false,
  data: null,
});
const [data, setData] = useState([]);
const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
const [cookies] = useCookies([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers(cookies["token"], cookies["role"]);
        setData(response); 
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleDeleteMultiple = async () => {
    if (selectedRowKeys.length === 0) {
      message.warning("Please select at least one row to delete.");
      return;
    }

    try {
      // Delete selected rows on the server
      await Promise.all(selectedRowKeys.map((id:any) => deleteUser(id, cookies["token"], cookies["role"])));

      // After successful deletion, update the table data by filtering out the deleted records
      setData((prevData) =>
        prevData.filter((item) => !selectedRowKeys.includes(item.id))
      );

      // Clear the selectedRowKeys state after deletion
      setSelectedRowKeys([]);

      message.success("Selected rows deleted successfully.");
    } catch (error) {
      console.error("Error deleting users:", error);
      message.error("An error occurred while deleting selected rows.");
    }
  };


  return (
          <div>
                
        <div className={"moreIcon"} >
          <FmsButton borderRadius= {32} type={"danger"} onClick={handleDeleteMultiple} >{t("delete-selected")}</FmsButton>
        </div>

            <FmsTable
              title={t("users")}
              columns={getColumns(setModalProps)}
              data={data}
              rowSelection={{
                type: "checkbox",
                selectedRowKeys,
                onChange: (selectedKeys) => {
                  setSelectedRowKeys(selectedKeys);
                },
              }}
              t={t}
              setData= {setData}
              pageSizeOptions={["10", "20", "50"]}
              defaultPageSize={10}
            />
                    <EditUserPopup
          modalProps={modalProps}
          setModalProps={setModalProps}
        />
          </div>
  );
}
