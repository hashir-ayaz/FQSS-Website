import React from "react";
import axios from "axios";

function UserRegistrationForm() {
  // Add your form submission logic here
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData = {
      full_name: formData.get("fullName"), // Changed to "fullName"
      email: formData.get("email"),
      phone_number: formData.get("phone"),
      event_name: formData.get("eventName"), // The name attribute was missing
      payment_img: formData.get("payment"), // The name attribute was missing
      payment_status: "pending", // Default to "pending"
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/participants",
        postData
      );
      console.log(response.data);
      // Handle success (e.g., inform the user, clear form...)
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., inform the user...)
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            name="fullName" // The name attribute was missing
            className="block text-sm font-medium text-gray-700"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            required
            placeholder="Eg Mohammed Ali"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email" // The name attribute was
            required
            placeholder="eg. muhammad@gmail.com"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            name="phone"
            placeholder="+92 333 XXXXXXX"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="eventName"
            className="block text-sm font-medium text-gray-700"
          >
            Which Event would you like to register for? *
          </label>
          <select
            id="eventName"
            name="eventName" // This was
            required
            defaultValue=""
            className="block w-full py-2 pl-3 pr-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Choose an event</option>

            <option>Event A</option>
            <option>Event B</option>
            <option>Event C</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="payment"
            className="block text-sm font-medium text-gray-700"
          >
            Please send the amount to +92 333 XXXXXXX and upload the screenshot
            here *
          </label>
          <input
            name="payment"
            type="file"
            id="payment"
            required
            className="block w-full px-3 py-2 mt-1 text-sm text-gray-600 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        <button
          type="submit"
          className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default UserRegistrationForm;
