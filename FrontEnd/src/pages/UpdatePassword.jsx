import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdatePassword() {
  const { token } = useParams();
  const [isPending, setIsPending] = useState(false);

  const Formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("This field is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("This field is required"),
    }),
    onSubmit: async (values) => {
      try {
        setIsPending(true);
        const url = `http://localhost:5000/user/update-password/${token}`;
        const response = await axios.post(url, values);
        if (response) {
          toast.success(response.data.message);
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
        <div className="col-6 mx-auto">
          <div>Change Password</div>
          <form action="" onSubmit={Formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...Formik.getFieldProps("password")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                {...Formik.getFieldProps("confirmPassword")}
              />
              {Formik.touched.confirmPassword &&
              Formik.errors.confirmPassword ? (
                <div className="text-danger">
                  {Formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isPending}
            >
              {isPending ? "Updating..." : "Update Password"}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
