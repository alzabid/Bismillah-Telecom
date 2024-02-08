import Parallax from "../Components/Parallax";
import photo from "../../public/img/business-technology.jpg";
import Heading from "../Components/Heading";
import LastSection from "../Components/LastSection";

const About = () => {
  return (
    <div>
      <main className="overflow-hidden">
        {/* parallax */}
        <Parallax
          img={photo}
          title="About Us"
          text="We are available in your doorstep."
        />

        {/* <!-- about us --> */}
        <section className=" px-6 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto" id="about-us">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20">
              {/* <!-- Left Side --> */}
              <div className="col-span-1 order-2 lg:order-1" id="mission">
                <div className="space-y-6 font-inter">
                  <p className="text-xl font-bold text-yellow-400">ABOUT US</p>
                  <h2 className="text-3xl font-bold">
                    We Provide Best Broadband &amp; Internet Service
                  </h2>
                  <p className="text-base text-slate-700">
                    Bismillah Telecom Net BD was started on 2009 with a just few
                    client and expanded to a big family of happy internet users.
                    Our packages are designed for all level of users like
                    students, job holders, residence users and corporate users
                    etc.
                  </p>
                  <p className="text-content-dark">
                    Bismillah Telecom Net BD offers an array of services with
                    high speed internet solution for corporate and home uses.
                    Our commitment and client satisfaction are the main goals.
                    As a result we have gained a moderate goodwill and
                    popularity among our users..
                  </p>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-primary-1000"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-content-dark !font-medium">
                        Home Internet
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-primary-1000"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-content-dark !font-medium">
                        Corporate Internet
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-primary-1000"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-content-dark !font-medium">
                        Bufferless Youtube
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-primary-1000"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-content-dark !font-medium">
                        Smooth Facebook Live streming
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-primary-1000"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-content-dark !font-medium">
                        99% Internet Uptime
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-primary-1000"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-content-dark !font-medium">
                        Rich FTP Servers
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-primary-1000"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-content-dark !font-medium">
                        Live Tv
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-primary-1000"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-content-dark !font-medium">
                        BDIX Connectivity
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Left Side --> */}
              <div
                className="col-span-1 relative order-1 lg:order-2"
                id="vision"
              >
                <div className="absolute -top-12 -left-10 z-10 rounded-full hidden lg:inline-block p-2 bg-white"></div>
                <img
                  className="h-auto w-full rounded-lg"
                  src="./img/family-time-happy.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- choose us --> */}
        <section className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="col-span-1 order-2 lg:order-1">
              <img
                className="h-full w-full object-cover"
                src="./img/family-using-smartphone.jpg"
                alt=""
              />
            </div>
            <div className="col-span-1 bg-gray-800 order-1 lg:order-2">
              <div className="bg-[url('./img/back.png')] bg-cover w-full h-full ">
                <div className="bg-gray-800 bg-opacity-90 h-full w-full px-4 py-14 lg:px-14 space-y-6">
                  <p className="text-xl font-bold text-yellow-500 font-inter text-anim">
                    WHY CHOOSE US
                  </p>
                  <h2 className="text-3xl !text-white font-bold">
                    We’re Connecting You To Everything That Matters
                  </h2>
                  <p className="text-base text-justify pr-10 text-gray-400">
                    Our mission lies in our brand name- we are the leaders
                    amongst the Broadband service providers in Bangladesh who
                    focus on YOU. The internet is what drives today’s society.
                    People now require high-speed internet for almost every
                    task, which is why data connectivity has become a necessity.
                    If you are looking for a reliable internet service provider
                    in Bangladesh contact YOU broadband. We offer attractive
                    packages coupled with excellent services for you.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 lg:gap-y-8">
                    <div className="col-span-1 flex gap-4 text-anim">
                      <div className="h-5 w-5 mt-1.5 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-600 relative"></div>
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-200 font-inter">
                          High Speed Connection
                        </h2>
                        <p className="text-gray-400 !font-medium font-inter">
                          We use best routing paths to provide our user's fast
                          internet connectivity{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 flex gap-4 text-anim">
                      <div className="h-5 w-5 mt-1.5 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-600 relative"></div>
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-200 font-inter">
                          User Friendly Pricing
                        </h2>
                        <p className="text-gray-400 !font-medium font-inter">
                          Our packages always comes with reasonable prices{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 flex gap-4 text-anim">
                      <div className="h-5 w-5 mt-1.5 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-600 relative"></div>
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-200 font-inter">
                          Media server
                        </h2>
                        <p className="text-gray-400 !font-medium font-inter">
                          We have Dedicated and one of the biggest FTP download
                          server.
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 flex gap-4 text-anim">
                      <div className="h-5 w-5 mt-1.5 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-600 relative"></div>
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-200 font-inter">
                          Strong Team
                        </h2>
                        <p className="text-gray-400 !font-medium font-inter">
                          We have well experienced technical team{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 flex gap-4 text-anim">
                      <div className="h-5 w-5 mt-1.5 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-600 relative"></div>
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-200 font-inter">
                          Fast Connected
                        </h2>
                        <p className="text-gray-400 !font-medium font-inter">
                          Get your connection within 1-2 hour with no connection
                          charge
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 flex gap-4 text-anim">
                      <div className="h-5 w-5 mt-1.5 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-600 relative"></div>
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-200 font-inter">
                          24X7 Support Service
                        </h2>
                        <p className="text-gray-400 !font-medium font-inter">
                          Our support team always ready to assist you with any
                          internet connectivity issue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- team --> */}
        <section className="pt-20 px-6 lg:pt-32 pb-20 lg:pb-44">
          <div className="max-w-7xl mx-auto space-y-20">
            <Heading
              title="OUR TEAM"
              head="Meet With Professional Team"
              details="We see ourselves as much more than just a ISP, but as a family
                of like-minded, kind and talented people who love to assist you."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-y-32 lg:gap-y-0 lg:gap-8">
              <div className="col-span-1 text-anim">
                <div className="space-y-4 group relative h-72 lg:h-96">
                  <div className="bg-transparent rounded-lg overflow-hidden relative z-10 before:z-10 before:content-[''] before:-bottom-full group-hover:before:bottom-0 before:left-0 before:absolute before:h-full before:w-full before:group-hover:bg-gray-800 before:group-hover:bg-opacity-50 text-center before:transition-all before:duration-500 before:ease transition-all duration-500 ease-in-out">
                    <div className="h-72 lg:h-96 w-full relative">
                      <img
                        className="h-full w-full object-cover object-center"
                        src="./img/team1.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 bg-transparent absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center transition-all duration-200 ease-in-out">
                      <ul className="flex gap-4">
                        <li>
                          <a
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                      </ul>
                    </div>
                  </div>
                  <div className="absolute -bottom-12 left-0 w-full z-10">
                    <div className="w-10/12 mx-auto px-4 py-6 bg-white rounded-lg space-y-2 shadow-lg text-center">
                      <h2 className="text-lg font-bold text-gray-600 font-inter">
                        Helen Stacey
                      </h2>
                      <p className="text-sm font-medium text-gray-500 font-inter">
                        Marketing Officer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 text-anim">
                <div className="space-y-4 group relative h-72 lg:h-96">
                  <div className="bg-transparent rounded-lg overflow-hidden relative z-10 before:z-10 before:content-[''] before:-bottom-full group-hover:before:bottom-0 before:left-0 before:absolute before:h-full before:w-full before:group-hover:bg-gray-800 before:group-hover:bg-opacity-50 text-center before:transition-all before:duration-500 before:ease transition-all duration-500 ease-in-out">
                    <div className="h-72 lg:h-96 w-full relative">
                      <img
                        className="h-full w-full object-cover object-center"
                        src="./img/team2.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 bg-transparent absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center transition-all duration-200 ease-in-out">
                      <ul className="flex gap-4">
                        <li>
                          <a
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                      </ul>
                    </div>
                  </div>
                  <div className="absolute -bottom-12 left-0 w-full z-10">
                    <div className="w-10/12 mx-auto px-4 py-6 bg-white rounded-lg space-y-2 shadow-lg text-center">
                      <h2 className="text-lg font-bold text-gray-600 font-inter">
                        Helen Stacey
                      </h2>
                      <p className="text-sm font-medium text-gray-500 font-inter">
                        Marketing Officer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 text-anim">
                <div className="space-y-4 group relative h-72 lg:h-96">
                  <div className="bg-transparent rounded-lg overflow-hidden relative z-10 before:z-10 before:content-[''] before:-bottom-full group-hover:before:bottom-0 before:left-0 before:absolute before:h-full before:w-full before:group-hover:bg-gray-800 before:group-hover:bg-opacity-50 text-center before:transition-all before:duration-500 before:ease transition-all duration-500 ease-in-out">
                    <div className="h-72 lg:h-96 w-full relative">
                      <img
                        className="h-full w-full object-cover object-center"
                        src="./img/team3.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 bg-transparent absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center transition-all duration-200 ease-in-out">
                      <ul className="flex gap-4">
                        <li>
                          <a
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            className="block h-10 w-10 p-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white transition-all duration-300"
                            href="/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 h-6"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                      </ul>
                    </div>
                  </div>
                  <div className="absolute -bottom-12 left-0 w-full z-10">
                    <div className="w-10/12 mx-auto px-4 py-6 bg-white rounded-lg space-y-2 shadow-lg text-center">
                      <h2 className="text-lg font-bold text-gray-600 font-inter">
                        Helen Stacey
                      </h2>
                      <p className="text-sm font-medium text-gray-500 font-inter">
                        Marketing Officer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LastSection />
      </main>
    </div>
  );
};

export default About;
