import * as yup from "yup";

export const productSchema = yup.object().shape({
  name_en: yup.string().required(),
  name_ar: yup.string().required(),
  categoryId: yup.number().required(),
  price: yup.number().required(),
});
