import * as yup from 'yup'

const passwordRules = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const basicSchema = yup.object().shape({
    firstName: yup.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field").required("Required"),
    lastName: yup.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    dateOfBirth: yup.date().min("1920-01-01", "Date is too old").max("2015-01-01", "Date is too recent").required("Required"),
    password: yup.string().min(6).matches(passwordRules, {message: "Please create a strong password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Required"),
})