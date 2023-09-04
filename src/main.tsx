import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  ProductsPage,
  AboutUsPage,
  ContactPage,
  TermsOfUsePage,
  PrivacyPolicyPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUsePage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
