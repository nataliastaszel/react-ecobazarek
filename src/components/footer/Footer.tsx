import SubscriptionNewsletter from "./footer-items/SubscriptionItem";
import SocialMedia from "./footer-items/SocialMedia";
import FooterPagesLinks from "./footer-items/FooterPagesLinks";
import FootNotes from "./footer-items/FootNotes";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="mt-auto w-screen space-y-2 flex flex-col items-center bg-[#412F22]">
      <SubscriptionNewsletter />
      <SocialMedia />
      <FooterPagesLinks />
      <FootNotes />
    </footer>
  );
};
