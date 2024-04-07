import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./Components/About.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import Layout from "./Components/Layout.jsx"; // Import the layout component
import HomePage from "./Components/HomePage.jsx";
import TallyForm from "./Components/TallyForm.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import DeenFest from "./Components/DeenFest.jsx";
import UserRegistrationForm from "./Components/UserRegistrationForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the top-level component
    children: [
      {
        index: true,
        element: <HomePage />, // Rendered at the root path ("/")
      },
      {
        path: "/deen-fest-registration",
        // element: <TallyForm />,
        element: <UserRegistrationForm />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/deenfest",
        element: <DeenFest />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

// Use createRoot for React 18+ syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
