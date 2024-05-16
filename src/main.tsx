import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import TravelPlans from "./pages/TravelPlans";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";

import { ThemeProvider } from "@/components/theme-provider";

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
        path: "/rentals",
        element: <Rentals />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
