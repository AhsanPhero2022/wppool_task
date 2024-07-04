import MenuItem from "../pages/MenuItem/MenuItem";
import share from "../../assets/icons/share.png";

const Navbar = () => {
  return (
    <div className="relative px-5 py-3 bg-[#2042B6] text-white">
      <div className="flex justify-between items-center">
        <div>
          <h1>navbar</h1>
        </div>
        <div className="flex items-center  justify-center gap-4">
          <div className="w-12 h-12 rounded-full btn btn-circle btn-outline text-white">
            <img className=" w-1/2 " src={share} alt="" />
          </div>
          <button className="btn  rounded-full text-white btn-outline ">
            Download the 2024 Report
          </button>
          <MenuItem />
        </div>
      </div>
      <div className="absolute top-48 space-y-10">
        <div>
          <h1 className="text-4xl font-bold">60</h1>
          <p>Companies</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">$100B</h1>
          <p>Market cap</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">3.5x</h1>
          <p>Revenue multiple</p>
        </div>
        <div className="flex ">
          <h1 className="text-4xl font-bold">60%</h1>
          <p>LTM avg. revenue growth rate</p>
        </div>
        <div className="bottom-1 lg:ms-[900px] md:ms-[500px] sm:ms-[350px] absolute  left-[100%]">
          <button className="  btn btn-circle bg-[#FFFFFF] shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 92 92"
              id="down-arrow"
            >
              <path d="M73.8 57.9l-25 24.9C48 83.6 47 84 46 84s-2-.4-2.8-1.2l-25-24.9c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0L42 70.4V12c0-2.2 1.8-4 4-4s4 1.8 4 4v58.4l18.2-18.1c1.6-1.6 4.1-1.6 5.7 0 1.5 1.5 1.5 4-.1 5.6z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
