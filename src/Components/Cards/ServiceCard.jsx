import Heading from "../Heading";

const ServiceCard = () => {
  return (
    <div className=" max-w-[1400px]  mx-auto px-6 py-20 lg:py-32">
      <div className=" space-y-10 lg:space-y-20" id="services">
        <Heading
          title="Our service"
          head="Expertise to Fuel Your Fast Internet Browsing Experience"
          details="Bismillah Telecom offers everything you need to get fast internet
          speed. From broadband Internet to Networking Solution. we’ll have your
          business online in no time."
        />
        <div className=" max-w-[1400px]  mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          {/* 1 */}
          <div className="  service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  gap-3 transition-all duration-300 group hover:bg-[#202127]">
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-20 mx-auto hover:-translate-y-1 transition-all duration-300 text-gray-700 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                >
                  <path d="M1 38h23v3H12v2h26v-2H26v-3h23V8H1v30zm2-28h44v26H3V10z" />
                </svg>
              </div>
              <div className=" flex flex-col items-center space-y-4 relative">
                <h2 className="text-xl font-medium font-inter text-gray-700 group-hover:text-white">
                  Broadband
                </h2>

                <p className="text-center text-gray-700 group-hover:text-white line-clamp-5 !mb-6">
                  We have been in the Internet business since very beginning.
                  From experience we know client desire service . We provide
                  brodband internet service for both home and commercial uses.
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-medium font-inter text-primary-1000 group-hover:text-white">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* 2 */}

          <div className="  service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  gap-3 transition-all duration-300 group hover:bg-[#202127]">
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="h-16 w-20 mx-auto group-hover:text-white hover:-translate-y-1 transition-all duration-300 text-gray-700"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 19.51L12.01 19.4989"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 8C8 3.5 16 3.5 22 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12C9 9 15 9 19 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 15.5C10.7504 14.1 13.2498 14.0996 15.5001 15.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className=" flex flex-col items-center space-y-4 relative">
                <h2 className="text-xl font-medium font-inter text-gray-700 group-hover:text-white">
                  Networking Solution's
                </h2>

                <p className="text-center text-gray-700 group-hover:text-white line-clamp-5 !mb-6">
                  BismillahNet understands your business needs by building a
                  robust network infrastructure. A strong network infrastructure
                  plays a significant role in supporting a variety of client
                  applications in a mission critical environment across
                  verticals.
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-medium font-inter text-primary-1000 group-hover:text-white">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* 3 */}

          <div className="  service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  gap-3 transition-all duration-300 group hover:bg-[#202127]">
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="h-16 w-20 mx-auto group-hover:text-white hover:-translate-y-1 transition-all duration-300 text-gray-700"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 20V9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8.5 2.5L12 6L15.5 2.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className=" flex flex-col items-center space-y-4 relative">
                <h2 className="text-xl font-medium font-inter text-gray-700 group-hover:text-white">
                  CCTV Solutions
                </h2>

                <p className="text-center text-gray-700 group-hover:text-white line-clamp-5 !mb-6">
                  One of the most cost effective ways to provide security in the
                  workplace is with CCTV Security or Video Surveillance Systems.
                  The highly advanced technology of modern security cameras
                  allow businesses to lower cost and risk by protecting their
                  assets with continuous and seamless monitoring of their
                  facilities. These relatively inexpensive cameras have mostly
                  replaced expensive security guards while drastically
                  increasing the reliability and accountability.
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-medium font-inter text-primary-1000 group-hover:text-white">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* 4 */}

          <div className="  service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white  gap-3 transition-all duration-300 group hover:bg-[#202127]">
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="h-16 w-20 mx-auto group-hover:text-white hover:-translate-y-1 transition-all duration-300"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 17.01L8.01 16.9989"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5H3.6C3.26863 5 3 5.26863 3 5.6V20.4C3 20.7314 3.26863 21 3.6 21H12.4C12.7314 21 13 20.7314 13 20.4V16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3L16 13"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 5L13 11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 7L22 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 7L10 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 4L19 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className=" flex flex-col items-center space-y-4 relative">
                <h2 className="text-xl font-medium font-inter text-gray-700 group-hover:text-white">
                  Web Solution
                </h2>

                <p className="text-center text-gray-700 group-hover:text-white line-clamp-5 !mb-6">
                  For business ,Customers expect you to have a website to find
                  more information about your business. As for you, your website
                  can help you generate business, increase brand recall value,
                  promote goodwill in front of customers and target audience, as
                  well as deliver strong marketing messages. If you require a
                  website please contact with us we will assist you to have your
                  business profile or protfolio
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-medium font-inter text-primary-1000 group-hover:text-white">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
