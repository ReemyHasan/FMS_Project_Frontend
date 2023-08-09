import React, {useState, useEffect} from "react";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
import { useRouter } from "next/router";
import { getAllUsers, deleteUser } from "@/src/services/user-service";
import { useCookies } from "react-cookie";
export default function CardUsers() {
  const Columns = [
    { title: 'username', dataIndex: 'username', key: 'username' },
    { title: 'role', dataIndex: 'role', key: 'role' },
  ];
  const { t } = useTranslation(TranslationFiles.COMMON);
  const router = useRouter();
  const [data, setData] = useState([]);
const [cookies] = useCookies([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers(cookies["token"], cookies["role"]);
        setData(response); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="block w-full overflow-x-auto">
           <div className=" w-full px-4 max-w-full flex-grow flex-1 text-right">
              <FmsButton
                type="move"
                size="small"
                borderRadius="8"
                onClick={() => {
                  router.push("/users");
                }}
              >
                {"See all".toUpperCase()}
              </FmsButton>
            </div>
          <FmsTable
            title={"users"}
            columns={Columns}
            data={data}
            pageSizeOptions={["3", "5", "7"]}
            defaultPageSize={3}
            className={"dash-table"}
            scroll={{ x: false }}
          />
        </div>
      </div>
    </>
  );
}
