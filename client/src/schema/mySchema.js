import * as yup from "yup";

const passwordSchema =
  /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
const passwordError =
  "eight characters minimum \nonespecialcharacter(e.g !,%,@,$,#,^, . , ...\none number\none uppercase character";

export const mySchema = yup.object().shape({
  firstName: yup.string().min(5, "must be at least 5 characters").required(),
  lastName: yup.string().min(5, "must be at least 5 characters").required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .matches(passwordSchema, { message: passwordError })
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

const passwordErrorsArray = passwordError.split("\n");

export const passwordErros = passwordErrorsArray.map((value, index) => {
  return (
    <span key={index}>
      ❌{value} <br />
    </span>
  );
});
