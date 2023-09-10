import { CategoryItem } from "../../types/types";

const CategoryCard = (props: CategoryItem) => {
  const { iconUrl, name } = props;
  return (
    <div className="flex p-2 justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white p-4 w-[160px] h-[160px] rounded-[19px]">
        <img className=" mb-2 w-16 h-16" src={iconUrl} />
        <p className=" text-black">{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
