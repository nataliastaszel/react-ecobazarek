import { Content, Video } from "../components";
import photo from "../assets/about-us-hero.png";
import cropsVideo from "../assets/crops-video.mp4";
import mainText from "./pages.json";

export const AboutUsPage = () => {
  return (
    <Content
      title="AboutUs page"
      className="flex flex-col items-center justify-center"
    >
      <img src={photo} alt="Uprawy" className="mb-10 w-3/4" />
      <h1 className="mb-4 font-bold w-3/4 text-[48px] text-brown">O NAS</h1>
      <p className="mb-4  w-3/4">{mainText.aboutUsMainText}</p>
      <p className="mb-4  w-3/4">{mainText.aboutUsMainText}</p>
      <p className="mb-4  w-3/4">{mainText.aboutUsMainText}</p>
      <h1 className="mb-4 font-bold  w-3/4 text-[48px] text-brown">
        NASZE UPRAWY Z LOTU PTAKA
      </h1>
      <Video resource={cropsVideo} datatype="video/mp4" />
    </Content>
  );
};
