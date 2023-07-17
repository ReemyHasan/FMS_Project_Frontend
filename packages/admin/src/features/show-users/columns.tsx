import { useRouter } from "next/router"; 
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
export function getColumns(setModalProps:any) { 
  return [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Actions",
    key: "actions",
    render: (text: any, record: any) => (
      <FmsButton
        type="primary"
        onClick={() => setModalProps({ isOpen: true, data: null})}
      >
        {"edit"}
      </FmsButton>
    ),
  },
];
};