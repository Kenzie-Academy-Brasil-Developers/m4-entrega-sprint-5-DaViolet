import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";
import addressSerializer from "./address.serializer";

const propertySerializer: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number(),
  size: yup.number(),
  address: addressSerializer,
  categoryId: yup.string()
});

export default propertySerializer

