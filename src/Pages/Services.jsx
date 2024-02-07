
import Parallax from "../Components/Parallax";
import photo from "../../public/img/packages.jpeg";

const Services = () => {
  return (
    <div>
      <main className="overflow-hidden">
        {/* parallax */}
        <Parallax
          img={photo}
          title="Services"
          text="We build, own, and operate the largest independent fibre-optic
                network in Dhaka Bangladesh."
        />

        <section className="relative overflow-hidden pt-10 pb-28 lg:pt-20 lg:pb-40">
          <div
            className="max-w-[1300px] mx-auto space-y-16 lg:space-y-28"
            id="services"
          >
            <div className="relative h-auto xl:h-[367px]" id="services-one">
              <div className="h-32 md:h-44 lg:h-72 w-3/5 lg:w-2/5 mx-auto bg-gray-200 rounded-xl overflow-hidden lg:absolute top-12 left-0 flex flex-col justify-center items-center">
                <img
                  className="h-full w-full"
                  src="./img/broadband.webp"
                  alt="Internet-Home"
                />
              </div>
              <div className="-mt-8 lg:-mt-0 w-full h-full lg:w-2/3 ml-auto bg-white p-6 lg:p-10 pt-16 lg:pt-10 text-center lg:text-left lg:pl-40 rounded-xl shadow-lg space-y-3 z-[-1] relative">
                <h2 className="text-xl lg:text-3xl font-medium text-gray-800">
                  Brodband <span className="text-secondary-700">Internet</span>
                </h2>
                <p className="text-base font-normal text-gray-700 text-justify lg:text-left">
                  We have been in the Internet business since very beginning.
                  From experience we know client desire service . We provide
                  brodband internet service for both home and commercial uses.
                  We make it easy to get fast and reliable connectivity for your
                  business Delivered using GPON/EPON technology. Fibre router &
                  Delivered over dedicated fibre facilities. same speed
                  uploading and downloading, No customer premise equipment
                  required. Plug us right into your gear never worry about data
                  overages Every day more and more businesses are choosing
                  Bismillah Talecom. We are dedicated to giving everyone in our
                  ever-expanding network area an experience and service they can
                  count on. It simply doesn't get better than Bismillah Talecom.
                </p>
              </div>
            </div>

            <div className="relative h-auto xl:h-[367px]" id="services-two">
              <div className="h-32 md:h-44 lg:h-72 w-3/5 lg:w-2/5 mx-auto bg-gray-200 rounded-xl overflow-hidden lg:absolute top-12 right-0 flex flex-col justify-center items-center">
                <img
                  className="h-full w-full"
                  src="./img/networking-solution.webp"
                  alt="Networking"
                />
              </div>
              <div className="-mt-8 lg:-mt-0 w-full h-full lg:w-2/3 mr-auto bg-white p-6 lg:p-10 pt-16 lg:pt-10 text-center lg:text-left lg:pr-40 rounded-xl shadow-lg space-y-3 z-[-1] relative">
                <h2 className="text-xl lg:text-3xl font-medium text-gray-800">
                  Networking{" "}
                  <span className="text-secondary-700">Solutions</span>
                </h2>
                <p className="text-base font-normal text-gray-700 text-justify lg:text-left">
                  Bismillah Talecom understands your business needs by building a robust
                  network infrastructure. A strong network infrastructure plays
                  a significant role in supporting a variety of client
                  applications in a mission critical environment across
                  verticals.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 h-6 w-6 text-green-500 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <p className="flex-1 text-base font-normal text-gray-600">
                      Routing and Switching
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 h-6 w-6 text-green-500 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <p className="flex-1 text-base font-normal text-gray-600">
                      Wireless and Mobility{" "}
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 h-6 w-6 text-green-500 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <p className="flex-1 text-base font-normal text-gray-600">
                      Data Centre networking{" "}
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 h-6 w-6 text-green-500 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <p className="flex-1 text-base font-normal text-gray-600">
                      Performance Optimization
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-auto xl:h-[367px]" id="services-three">
              <div className="h-32 md:h-44 lg:h-72 w-3/5 lg:w-2/5 mx-auto bg-gray-200 rounded-xl overflow-hidden lg:absolute top-12 left-0 flex flex-col justify-center items-center">
                <img
                  className="h-full w-full"
                  src="./img/cctv-solution.webp"
                  alt="CCTV"
                />
              </div>
              <div className="-mt-8 lg:-mt-0 w-full h-full lg:w-2/3 ml-auto bg-white p-6 lg:p-10 pt-16 lg:pt-10 text-center lg:text-left lg:pl-40 rounded-xl shadow-lg space-y-3 z-[-1] relative">
                <h2 className="text-xl lg:text-3xl font-medium text-gray-800">
                  CCTV <span className="text-secondary-700">Solutions</span>
                </h2>
                <p className="text-base font-normal text-gray-700 text-justify lg:text-left">
                  One of the most cost effective ways to provide security in the
                  workplace is with CCTV Security or Video Surveillance Systems.
                  The highly advanced technology of modern security cameras
                  allow businesses to lower cost and risk by protecting their
                  assets with continuous and seamless monitoring of their
                  facilities. These relatively inexpensive cameras have mostly
                  replaced expensive security guards while drastically
                  increasing the reliability and accountability.
                </p>
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 h-6 w-6 text-green-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <p className="flex-1 text-base font-normal text-gray-600">
                    CCTV network design
                  </p>
                </li>
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 h-6 w-6 text-green-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <p className="flex-1 text-base font-normal text-gray-600">
                    CCTV Installation & maintenance
                  </p>
                </li>
              </div>
            </div>

            <div className="relative h-auto xl:h-[367px]" id="services-four">
              <div className="h-32 md:h-44 lg:h-72 w-3/5 lg:w-2/5 mx-auto bg-gray-200 rounded-xl overflow-hidden lg:absolute top-12 right-0 flex flex-col justify-center items-center">
                <img
                  className="h-full w-full"
                  src="./img/web-solution.webp"
                  alt="Web Solution"
                />
              </div>
              <div className="-mt-8 lg:-mt-0 w-full h-full lg:w-2/3 mr-auto bg-white p-6 lg:p-10 pt-16 lg:pt-10 text-center lg:text-left lg:pr-40 rounded-xl shadow-lg space-y-3 z-[-1] relative">
                <h2 className="text-xl lg:text-3xl font-medium text-gray-800">
                  <span className="text-secondary-700">Web</span>Solution
                </h2>
                <p className="text-base font-normal text-gray-700 text-justify lg:text-left">
                  For business ,Customers expect you to have a website to find
                  more information about your business. As for you, your website
                  can help you generate business, increase brand recall value,
                  promote goodwill in front of customers and target audience, as
                  well as deliver strong marketing messages. If you require a
                  website please contact with us we will assist you to have your
                  business profile or protfolio
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
