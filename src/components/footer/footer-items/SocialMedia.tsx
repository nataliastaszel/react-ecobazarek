import facebookIcon from "../../../assets/fb.svg";
import instagramIcon from "../../../assets/instagram.svg";
import linkedinIcon from "../../../assets/linkedin.svg";
import twitterIcon from "../../../assets/twitter.svg";
import youtubeIcon from "../../../assets/youtube.svg";

const SocialMedia = () => {
  return (
    <div className="flex flex-row space-x-7">
      <img src={facebookIcon} alt="logo" className="social-icon" />
      <img src={instagramIcon} alt="logo" className="social-icon" />
      <img src={linkedinIcon} alt="logo" className="social-icon" />
      <img src={twitterIcon} alt="logo" className="social-icon" />
      <img src={youtubeIcon} alt="logo" className="social-icon" />
    </div>
  );
};

export default SocialMedia;
