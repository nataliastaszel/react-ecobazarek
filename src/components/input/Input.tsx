import clsx from "clsx";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputElementProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  inputProps?: InputProps;
}

const Input = (props: InputElementProps) => {
  const { className, inputProps = {}, ...other } = props;
  return (
    <div className={clsx(className, "flex flex-col text-black")} {...other}>
      <input
        className="h-[42px] bg-ecru rounded-sm hover:bg-light-grey outline-none focus:outline-green focus:outline-2 p-2"
        {...inputProps}
      />
    </div>
  );
};

export default Input;
