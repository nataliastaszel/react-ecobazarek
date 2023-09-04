import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import "./content.css";
import { FloatingActionButton } from "../floating-action-button/FloatingActionButton";
import { clsx } from "clsx";
import { Loader } from "../loader/Loader";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  title: string;
  isLoading?: boolean;
}

export const Content = (props: ContentProps) => {
  const { children, title, className, isLoading, ...other } = props;
  return (
    <main
      className={clsx(className, "content-container bg-ecru/75")}
      {...other}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {isLoading && (<div className="absolute top-0 bottom-0 left-0 right-0 z-10 p-1 bg-opacity-40 bg-ecru/75"><Loader/></div>)}
      {children}
      <FloatingActionButton />
    </main>
  );
};
