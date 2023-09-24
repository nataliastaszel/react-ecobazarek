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
  ProfilePage,
  RegistrationPage,
  LoginPage,
  AddProductPage,
} from "./pages";
import { Provider } from "react-redux";
import { STORE } from "./redux/store";

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
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/add-product",
        element: <AddProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={STORE}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
