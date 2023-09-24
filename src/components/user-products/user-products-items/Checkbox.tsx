import { InputHTMLAttributes } from "react";
import "./checkbox.css";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { labelText } = props;
  return (
    <>
      <div className="block">
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox-round w-4 h-4 my-3"
        />
        <label className=" text-sm ml-3 align-middle">{labelText}</label>
      </div>
    </>
  );
};
