import { useState } from "react";
import { ContactForm, Content } from "../components";
import MapElement from "../components/map/MapElement";

export const ContactPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Content
      isLoading={isLoading}
      title="Contact page"
      className="p-5 flex flex-col justify-center items-center"
    >
      <h1 className="flex text-[48px] font-bold mt-9 mb-4 w-[98%] sm:w-2/3 text-brown">
        KONTAKT
      </h1>
      <MapElement onRequestLoading={setIsLoading} />
      <ContactForm />
    </Content>
  );
};
