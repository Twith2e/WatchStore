import { useFormik } from "formik";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Yup from "yup";
import axios from "axios";

function PasswordReset() {
  const [isPending, setIsPending] = useState(false);

  const Formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values) => {
      setIsPending(true);
      const url = "http://localhost:5000/user/reset-password";
      try {
        const response = await axios.post(url, values);
        if (response) {
          toast.success("Please Check Your Email to complete the process", {
            autoClose: 1500,
          });
        } else {
          toast.error("Failed to reset password");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setIsPending(false);
      }
    },
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>Reset Password</h1>
          <form
            onSubmit={Formik.handleSubmit}
            className="mt-3 d-flex flex-column gap-3 align-items-start"
            action=""
          >
            <div className="form-group w-100 d-flex flex-column gap-2">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                value={Formik.values.email}
                onChange={Formik.handleChange}
                placeholder="Enter your email"
                className="form-control"
                id="email"
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Reset Password"}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
