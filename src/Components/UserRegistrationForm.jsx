import React from "react";

function UserRegistrationForm() {
  // Add your form submission logic here
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data
  };

  return (
    <div className="max-w-md p-4 mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
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
            placeholder="+92 333 XXXXXXX"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="event"
            className="block text-sm font-medium text-gray-700"
          >
            Which Event would you like to register for? *
          </label>
          <select
            id="event"
            required
            className="block w-full py-2 pl-3 pr-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option selected>Choose an event</option>
            {/* Replace these options with real event data */}
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
