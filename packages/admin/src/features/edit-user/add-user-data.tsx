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
              colSpan: 12,
              label: t("fname"),
              type: FormItemTypes.Text,
              name: "first-name",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 12,
              label: t("lname"),
              type: FormItemTypes.Text,
              name: "last-name",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 12,
              label: t("email.label"),
              type: FormItemTypes.Text,
              name: "email",
              createMode: true,
              updateMode: true,
            },
            {
              colSpan: 12,
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
              colSpan: 12,
              label: t("job-label"),
              type: FormItemTypes.Select,
              name: "Job",
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
              colSpan: 12,
              label: t("joining-date-label"),
              type: FormItemTypes.DatePicker,
              name: "ReceivedDate",
              createMode: true,
              updateMode: true,
            },
          ],
        },
      ],
    },
  ];
};
