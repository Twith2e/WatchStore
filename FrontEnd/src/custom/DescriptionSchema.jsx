import * as Yup from "yup";

function DescriptionSchema() {
  return Yup.object({
    description: Yup.array().of(
      Yup.object({
        heading: Yup.string().required("Heading is required"),
        paragraph: Yup.string().required("Paragraph is required"),
      })
    ),
    image: Yup.string().required("Image is required"),
    name: Yup.string().required("Name is required"),
    price: Yup.number().required("Price is required"),
    summary: Yup.string().required("Summary is required"),
    tags: Yup.string().required("Tags is required"),
    height: Yup.number().required("Height is required"),
    width: Yup.number().required("Width is required"),
    length: Yup.number().required("Length is required"),
    unit: Yup.string().required("Unit is required"),
    sku: Yup.string().required("SKU is required"),
    manual: Yup.string().required("Manual is required"),
    qty: Yup.number().required("Quantity is required"),
    brand: Yup.string().required("Brand is required"),
    category: Yup.string().required("Category is required"),
    year: Yup.number().required("Year is required"),
    weight: Yup.number().required("Weight is required"),
    discount: Yup.number().required("Discount is required"),
  });
}

export default DescriptionSchema;
