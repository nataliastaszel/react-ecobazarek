import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import "./content.css";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  title: string;
}

export const Content = (props: ContentProps) => {
  const { children, title, ...other } = props;
  return (
    <main className="content-container p-5 bg-ecru" {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </main>
  );
};
