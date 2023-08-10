import React from "react";
import Dashboard from "./components/dashboard/Dashboard";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
];

export default routes