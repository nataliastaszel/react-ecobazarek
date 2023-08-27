import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  title: string;
}

export const Content = (props: ContentProps) => {
  const { children, title, ...other } = props;
  return (
    <main className="p-10" {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </main>
  );
};