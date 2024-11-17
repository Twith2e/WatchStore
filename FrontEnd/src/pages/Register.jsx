import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Mail,
  Person,
  Lock,
  Visibility,
  VisibilityOff,
  Cancel,
  CheckCircle,
} from "@mui/icons-material";

function Register() {
  const [isPending, setIsPending] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = (key) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the specific element’s state
    }));
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("This field is required").trim(),
      lastname: Yup.string().required("This field is required").trim(),
      email: Yup.string()
        .required("This field is required")
        .trim()
        .email("Invalid Email"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("This field is required")
        .trim(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("This field is required"),
    }),
    onSubmit: async (values) => {
      const url = "http://localhost:5000/user/register";
      setIsPending(true);
      try {
        const response = await axios.post(url, values);
        if (response) {
          toast.success(response.data.message);
          navigate("/login");
        }
      } catch (err) {
        toast.error(err.response.data.message);
      } finally {
        setIsPending(false);
      }
    },
  });

  return (
    <div className="container-fluid vh-100">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-s-12 col-10 col-md-6 col-lg-5">
          <form
            action=""
            className="border border-secondary rounded-4 py-3 px-4 mt-3 w-100"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-3">
              <h2>Register an Account</h2>
            </div>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <div className="d-flex gap-2 form-control">
                <Person />
                <input
                  className="border-none outline-none w-100"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="firstname"
                  value={formik.values.firstname}
                />
                {formik.touched.firstname ? (
                  formik.errors.firstname ? (
                    <Cancel sx={{ color: "red" }} />
                  ) : (
                    <CheckCircle sx={{ color: "green" }} />
                  )
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <div className="d-flex gap-2 form-control">
                <Person />
                <input
                  type="text"
                  className="border-none outline-none w-100"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="lastname"
                  value={formik.values.lastname}
                />
                {formik.touched.lastname ? (
                  formik.errors.lastname ? (
                    <Cancel sx={{ color: "red" }} />
                  ) : (
                    <CheckCircle sx={{ color: "green" }} />
                  )
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="d-flex gap-2 form-control">
                <Mail />
                <input
                  type="email"
                  className="outline-none border-none w-100"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                />
                {formik.touched.email ? (
                  formik.errors.email ? (
                    <Cancel sx={{ color: "red" }} />
                  ) : (
                    <CheckCircle sx={{ color: "green" }} />
                  )
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="d-flex gap-2 form-control">
                <Lock />
                <input
                  type={isClicked.element1 ? "text" : "password"}
                  className="border-none outline-none w-[100%]"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="password"
                  value={formik.values.password}
                />
                <div onClick={() => toggleVisibility("element1")}>
                  {isClicked.element1 ? <VisibilityOff /> : <Visibility />}
                </div>
              </div>

              {formik.errors.password && formik.touched.password && (
                <div className="form-text text-danger">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Repeat Password
              </label>
              <div className="d-flex gap-2 form-control">
                <Lock />
                <input
                  type={isClicked.element2 ? "text" : "password"}
                  className="border-none outline-none w-[100%]"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                />
                <div onClick={() => toggleVisibility("element2")}>
                  {isClicked.element2 ? <VisibilityOff /> : <Visibility />}
                </div>
              </div>

              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <div className="form-text text-danger">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="bg-[#283140] border-none text-white p-2"
                disabled={isPending}
                type="submit"
              >
                {isPending ? "Loading..." : "Register"}
              </button>
            </div>

            <div className="mt-3 d-flex gap-2">
              <span>Already have an account?</span>
              <Link to="/login">Login</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Register;
