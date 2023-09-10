import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <>
      <HelmetProvider>
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Root;
