import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 relative">
        <div className="bg-[url('./img/back.png')] bg-cover bg-center w-full h-auto">
          <div
            className="bg-gray-800 bg-opacity-95 relative h-full w-full"
            id="footer"
          >
            <div className=" mx-20">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-16 mb-10 relative z-10">
                <div className="col-span-1 lg:col-span-2 footer-items">
                  <div className="bg-gray-600 rounded-2xl shadow-xl px-8 py-16 space-y-4 -mt-20 z-20 relative">
                    <img
                      className="max-h-[12rem] w-full"
                      src="/img/logo.png"
                      alt=""
                    />
                    <p className="text-content !text-gray-400">
                      Xplore Net BD offers an array of services with high speed
                      internet solution for corporate and home uses.
                    </p>
                    <div className="flex gap-4 text-white">
                      <MdOutlineLocationOn />
                      <p className="text-content">
                        29, Alta Plaze, House # 01,Road # 10, Dhanmondi,Dhaka
                      </p>
                    </div>
                    <div className="flex gap-4 text-white">
                      <MdOutlineEmail />
                      <p className="text-content">xplorenet1@gmail.com</p>
                    </div>
                    <div className="flex gap-4 text-white">
                      <FiPhone />
                      <p className="text-content">+8801958404404</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 lg:col-span-5 grid-cols-1 tablet:grid-cols-3 grid lg:grid-cols-4 gap-4">
                  <div className="col-span-1 py-6 lg:py-16 space-y-3 lg:space-y-6 footer-items">
                    <p className="text-lg font-bold text-white font-inter">
                      Other Pages
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          Media
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          Coverage Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          Packages
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1 py-6 lg:py-16 space-y-3 lg:space-y-6 footer-items">
                    <p className="text-lg font-bold text-white font-inter">
                      Media Servers
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          BINGE
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          FTP
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          FTP
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-white  hover:text-primary !font-medium inline-flex gap-2 items-center truncate transition-all duration-200"
                        >
                          <MdArrowForwardIos />
                          Crazyctg
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2 py-6 lg:py-16 space-y-3 lg:space-y-6 footer-items">
                    <p className="text-lg font-bold text-white font-inter">
                      Newsletter
                    </p>
                    <div className="space-y-4 lg:space-y-6">
                      <div className="w-full">
                        <label className="block relative h-10 lg:h-12 w-full lg:w-96 rounded-full bg-white overflow-hidden">
                          <input
                            type="text"
                            id="subscribe"
                            className="h-full w-full focus:outline-none focus:ring-0 border-0 pl-2 lg:pl-8 pr-24 lg:pr-40"
                            placeholder="Your Email Address"
                          />

                          <button className="absolute  top-0.5 right-0.5 bottom-0.5 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                            Subscribe
                          </button>
                        </label>
                      </div>
                      <p className="text-white -dark !font-semibold">
                        Get the latest news &amp; updates
                      </p>
                      <ul className="flex gap-2 lg:gap-6">
                        <li>
                          <a
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:text-primary hover:bg-white transition-all duration-300 hover:scale-90"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:text-primary hover:bg-white transition-all duration-300 hover:scale-90"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:text-primary hover:bg-white transition-all duration-300 hover:scale-90"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <rect
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                                rx="4"
                              ></rect>
                              <circle cx="12" cy="12" r="3"></circle>
                              <line
                                x1="16.5"
                                y1="7.5"
                                x2="16.5"
                                y2="7.501"
                              ></line>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:text-primary hover:bg-white transition-all duration-300 hover:scale-90"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <rect
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                                rx="2"
                              ></rect>
                              <line x1="8" y1="11" x2="8" y2="16"></line>
                              <line x1="8" y1="8" x2="8" y2="8.01"></line>
                              <line x1="12" y1="16" x2="12" y2="11"></line>
                              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* copy right */}
              <div className="py-6 border-t border-gray-500 flex flex-col lg:flex-row justify-between lg:items-center gap-4 footer-items">
                <div>
                  <p className="text-white">
                    XPLORENET Inertnet Service Provider
                  </p>
                </div>
                <div>
                  <p className="text-white">
                    Copyright © <span id="date"></span> All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
