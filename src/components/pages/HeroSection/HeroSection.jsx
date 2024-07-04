import bannerImage from "../../../assets/images/banner.png";

const HeroSection = () => {
  return (
    <div className="bg-[#2042B6] ">
      <div className="relative mx-auto py-8">
        <div
          className="bg-cover w-1/2 bg-center opacity-70 h-[500px]  mx-auto "
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="mt-36 absolute ">
            <p className="text-6xl  text-white font-bold text-center">
              The WPPOOL Index
            </p>
            <p className="text-white text-center my-6">
              Monitor the performance of emerging, publicly traded, financial
              technology companies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
