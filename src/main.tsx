import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";

import { ThemeProvider } from "@/components/theme-provider";
import PassengersInfo from "./pages/PassengersInfo";
import TravelPlans from "./pages/TravelPlans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/travel-plans",
        element: <TravelPlans />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/schedules",
        element: <Schedule />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/passenger-info",
        element: <PassengersInfo />,
      },
      {
        path: "/travel-plan",
        element: <TravelPlans />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
