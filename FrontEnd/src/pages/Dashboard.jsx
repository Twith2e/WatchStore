import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import DescriptionSchema from "../custom/DescriptionSchema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const initialValues = {
  // Basic Info
  name: "",
  price: "",
  brand: "",
  category: "",

  // Product Details
  qty: "",
  weight: "",
  year: "",
  image: null,

  // Additional Info
  summary: "",
  tags: "",
  height: "",
  width: "",
  length: "",
  unit: "",
  refundable: false,
  sku: "",
  manual: "",

  // Description Sections
  description: [
    {
      heading: "",
      paragraph: "",
    },
  ],

  // Discount
  discount: "",
};

const validationSchema = DescriptionSchema();

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  console.log("1. Starting submission");
  setSubmitting(true);

  try {
    // Log the values being submitted
    console.log("2. Form values:", values);

    // Create payload
    const payload = { ...values };

    // Handle image separately if it exists
    if (values.image) {
      console.log("3. Processing image");
      const reader = new FileReader();
      payload.image = await new Promise((resolve) => {
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(values.image);
      });
    }

    console.log(
      "4. Sending request to:",
      "http://localhost:5000/product/description"
    );

    // Make the API call
    const response = await axios.post(
      "http://localhost:5000/product/description",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          // Add these headers to help debug CORS
          Accept: "application/json",
        },
      }
    );

    console.log("5. Response received:", response);

    if (response.data) {
      toast.success("Product added successfully!");
      resetForm();
    }
  } catch (error) {
    console.error("Submission error:", error);
    console.error("Error response:", error.response);
    toast.error(error.response?.data?.message || "Error submitting form");
  } finally {
    setSubmitting(false);
  }
};

const ProductForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched, isSubmitting }) => {
        return (
          <Form className="container p-4">
            <style>
              {`
                .error-message {
                  position: absolute;
                  color: #dc3545;
                  font-size: 0.8rem;
                  margin-top: 2px;
                  background: white;
                  padding: 0 4px;
                  border-radius: 2px;
                  z-index: 10;
                }
                .form-group {
                  position: relative;
                  margin-bottom: 1.5rem;
                }
              `}
            </style>

            <h1 className="text-center mb-4">Product Form</h1>

            <div className="row g-3">
              {/* First Column */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <Field
                    name="name"
                    placeholder="Enter product name"
                    type="text"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <Field
                    name="price"
                    placeholder="Enter product price"
                    type="number"
                    className={`form-control ${
                      touched.price && errors.price ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="discount" className="form-label">
                    Discount (%)
                  </label>
                  <Field
                    name="discount"
                    placeholder="Enter discount percentage"
                    type="number"
                    min="0"
                    max="100"
                    className={`form-control ${
                      touched.discount && errors.discount ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="discount"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="brand" className="form-label">
                    Brand
                  </label>
                  <Field
                    name="brand"
                    placeholder="Enter product brand"
                    type="text"
                    className={`form-control ${
                      touched.brand && errors.brand ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="brand"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <Field
                    name="category"
                    placeholder="Enter product category"
                    type="text"
                    className={`form-control ${
                      touched.category && errors.category ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>

              {/* Second Column */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="qty" className="form-label">
                    Quantity
                  </label>
                  <Field
                    name="qty"
                    placeholder="Enter product quantity"
                    type="number"
                    className={`form-control ${
                      touched.qty && errors.qty ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="qty"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="weight" className="form-label">
                    Weight
                  </label>
                  <Field
                    name="weight"
                    placeholder="Enter product weight"
                    type="number"
                    className={`form-control ${
                      touched.weight && errors.weight ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="weight"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="year" className="form-label">
                    Year
                  </label>
                  <Field
                    name="year"
                    placeholder="Enter product year"
                    type="number"
                    className={`form-control ${
                      touched.year && errors.year ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="year"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image" className="form-label">
                    Product Image
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                    }}
                  />
                </div>
              </div>

              {/* Full Width Fields */}
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="summary" className="form-label">
                    Product Summary
                  </label>
                  <Field
                    name="summary"
                    placeholder="Enter product summary"
                    as="textarea"
                    className={`form-control ${
                      touched.summary && errors.summary ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="summary"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tags" className="form-label">
                    Tags
                  </label>
                  <Field
                    name="tags"
                    placeholder="Enter product tags"
                    type="text"
                    className={`form-control ${
                      touched.tags && errors.tags ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="tags"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dimensions" className="form-label">
                    Dimensions
                  </label>
                  <div className="input-group">
                    <Field
                      name="height"
                      placeholder="Height"
                      type="number"
                      className={`form-control ${
                        touched.height && errors.height ? "is-invalid" : ""
                      }`}
                    />
                    <Field
                      name="width"
                      placeholder="Width"
                      type="number"
                      className={`form-control ${
                        touched.width && errors.width ? "is-invalid" : ""
                      }`}
                    />
                    <Field
                      name="length"
                      placeholder="Length"
                      type="number"
                      className={`form-control ${
                        touched.length && errors.length ? "is-invalid" : ""
                      }`}
                    />
                    <Field
                      name="unit"
                      placeholder="Unit"
                      type="text"
                      className={`form-control ${
                        touched.unit && errors.unit ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  <ErrorMessage
                    name="dimensions"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-check">
                  <Field
                    type="checkbox"
                    name="refundable"
                    id="refundable"
                    className="form-check-input"
                  />
                  <label htmlFor="refundable" className="form-check-label">
                    Refundable
                  </label>
                </div>
              </div>

              {/* SKU Input */}
              <div className="form-group">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  SKU
                </label>
                <Field
                  type="text"
                  name="sku"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.sku && errors.sku ? "is-invalid" : ""
                  }`}
                  placeholder="Enter product SKU"
                />
                <ErrorMessage
                  name="sku"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Manual Text Input */}
              <div className="form-group">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Product Manual
                </label>
                <Field
                  type="text"
                  name="manual"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.manual && errors.manual ? "is-invalid" : ""
                  }`}
                  placeholder="Enter manual details"
                />
                <ErrorMessage
                  name="manual"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Description Sections */}
              <div className="col-12">
                <FieldArray name="description">
                  {({ insert, remove, push }) => (
                    <div className="border p-3 rounded mb-3">
                      <h3 className="mb-3">Description Sections</h3>
                      {values.description.map((section, index) => (
                        <div key={index} className="mb-4 p-3 border rounded">
                          <div className="mb-3">
                            <label className="form-label">Heading:</label>
                            <Field
                              name={`description.${index}.heading`}
                              placeholder="Enter heading"
                              className="form-control"
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Paragraph:</label>
                            <Field
                              name={`description.${index}.paragraph`}
                              placeholder="Enter paragraph"
                              as="textarea"
                              className="form-control"
                            />
                          </div>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => remove(index)}
                          >
                            Remove Section
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => push({ heading: "", paragraph: "" })}
                      >
                        Add Section
                      </button>
                    </div>
                  )}
                </FieldArray>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
            <ToastContainer />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProductForm;
