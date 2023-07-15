import React from "react";
import FmsTable from "../../../../shared-library/src/tables/fms-table";
import { DataSource } from "../show-users/data-source";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
import { useRouter } from "next/router";
// components

export default function CardUsers() {
  const Columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
  ];
  const { t } = useTranslation(TranslationFiles.COMMON);
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        {/* <div className="rounded-t mb-0 px-4 py-3 border-0"> */}
          {/* <div className="flex flex-wrap items-center"> */}
            {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Page visits
              </h3>
            </div> */}
           
          {/* </div> */}
        {/* </div> */}
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
            data={DataSource}
            pageSizeOptions={["3", "5", "7"]}
            defaultPageSize={3}
            // t={t}
            // setData={setData}
            // setColumns={setColumns}
          />
        </div>
      </div>
    </>
  );
}
