import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import FloatingActionButton from "../floating-action-button/FloatingActionButton";
import { clsx } from "clsx";
import Loader from "../loader/Loader";

interface ContentProps extends HTMLAttributes<HTMLElement> {
  title: string;
  isLoading?: boolean;
}

export const Content = (props: ContentProps) => {
  const { children, title, isLoading, className, ...other } = props;
  return (
    <main
      className={clsx(className, "content-container bg-ecru/75")}
      {...other}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {isLoading && (
        <div className=" absolute sm:top-[64px] top-0 h-[calc(100vh-160px)]  w-screen z-[9999] p-1 bg-opacity-40 bg-ecru/75">
          <Loader />
        </div>
      )}
      {children}
      <FloatingActionButton />
    </main>
  );
};
