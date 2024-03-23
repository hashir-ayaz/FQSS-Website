import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserForm = () => {
  // Formik hook for form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      eventOption: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      contactNumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .required("Required"),
      eventOption: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("http://localhost:5000/participants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // Assuming the server responds with JSON
          // const responseData = await response.json();
          alert("Participant added successfully");
          resetForm({});
        } else {
          alert(
            "An error occurred while adding a participant. Please try again."
          );
        }
      } catch (error) {
        console.error("Error adding participant:", error);
        alert(
          "An error occurred while adding a participant. Please check your network connection and try again."
        );
      }
    },
  });

  return (
    // Center the form on the page
    <div className=" bg-black opacity-90 bg-[url('../assets/Images/quran.jpg')] bg-cover bg-center h-screen flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md space-y-4"
      >
        <div className="text-center">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            className="block w-full p-2 mt-1 text-black border rounded-md shadow-sm border-gold-500 focus:ring-gold-500 focus:border-gold-500"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-sm text-red-600">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="text-center">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className="block w-full p-2 mt-1 text-black border rounded-md shadow-sm border-gold-500 focus:ring-gold-500 focus:border-gold-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="text-center">
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-white"
          >
            Contact Number
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.contactNumber}
            onBlur={formik.handleBlur}
            className="block w-full p-2 mt-1 text-black border rounded-md shadow-sm border-gold-500 focus:ring-gold-500 focus:border-gold-500"
          />
          {formik.touched.contactNumber && formik.errors.contactNumber ? (
            <div className="text-sm text-red-600">
              {formik.errors.contactNumber}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-black border border-transparent rounded-md shadow-sm bg-gold-500 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
