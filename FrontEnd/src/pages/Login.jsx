import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Lock,
  Person,
  Cancel,
  CheckCircle,
  VisibilityOff,
  Visibility,
} from "@mui/icons-material";

function Login() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("This field is required").trim(),
      password: Yup.string().required("This field is required").trim(),
    }),
    onSubmit: async (values) => {
      const url = "http://localhost:5000/user/login";
      setIsPending(true);
      try {
        const response = await axios.post(url, values);
        if (response) {
          localStorage.setItem("token", response.data.token);
          toast.success(response.data.message, { autoClose: 1500 });
          setTimeout(() => {
            navigate("/dashboard");
          }, 1700);
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      } finally {
        setIsPending(false);
      }
    },
  });

  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-5">
          <form
            action=""
            className="border border-secondary py-3 px-4 mt-3 rounded-3"
            onSubmit={Formik.handleSubmit}
          >
            <div className="mb-3">
              <h2>Login</h2>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="d-flex gap-2 form-control">
                <Person />
                <input
                  type="email"
                  className="border-none outline-none w-[100%]"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                  name="email"
                  value={Formik.values.email}
                />
                {Formik.touched.email ? (
                  Formik.errors.email ? (
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
                  type={isClicked ? "text" : "password"}
                  className="border-none outline-none w-[100%]"
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                  name="password"
                  value={Formik.values.password}
                />
                <div onClick={() => setIsClicked(!isClicked)}>
                  {isClicked ? <VisibilityOff /> : <Visibility />}
                </div>
              </div>

              {Formik.errors.password && Formik.touched.password && (
                <div className="form-text text-danger">
                  {Formik.errors.password}
                </div>
              )}
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn btn-primary"
                disabled={isPending}
                type="submit"
              >
                {isPending ? "Loading" : "Login"}
              </button>
            </div>

            <div className="mt-3 d-flex gap-2">
              <span>Don't have an account yet?</span>
              <Link to={"/"}>Create Account</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
