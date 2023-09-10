import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import "./floating-action-button.css";

const FloatingActionButton = ({
  className,
  ...other
}: Omit<HtmlHTMLAttributes<HTMLSpanElement>, "children">) => {
  const handleClick = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <span
      onClick={handleClick}
      className={clsx(className, "floating-action-button")}
      {...other}
    >
      <div className="caret"></div>
    </span>
  );
};

export default FloatingActionButton;
