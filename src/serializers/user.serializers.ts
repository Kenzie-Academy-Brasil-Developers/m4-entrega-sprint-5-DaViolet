import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdateRequest,
  IUserLogin
} from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required()
});

const userUpdateSerializer: SchemaOf<IUserUpdateRequest> = yup.object().shape({
  email: yup.string().email(),
  name: yup.string(),
  password: yup.string(),
});

const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired()
});

const userWithoutPasswordSerializer: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    isAdm: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    isActive: yup.boolean().notRequired(),
  });

  const userWithoutPasswordSerializerArray: SchemaOf<IUserResponse[]> = yup.array(
    userWithoutPasswordSerializer
  );

export { userSerializer, userUpdateSerializer, userWithoutPasswordSerializer, userWithoutPasswordSerializerArray, userLoginSerializer };
