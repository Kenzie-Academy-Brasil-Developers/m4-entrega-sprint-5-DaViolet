import * as yup from "yup"

const addressSerializer = yup.object().shape({
  state: yup.string().max(2).notRequired(),
  zipCode: yup.string().max(8).notRequired(),
  district: yup.string().notRequired(),
  number: yup.string().notRequired(),
  city: yup.string().notRequired()
});

export default addressSerializer
