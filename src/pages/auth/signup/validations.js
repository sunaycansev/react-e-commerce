import * as Yup from "yup";

const validations = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli e mail gir reyiz")
    .required("zorunlu alan"),
  password: Yup.string()
    .min(8, "şifre en az 8 karakter")
    .required("zorunlu alan"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "parolalar uyuşmuyor")
    .required(),
  agree: Yup.bool().oneOf([true], "koşulları kabul et ").required(),
});
export default validations;
