import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";

const ProfileForm = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <div data-testid="new-stock-form">
    </div>
  );
};
export default ProfileForm;
