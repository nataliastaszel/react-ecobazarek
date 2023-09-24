import clsx from "clsx";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import Label from "../label/Label";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputElementProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  inputProps?: InputProps;
  labelText?: string;
  classNameLabel?: string;
  required?: boolean;
  error?: boolean;
  value?: string;
  errorHelperText?: string;
  classNameErrorHelperText?: string;
}

const Input = (props: InputElementProps) => {
  const {
    className,
    labelText,
    value,
    errorHelperText,
    classNameErrorHelperText,
    error = false,
    required = false,
    inputProps = {},
    ...other
  } = props;
  return (
    <div className={clsx(className, "flex flex-col text-black")} {...other}>
      {labelText && <Label labelText={labelText} required={required} />}
      <input
        className={clsx(
          className,
          `bg-white rounded-sm hover:bg-light-grey outline-none ${
            !error
              ? "focus:outline-green focus:outline-2"
              : "outline-red outline-2"
          } p-2`
        )}
        value={value}
        required={required}
        autoComplete="off"
        {...inputProps}
      />
      {error && errorHelperText && (
        <span
          className={clsx(
            "block text-xs text-red italic font-normal mt-1 mb-2",
            classNameErrorHelperText
          )}
        >
          {errorHelperText}
        </span>
      )}
    </div>
  );
};

export default Input;
