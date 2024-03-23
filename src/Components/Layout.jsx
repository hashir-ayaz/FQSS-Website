// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust the import path according to your project structure
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> <Footer />
      {/* This is where the matched route component will be rendered */}
    </>
  );
};

export default Layout;
