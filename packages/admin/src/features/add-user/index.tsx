import { DynamicFormTypes } from "@/src/components/dynamic-form/dtos/dynamic-form.dto";
import DynamicForm from "@/src/components/dynamic-form";
import { formItems } from "./add-user-data";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
const SignUpForm = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <div data-testid="new-stock-form">
      <DynamicForm
        type={DynamicFormTypes.Create}
        title={t("add-new-user")}
        initialValues={{}}
        onFinish={(values) => console.log({ values })}
        formCol={formItems(t)}
      />
    </div>
  );
};
export default SignUpForm;
