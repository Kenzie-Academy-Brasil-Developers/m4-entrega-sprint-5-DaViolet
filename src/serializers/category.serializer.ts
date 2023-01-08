import * as yup from "yup"
import { SchemaOf } from "yup"
import { ICategoryRequest } from "../interfaces/categories"

const categorySerializer: SchemaOf<ICategoryRequest> = yup.object().shape({
	name: yup.string().required()
});

const categorySerializerArray: SchemaOf<ICategoryRequest[]> = yup.array(
    categorySerializer
  );

export  {categorySerializer, categorySerializerArray}