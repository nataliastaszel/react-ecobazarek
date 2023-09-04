import { HtmlHTMLAttributes } from "react";
import "./button.css";
import clsx from "clsx";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  disabledClass?: "disabled";
  variant?: "colored" | "basic";
}

const Button = (props: ButtonProps) => {
  const { className, variant, children, ...other } = props;
  return (
    <button className={clsx(className, variant)} {...other}>
      {children}
    </button>
  );
};

export default Button;
