import FooterLinkToPage from "./FooterLinkToPage";

const FooterPagesLinks = () => {
  return (
    <div className="flex sm:flex-row flex-col mt-5 w-4/5 text-center items-center justify-center border-y border-grey p-4">
      <FooterLinkToPage to="/about-us">O nas</FooterLinkToPage>
      <FooterLinkToPage to="/products">Produkty</FooterLinkToPage>
      <FooterLinkToPage to="/contact">Kontakt</FooterLinkToPage>
      <FooterLinkToPage to="/terms-of-use">
        Warunki użytkowania
      </FooterLinkToPage>
      <FooterLinkToPage to="/privacy-policy">
        Polityka prywatności
      </FooterLinkToPage>
    </div>
  );
};

export default FooterPagesLinks;
