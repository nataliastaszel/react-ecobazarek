import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface PasswordElementProps {
  isValid: boolean;
  text: string;
}

export const PasswordElement = (props: PasswordElementProps) => {
  const { isValid, text } = props;
  return (
    <div className="flex">
      {isValid ? (
        <CheckIcon className="text-green w-[16px] h-[16px] mr-1" />
      ) : (
        <XMarkIcon className="text-red w-[16px] h-[16px] mr-1" />
      )}
      <p className={`text-sm ${isValid ? "text-green" : "text-red"}`}>{text}</p>
    </div>
  );
};
