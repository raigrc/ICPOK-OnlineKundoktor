import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import TravelPlans from "./pages/TravelPlans";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";
import Login from "./auth/LoginCommuter";

import { ThemeProvider } from "@/components/theme-provider";
import LoginAdmin from "./auth/LoginAdmin";
import LoginEmployee from "./auth/LoginEmployee";
import LoginSuper from "./auth/LoginSuper";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "/login-employee",
    element: <LoginEmployee />,
  },
  {
    path: "/login-super",
    element: <LoginSuper />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-booking-bg min-h-screen">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
