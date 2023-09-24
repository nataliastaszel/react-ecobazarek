import { ProductsAndTypesPanel } from "./user-products-items/ProductsAndTypesPanel";
import { Products } from "./user-products-items/Products";

export const UserProducts = () => {
  return (
    <div className="flex">
      <ProductsAndTypesPanel/>
      <Products />
    </div>
  );
};
