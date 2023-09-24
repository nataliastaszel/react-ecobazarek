import photo from "../../assets/home.png";

const HomePageBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={photo}
        alt="Warzywa"
        className="mb-10 sm:w-screen sm:h-[60vh]"
      />
      <p className="absolute text-white text-center z-10 sm:text-[48px] top-[200px] text-3xl sm:top-[221px] font-extrabold drop-shadow-2xl">
        ŚWIEŻE OWOCE I WARZYWA
      </p>
      <p className="absolute text-green bg-white p-3 z-10 top-[250px] sm:top-[320px]">
        PRODUKTY
      </p>
    </div>
  );
};

export default HomePageBanner;
