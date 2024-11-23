const yup = require("yup");

const userValidation = yup.object({
  firstname: yup
    .string()
    .trim()
    .min(4, "Should be at least 4 characters")
    .required("Firstname is required"),
  lastname: yup
    .string()
    .trim()
    .min(4, "Should be at least 4 characters")
    .required("Lastname is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(8, "Should be at least 8 characters")
    .required("Password is required"),
});

module.exports = { userValidation };
