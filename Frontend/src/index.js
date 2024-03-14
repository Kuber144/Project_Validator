import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import CreateTests from "./components/CreateTests";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create" element={<CreateTests />} />
    </Routes>
  </Router>
);
