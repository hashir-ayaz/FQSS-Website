import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserForm from "./Components/UserForm.jsx";
import About from "./Components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "deen-fest-registration",
    element: <UserForm />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

// Use createRoot for React 18+ syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
