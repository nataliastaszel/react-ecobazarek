import { clsx } from "clsx";
import { HtmlHTMLAttributes } from "react";

export const HelperText = ({
  children,
  className,
  ...other
}: HtmlHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={clsx("block text-xs font-normal mt-1", className)}
      {...other}
    >
      {children}
    </span>
  );
};
