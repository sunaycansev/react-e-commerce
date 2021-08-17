import * as Yup from "yup";

const validations = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please fill out this field as it is required."),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters long.")
    .required("Please fill out this field as it is required."),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Password confirmation must match password.")
    .required("Please fill out this field as it is required."),
  agree: Yup.bool()
    .oneOf([true], "You must accept terms of service")
    .required("Please fill out this field as it is required."),
});
export default validations;
