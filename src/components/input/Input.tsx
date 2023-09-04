import clsx from "clsx";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputElementProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  inputProps?: InputProps;
  labelText?: string;
}

const Input = (props: InputElementProps) => {
  const { className, labelText,  inputProps = {}, ...other } = props;
  return (
    <div className={clsx(className, "flex flex-col text-black")} {...other}>
      {labelText && <label>{labelText}</label>}
      <input
        className={clsx(className, "h-[42px] bg-white rounded-sm hover:bg-light-grey outline-none focus:outline-green focus:outline-2 p-2")}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
