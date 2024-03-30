import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="mb-4 text-xl font-bold text-center md:text-3xl">
        404 Error: Page Not Found
      </h1>
      <p className="mb-4 text-lg text-center md:text-xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="text-lg font-bold text-blue-600 hover:text-blue-800 md:text-xl"
      >
        Go Back
      </a>
    </div>
  );
};

export default PageNotFound;
