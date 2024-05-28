import React from "react";
import axios from "axios";

function UserRegistrationForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        "http://localhost:5000/participants",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Form submitted successfully", response.data);
      //alert the user that the form was submitted successfully
      // alert("Form submitted successfully");
      //change button text to "Submitted"
      document.getElementById("submitButton").innerText = "Submitted";
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      //reset the form fields
      event.target.reset();
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-lg p-4 mx-auto text-white bg-black md:max-w-2xl lg:max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Full Name *"
            id="fullName"
            type="text"
            placeholder="E.g. Mohammed Ali"
          />
          <FormField
            label="Email *"
            id="email"
            name="email"
            type="email"
            placeholder="e.g. muhammad@gmail.com"
          />
          <FormField
            label="Phone Number *"
            id="phone"
            name="phone_number"
            type="tel"
            placeholder="+92 333 XXXXXXX"
          />
          <FormSelect
            label="Which Event would you like to register for? *"
            id="eventName"
            name="eventName"
          >
            <option value="">Choose an event</option>
            <option>Event A</option>
            <option>Event B</option>
            <option>Event C</option>
          </FormSelect>
          <FileField
            label="Please send the amount to +92 333 XXXXXXX and upload the screenshot here *"
            id="payment"
            name="paymentImage"
          />
          <SubmitButton id="submitButton" />
        </form>
      </div>
    </div>
  );
}

function FormField({ label, id, name = id, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required
        placeholder={placeholder}
        className="block w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

function FormSelect({ label, id, name, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <select
        id={id}
        name={name}
        required
        defaultValue=""
        className="block w-full py-2 pl-3 pr-10 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        {children}
      </select>
    </div>
  );
}

function FileField({ label, id, name }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        name={name}
        type="file"
        id={id}
        required
        className="block w-full px-3 py-2 mt-1 text-gray-300 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-golden-500 hover:bg-golden-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      id="submitButton"
    >
      Submit
    </button>
  );
}

export default UserRegistrationForm;
