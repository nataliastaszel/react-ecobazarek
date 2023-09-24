import { Combobox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { Fragment, InputHTMLAttributes, useState } from "react";
import { HelperText } from "../helper-text/HelperText";
import Label, { LabelProps } from "../label/Label";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface AutocomplateProps<T> extends LabelProps {
  inputProps?: InputProps;
  helperText?: string;
  error?: boolean;
  items: T[];
  selected?: T | null;
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  onSelectItem?: (selected: T | null) => void;
  filterFunction?: (query: string, item: T) => boolean;
}

export const Autocomplate = <T,>(props: AutocomplateProps<T>) => {
  const {
    className,
    items,
    selected,
    getKey,
    getLabel,
    onSelectItem,
    filterFunction,
    error,
    labelText,
    required,
    helperText,
    inputProps = {},
  } = props;
  const [query, setQuery] = useState("");
  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          filterFunction ? filterFunction(query, item) : true
        );
  return (
    <Combobox value={selected} onChange={onSelectItem}>
      <div className={clsx("relative mt-1", className)}>
        <div
          className={clsx(
            "relative w-full cursor-default overflow-hidden text-left focus:outline-none",
            error && "text-red"
          )}
          {...inputProps}
        >
          <Label labelText={labelText} required={required} />
          <div className="relative w-full cursor-default overflow-hidden bg-white text-left focus:outline-none mt-1">
            <Combobox.Input
              className="min-h-[42px] w-full border-none py-2 pl-2 pr-10 leading-5 text-grey focus:ring-0"
              displayValue={(item: T | null) => (item ? getLabel(item) : "")}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-grey"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <HelperText>{helperText}</HelperText>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            {filteredItems.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-grey">
                Nothing found
              </div>
            ) : (
              filteredItems.map((item) => (
                <Combobox.Option
                  key={getKey(item)}
                  className={({ active, selected }) =>
                    clsx(
                      "relative cursor-default select-none p-2",
                      active ? "bg-green text-white" : "text-gray-900",
                      selected ? "font-medium" : "font-normal"
                    )
                  }
                  value={item}
                >
                  <span className="block truncate">{getLabel(item)}</span>
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
