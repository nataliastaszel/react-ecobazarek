import { Categories, Content } from "../components";
import { useState } from "react";
import HomePageBanner from "../components/home-page-banner/HomePageBanner";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Content
      isLoading={isLoading}
      title="Home page"
      className="flex flex-col items-center justify-center"
    >
      <HomePageBanner />
      <Categories onRequestLoading={setIsLoading} />
    </Content>
  );
};
