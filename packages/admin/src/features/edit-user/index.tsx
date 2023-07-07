import { useEffect, useState } from 'react';
import { DynamicFormTypes } from "@/src/components/dynamic-form/dtos/dynamic-form.dto";
import DynamicForm from "@/src/components/dynamic-form";
import { formItems } from "./add-user-data";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
const EditForm = ({ id }) => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const [initialValues, setInitialValues] = useState({});
  useEffect(() => {
    // Fetch user data from API or database
    // const fetchUser = async () => {
    //   const response = await fetch(`/api/users/${id}`);
    //   const data = await response.json();
    //   setInitialValues(data);
    // };
    // fetchUser();
  }, [id]);
  return (
    <div data-testid="new-stock-form">
      <DynamicForm
        type={DynamicFormTypes.Update}
        title={t("edit-user")}
        initialValues={{}}
        onFinish={(values) => console.log({ values })}
        formCol={formItems(t)}
      />
    </div>
  );
};
export default EditForm;
