import "./MenuItem.css";
import share from "../../../assets/icons/share.png";

const MenuItem = () => {
  return (
    <div>
      <label className="popup">
        <input type="checkbox" />
        <div className="burger" tabIndex="0">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window  -mt-10 -me-2 px-4 py-2">
          <div className="flex justify-between  items-center align-middle">
            <div className="w-12 h-12 rounded-full bg-green-400">
              <img className=" w-1/2 ms-[10px] mt-[12px] " src={share} alt="" />
            </div>

            <button className="text-white hover:bg-blue-500 btn rounded-full bg-[#2042B6]">
              Download the 2024 Report
            </button>

            <div className="rounded-full w-12 h-12 hover:bg-gray-300 ">
              <svg
                className="text-black swap-on ms-[12px] mt-[8px] fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </div>
          </div>
          <ul>
            <li>
              <button>
                <span>The WPPOOL Index</span>
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>All Companies</span>
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>Potential Future Listings</span>
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>State of USA</span>
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>Stories & Ideas</span>
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span>WPPOOL Portfolio Companies</span>
              </button>
            </li>
            <hr />
            <li>
              <button>
                <span className="text-blue-500 text-xl hover:text-white">
                  Visit WPPOOL
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </label>
    </div>
  );
};

export default MenuItem;
