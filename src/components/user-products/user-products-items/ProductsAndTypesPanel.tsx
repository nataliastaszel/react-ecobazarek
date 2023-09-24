import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Checkbox } from "./Checkbox";
export const ProductsAndTypesPanel = () => {
  return (
    <div className="mr-6 mb-8">
      <span className="p-2 bg-white text-medium-grey rounded sm:w-[249px] flex text-sm">
        <MagnifyingGlassIcon className="w-6 h-6 text-black mr-3" />
        Szukaj frazę...
      </span>
      <div className="flex flex-col">
        <p className="mt-6 font-bold text-sm mb-2">Typ</p>
        <Checkbox labelText="Owoce" />
        <Checkbox labelText="Warzywa" />
        <Checkbox labelText="Wołowina" />
        <Checkbox labelText="Wieprzowina" />
        <Checkbox labelText="Mleko i przetwory" />
        <Checkbox labelText="Destylaty" />
      </div>
      <div className="flex flex-col">
        <p className="mt-3 font-bold text-sm mb-2">Kategorie</p>
        <Checkbox labelText="Kategorie A" />
        <Checkbox labelText="Kategorie B" />
        <Checkbox labelText="Kategorie C" />
        <Checkbox labelText="Kategorie D" />
        <Checkbox labelText="Kategorie E" />
        <Checkbox labelText="Kategorie F" />
        <Checkbox labelText="Kategorie G" />
        <Checkbox labelText="Kategorie H" />
        <Checkbox labelText="Kategorie I" />
        <Checkbox labelText="Kategorie J" />
        <Checkbox labelText="Kategorie K" />
        <Checkbox labelText="Kategorie L" />
        <Checkbox labelText="Kategorie M" />
        <Checkbox labelText="Kategorie N" />
      </div>
    </div>
  );
};
