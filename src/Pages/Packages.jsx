import Parallax from "../Components/Parallax";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import photo from "../../public/img/packages.jpeg";

const Packages = () => {
  return (
    <div>
      <main className="overflow-hidden bg-base-200 ">
        {/* parallax */}
        <Parallax
          img={photo}
          title="Package Plan"
          text="Pay by month or the year, and cancel at any time."
        />
        <section className="relative overflow-hidden py-28 px-6 lg:py-40">
          <div className="max-w-7xl mx-auto" id="pricing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-y-28 md:gap-y-32">
              {/* 1 */}
              <div className="col-span-1 pricing-item">
                <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
                  <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                    <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-gray-100 shadow-sm">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                        <div className="text-center space-y-2 text-white font-medium font-inter">
                          <p>UP TO</p>
                          <p className="font-black text-4xl">10</p>
                          <p>Mbps</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl uppercase text-center font-semibold text-gray-700">
                      Package-1
                    </p>
                    <h2 className="text-4xl text-primary-1000 font-extrabold font-inter">
                      ৳500
                      <span className="text-sm font-medium text-gray-500">
                        /Month
                      </span>
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          10 Mbps (2AM-8PM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          5 Mbps (8PM-2AM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          50 Mbps (Youtube Unlimited)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          FTP Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          BDIX Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Unlimited Games
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Live Tv
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          24/7 Online Support
                        </span>
                      </li>
                    </ul>
                    <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-span-1 pricing-item">
                <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
                  <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                    <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-gray-100 shadow-sm">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                        <div className="text-center space-y-2 text-white font-medium font-inter">
                          <p>UP TO</p>
                          <p className="font-black text-4xl">12</p>
                          <p>Mbps</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl uppercase text-center font-semibold text-gray-700">
                      Package-2
                    </p>
                    <h2 className="text-4xl text-primary-1000 font-extrabold font-inter">
                      ৳600
                      <span className="text-sm font-medium text-gray-500">
                        /Month
                      </span>
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          12 Mbps (2AM-8PM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          6 Mbps (8PM-2AM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Youtube Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          FTP Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          BDIX Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Unlimited Games
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Live Tv
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          24/7 Online Support
                        </span>
                      </li>
                    </ul>
                    <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-span-1 pricing-item">
                <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
                  <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                    <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-gray-100 shadow-sm">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                        <div className="text-center space-y-2 text-white font-medium font-inter">
                          <p>UP TO</p>
                          <p className="font-black text-4xl">15</p>
                          <p>Mbps</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl uppercase text-center font-semibold text-gray-700">
                      Package-3
                    </p>
                    <h2 className="text-4xl text-primary-1000 font-extrabold font-inter">
                      ৳800
                      <span className="text-sm font-medium text-gray-500">
                        /Month
                      </span>
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          15 Mbps (2AM-8PM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          7 Mbps (8PM-2AM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Youtube Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          FTP Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          BDIX Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Unlimited Games
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Live Tv
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          24/7 Online Support
                        </span>
                      </li>
                    </ul>
                    <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="col-span-1 pricing-item">
                <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
                  <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                    <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-gray-100 shadow-sm">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                        <div className="text-center space-y-2 text-white font-medium font-inter">
                          <p>UP TO</p>
                          <p className="font-black text-4xl">20</p>
                          <p>Mbps</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl uppercase text-center font-semibold text-gray-700">
                      Package-4
                    </p>
                    <h2 className="text-4xl text-primary-1000 font-extrabold font-inter">
                      ৳1000
                      <span className="text-sm font-medium text-gray-500">
                        /Month
                      </span>
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          20 Mbps (2AM-8PM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          10 Mbps (8PM-2AM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Youtube Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          FTP Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          BDIX Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Unlimited Games
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Live Tv
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          24/7 Online Support
                        </span>
                      </li>
                    </ul>
                    <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="col-span-1 pricing-item">
                <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
                  <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                    <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-gray-100 shadow-sm">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                        <div className="text-center space-y-2 text-white font-medium font-inter">
                          <p>UP TO</p>
                          <p className="font-black text-4xl">25</p>
                          <p>Mbps</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl uppercase text-center font-semibold text-gray-700">
                      Package-5
                    </p>
                    <h2 className="text-4xl text-primary-1000 font-extrabold font-inter">
                      ৳1200
                      <span className="text-sm font-medium text-gray-500">
                        /Month
                      </span>
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          25 Mbps (2AM-8PM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          12 Mbps (8PM-2AM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Youtube Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          FTP Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          BDIX Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Unlimited Games
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Live Tv
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          24/7 Online Support
                        </span>
                      </li>
                    </ul>
                    <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div className="col-span-1 pricing-item">
                <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
                  <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                    <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-gray-100 shadow-sm">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                        <div className="text-center space-y-2 text-white font-medium font-inter">
                          <p>UP TO</p>
                          <p className="font-black text-4xl">30</p>
                          <p>Mbps</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl uppercase text-center font-semibold text-gray-700">
                      Package-6
                    </p>
                    <h2 className="text-4xl text-primary-1000 font-extrabold font-inter">
                      ৳1500
                      <span className="text-sm font-medium text-gray-500">
                        /Month
                      </span>
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          30 Mbps (2AM-8PM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          15 Mbps (8PM-2AM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Youtube Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          FTP Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          BDIX Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Unlimited Games
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Live Tv
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          24/7 Online Support
                        </span>
                      </li>
                    </ul>
                    <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="col-span-1 pricing-item">
                <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
                  <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                    <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-gray-100 shadow-sm">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                        <div className="text-center space-y-2 text-white font-medium font-inter">
                          <p>UP TO</p>
                          <p className="font-black text-4xl">70</p>
                          <p>Mbps</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl uppercase text-center font-semibold text-gray-700">
                      Package-7
                    </p>
                    <h2 className="text-4xl text-primary-1000 font-extrabold font-inter">
                      ৳2000
                      <span className="text-sm font-medium text-gray-500">
                        /Month
                      </span>
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          70 Mbps (2AM-8PM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          30 Mbps (8PM-2AM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Youtube Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          FTP Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          BDIX Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Unlimited Games
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Live Tv
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          24/7 Online Support
                        </span>
                      </li>
                    </ul>
                    <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 pricing-item">
                <div className="bg-white shadow-lg rounded-lg lg:px-16 pb-10 lg:pb-16 relative">
                  <div className="space-y-6 font-inter flex flex-col items-center justify-center">
                    <div className="-mt-20 lg:-mt-16 rounded-full inline-block mx-auto p-4 bg-gray-100 shadow-sm">
                      <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-32 lg:h-40 w-32 lg:w-40 flex items-center justify-center">
                        <div className="text-center space-y-2 text-white font-medium font-inter">
                          <p>UP TO</p>
                          <p className="font-black text-4xl">80</p>
                          <p>Mbps</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl uppercase text-center font-semibold text-gray-700">
                      Package-8
                    </p>
                    <h2 className="text-4xl text-primary-1000 font-extrabold font-inter">
                      ৳2500
                      <span className="text-sm font-medium text-gray-500">
                        /Month
                      </span>
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          80 Mbps (2AM-8PM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          35 Mbps (8PM-2AM)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Youtube Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          FTP Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          BDIX Unlimited
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Unlimited Games
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          Live Tv
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoCheckmarkCircleOutline />
                        <span className="text-content-dark !font-medium">
                          24/7 Online Support
                        </span>
                      </li>
                    </ul>
                    <button className=" hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Packages;
