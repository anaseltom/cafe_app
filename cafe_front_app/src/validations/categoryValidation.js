import * as yup from "yup";

export const categorySchema = yup.object().shape({
  name_en: yup.string().required(),
  name_ar: yup.string().required(),
});
