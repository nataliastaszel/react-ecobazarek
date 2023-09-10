import { ButtonHTMLAttributes } from "react";
import "./button.css";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  disabledClass?: "disabled";
  variant?: "colored" | "basic";
  buttonText?: string;
}

const Button = (props: ButtonProps) => {
  const { className, variant, buttonText, children, ...other } = props;
  return (
    <button className={clsx(className, variant)} {...other}>
      {children} {buttonText}
    </button>
  );
};

export default Button;
