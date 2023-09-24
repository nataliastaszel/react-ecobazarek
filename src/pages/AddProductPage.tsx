import { Content } from "../components";
import { AddingProductForm } from "../components/forms/AddingProductForm";

export const AddProductPage = () => (
  <Content
    title="AddProduct page"
    className="p-5 flex flex-col justify-center items-center"
  >
    <AddingProductForm />
  </Content>
);
