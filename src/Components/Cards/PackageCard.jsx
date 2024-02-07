import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Heading from "../Heading";

const PackageCard = () => {
  return (
    <section className="bg-gray-100 pt-40 lg:py-40">
      <div className="default-container" id="choose-plan">
        <Heading
          title="OUR PACKAGES"
          head="Choose Your Favorite packages"
          details="Bismillah Telecom offers everything you need to get fast internet
          speed. From broadband Internet to Networking Solution. we’ll have your
          business online in no time."
        />
        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-32 gap-32 lg:gap-8 px-6  mt-28 lg:mt-40">
          <div className="col-span-1 plan-pricing">
            <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
              <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                    <div className="text-center space-y-2 text-white font-medium font-inter">
                      <p>UP TO</p>
                      <p className="font-black text-4xl">15</p>
                      <p>Mbps</p>
                    </div>
                  </div>
                </div>
                <p className="text-xl uppercase text-center font-semibold text-gray-700">
                  Package-1
                </p>
                <h2 className="text-4xl text-pink-600 font-extrabold font-inter">
                  ৳600
                  <span className="text-sm font-medium text-gray-500">
                    /Month
                  </span>
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      15 Mbps (2AM-8PM)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      6 Mbps (8PM-2AM)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      50 Mbps (Youtube Unlimited)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      FTP Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      BDIX Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      Unlimited Games
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">Live Tv</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      24/7 Online Support
                    </span>
                  </li>
                </ul>
                <button className="lg:ml-8 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 plan-pricing">
            <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
              <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                    <div className="text-center space-y-2 text-white font-medium font-inter">
                      <p>UP TO</p>
                      <p className="font-black text-4xl">20</p>
                      <p>Mbps</p>
                    </div>
                  </div>
                </div>
                <p className="text-xl uppercase text-center font-semibold text-gray-700">
                  Package-2
                </p>
                <h2 className="text-4xl text-pink-600  font-extrabold font-inter">
                  ৳700
                  <span className="text-sm font-medium text-gray-500">
                    /Month
                  </span>
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      20 Mbps (2AM-8PM)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      7 Mbps (8PM-2AM)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      Youtube Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      FTP Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      BDIX Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      Unlimited Games
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">Live Tv</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      24/7 Online Support
                    </span>
                  </li>
                </ul>
                <button className="lg:ml-8 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 plan-pricing">
            <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
              <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                    <div className="text-center space-y-2 text-white font-medium font-inter">
                      <p>UP TO</p>
                      <p className="font-black text-4xl">30</p>
                      <p>Mbps</p>
                    </div>
                  </div>
                </div>
                <p className="text-xl uppercase text-center font-semibold text-gray-700">
                  Package-3
                </p>
                <h2 className="text-4xl text-pink-600  font-extrabold font-inter">
                  ৳800
                  <span className="text-sm font-medium text-gray-500">
                    /Month
                  </span>
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      30 Mbps (2AM-8PM)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      10 Mbps (8PM-2AM)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      Youtube Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      FTP Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      BDIX Unlimited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      Unlimited Games
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">Live Tv</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircleOutline />
                    <span className="text-gray-500  !font-medium">
                      24/7 Online Support
                    </span>
                  </li>
                </ul>
                <button className="lg:ml-8 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="lg:ml-8 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackageCard;
