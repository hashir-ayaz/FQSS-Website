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
      event_name: formData.get("eventName"), // Corrected attribute, previously missing
      // payment_img: formData.get("payment"), // Corrected attribute, previously missing
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
    <div className="max-w-md p-4 mx-auto text-white bg-black">
      {" "}
      {/* Changed to dark background and white text */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            name="fullName" // Corrected missing attribute
            className="block text-sm font-medium text-gray-300" // Changed label color to lighter grey for visibility
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            required
            placeholder="E.g. Mohammed Ali"
            className="block w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" // Adjusted styles for dark mode
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300" // Changed label color to lighter grey for visibility
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email" // Corrected missing attribute
            required
            placeholder="e.g. muhammad@gmail.com"
            className="block w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" // Adjusted styles for dark mode
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300" // Changed label color to lighter grey for visibility
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            name="phone"
            placeholder="+92 333 XXXXXXX"
            className="block w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" // Adjusted styles for dark mode
          />
        </div>

        <div>
          <label
            htmlFor="eventName"
            className="block text-sm font-medium text-gray-300" // Changed label color to lighter grey for visibility
          >
            Which Event would you like to register for? *
          </label>
          <select
            id="eventName"
            name="eventName" // Corrected missing attribute
            required
            defaultValue=""
            className="block w-full py-2 pl-3 pr-10 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" // Adjusted styles for dark mode
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
            className="block text-sm font-medium text-gray-300" // Changed label color to lighter grey for visibility
          >
            Please send the amount to +92 333 XXXXXXX and upload the screenshot
            here *
          </label>
          <input
            name="payment"
            type="file"
            id="payment"
            required
            className="block w-full px-3 py-2 mt-1 text-gray-300 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" // Adjusted styles for dark mode and file input styling
          />
        </div>

        <button
          type="submit"
          className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-golden-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default UserRegistrationForm;
