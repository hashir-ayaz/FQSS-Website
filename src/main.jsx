import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import statement

// Use createRoot for React 18+ syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {" "}
    {/* Use BrowserRouter for web applications */}
    <Routes>
      {" "}
      {/* Wrap Route components within Routes */}
      <Route path="/" element={<App />} /> {/* Correct Route usage */}
    </Routes>
  </Router>
);
