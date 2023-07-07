import { useRouter } from "next/router"; 
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
export const Columns = [
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
    render: (text:any, record:any) => (
      <span>
        <EditButton id={record.id} />
      </span>
    ),
  },
];

const EditButton = ({ id }) => {
  const router = useRouter(); // Get the router object from useRouter

  const handleEditClick = () => {
    router.push(`/edit-user/${id}`); // Navigate to the edit page URL
  };

  return <FmsButton type = "link" onClick={handleEditClick}>Edit</FmsButton>; // Render a button with the handleEditClick function as the onClick handler
};