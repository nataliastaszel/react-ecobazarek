import clsx from "clsx";
import { HtmlHTMLAttributes, TextareaHTMLAttributes } from "react";
import Label from "../label/Label";

export interface TextFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface TextFieldElementProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  textFieldProps?: TextFieldProps;
  labelText?: string;
  required?: boolean;
}

export const TextField = (props: TextFieldElementProps) => {
  const {
    className,
    textFieldProps = {},
    labelText,
    required = false,
    ...other
  } = props;
  return (
    <div className={clsx(className, "flex flex-col text-black")} {...other}>
      {labelText && <Label labelText={labelText} required={required} />}
      <textarea
        className={clsx(
          className,
          "flex overflow-x-hidden p-3 focus:outline-none focus:border-green focus:border-2 focus:rounded-[5px] rounded-sm hover:bg-light-grey resize-none"
        )}
        autoComplete="off"
        {...textFieldProps}
      />
    </div>
  );
};

export default TextField;
