import clsx from "clsx";
import { LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  labelText: string;
  required?: boolean;
}

const Label = (props: LabelProps) => {
  const { className, required, labelText, ...other } = props;
  return (
    <label className={clsx(className, "text-xs mb-2 text-black")} {...other}>
      {labelText} {required && "*"}
    </label>
  );
};

export default Label;
