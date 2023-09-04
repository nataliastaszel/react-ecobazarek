import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import "./loader.css";

export const Loader = ({
  className,
  ...other
}: Omit<HtmlHTMLAttributes<HTMLSpanElement>, "children">) => (
  <span className={clsx(className, "loader")} {...other} />
);