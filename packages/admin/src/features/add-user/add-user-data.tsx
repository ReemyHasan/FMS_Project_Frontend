import { FormItemTypes } from "@/src/components/dynamic-form/dtos/form-item.dto.ts";
export const formItems = (t: Function) => {
  return [
    {
      span: 24,
      cards: [
        {
          title: t("info"),
          items: [
            {
              colSpan: 8,
              label: t("fname"),
              type: FormItemTypes.Text,
              name: "fname",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 8,
              label: t("lname"),
              type: FormItemTypes.Text,
              name: "lname",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 8,
              label: t("username"),
              type: FormItemTypes.Text,
              name: "username",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 24,
              label: t("email.label"),
              type: FormItemTypes.Text,
              name: "email",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 24,
              label: t("password"),
              type: FormItemTypes.Text,
              name: "password",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 6,
              label: t("gender-label"),
              type: FormItemTypes.Select,
              name: "gender",
              createMode: true,
              updateMode: true,
              options: [
                {
                  label: t("male"),
                  value: 0,
                },
                {
                  label: t("female"),
                  value: 1,
                },
              ],
            },
            {
              colSpan: 6,
              label: t("job-label"),
              type: FormItemTypes.Select,
              name: "role",
              createMode: true,
              updateMode: true,
              options: [
                {
                  label: t("user"),
                  value: 'user',
                },
                {
                  label: t("admin"),
                  value: 'admin',
                },
              ],
            },
            {
              colSpan: 6,
              label: t("joining-date-label"),
              type: FormItemTypes.DatePicker,
              name: "workingDate",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 6,
              label: t("country-label"),
              type: FormItemTypes.Select,
              name: "country",
              createMode: true,
              updateMode: true,
              options: [
                {
                  label: t("syria"),
                  value: 0,
                },
                {
                  label: t("others"),
                  value: 1,
                },
              ],
            },
         
          ],
        },
      ],
    },
  ];
};
