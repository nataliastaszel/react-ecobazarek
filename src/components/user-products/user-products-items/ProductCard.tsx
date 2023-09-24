import { BanknotesIcon } from "@heroicons/react/24/outline";

interface ProductCardProps {
  image?: string;
  name: string;
  desc: string;
  price: number;
  unit: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const { image, name, desc, price, unit } = props;
  return (
    <div className="flex flex-col bg-white p-2 sm:w-[200px] rounded-2xl mx-4 sm:h-[230px] hover:cursor-pointer">
      <img>{image}</img>
      <p className="text-sm font-bold my-1">{name}</p>
      <p className="text-xs my-1">{desc}</p>
      <div className="flex my-1">
        <BanknotesIcon className="w-[15px] h-[15px]" />
        <p className="text-[10px] mx-1">{price}/</p>
        <p className="text-[10px] mx-1">{unit}</p>
      </div>
    </div>
  );
};
