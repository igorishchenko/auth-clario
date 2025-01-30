import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: Yup.string()
    .required("required")
    .min(8, "minLength")
    .max(64, "maxLength")
    .matches(/[A-Z]/, "hasUpperCase")
    .matches(/\d/, "hasNumber")
    .matches(/^\S*$/, "noSpaces"),
});
