import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userProfileActions } from "../../../redux/userProfile";
import { getUserProducts } from "../../../api";

export const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProducts = useSelector(
    (state: RootState) => state.userProfile.userProducts
  );

  useEffect(() => {
    const getAllUserProducts = async () => {
      const data = await getUserProducts().then((response) => response.data);
      dispatch(userProfileActions.setUserProducts(data));
    };
    if (userProducts.length === 0) getAllUserProducts();
  }, [userProducts.length, dispatch]);

  return (
    <>
      <div
        className="flex justify-center items-center rounded-2xl border-b-grey p-4 bg-white sm:w-[200px] sm:h-[230px] hover:cursor-pointer"
        onClick={() => navigate("/add-product")}
      >
        <PlusIcon className="w-[65px] h-[65px]" />
      </div>
      {userProducts?.map((product) => (
        <ProductCard
          name={product.name}
          desc={product.desc}
          unit={product.unit}
          price={product.price}
          key={product.id}
        />
      ))}
    </>
  );
};
