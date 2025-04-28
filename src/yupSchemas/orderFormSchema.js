import * as yup from "yup";

const regexPhone = /^\+\d{12}$/;

export const orderFormSchema = yup.object({
    userName: yup
        .string()
        .required("Username is required")
        .min(2, "Too short"),
    tel: yup
        .string()
        .required("Phone is required")
        .matches(regexPhone, "+380123456789"),
    email: yup
        .string()
        .email("Email format is not valid"),
    calback: yup
        .array(),

});