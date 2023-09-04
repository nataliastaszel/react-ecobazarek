import { Content } from "../components";
import Button from "../components/button/Button";
import Input from "../components/input/Input";

export const ContactPage = () => {
  return (
    <Content title="Contact page" className="p-5 flex flex-col justify-center items-center">
      <h1 className="text-[48px] font-bold mt-9 mb-4 w-3/4">KONTAKT</h1>
      <p className="font-bold text-xl w-3/4">NAPISZ WIADOMOŚĆ</p>
      <Input className="p-2" />
      <Input className="p-2" />
      <Input className="p-2" />
      <Input className="p-2" />
      <Input className="p-2" />
      <Button className="p-2" />
      <Button className="p-2" />
    </Content>
  );
};
