import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col">
      <h1>404 Error: Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      Go Back <a href="/">Home</a>
    </div>
  );
};

export default PageNotFound;
