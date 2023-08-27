import { toast } from "react-toastify";
import { Content } from "../components";

export const HomePage = () => {
  const notify = () => toast("Wow so easy!", { type: "error" });
  return (
    <Content title="Home page">
      <button onClick={notify}>Notify!</button>
      Home page
    </Content>
  );
};