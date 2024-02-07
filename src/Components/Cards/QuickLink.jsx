import Heading from "../Heading";

const QuickLink = () => {
  return (
    <div className="bg-gray-100">
      <div className="  max-w-7xl  mx-auto px-6">
        <Heading title="Quick Links" />
        <div className=" pb-28 pt-28 lg:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 lg:h-[360px]">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden quick-links-items">
              <img
                src="./img/how-to-pay.jpg"
                alt=""
                className="h-auto max-h-72 w-auto max-w-full mx-auto"
              />
              <a href="https://xplorenetbd.com/payment">
                <div className="bg-rose-100 px-8 py-6 text-gray-600 hover:text-rose-500 ">
                  <h1 className="text-base md:text-xl font-semibold text-center transition-all duration-300">
                    {" "}
                    How to Pay?{" "}
                  </h1>
                </div>
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden quick-links-items">
              <img
                src="./img/coverage-area.jpg"
                alt=""
                className="h-auto max-h-72 w-auto max-w-full mx-auto"
              />
              <a href="https://xplorenetbd.com/areas/list">
                <div className="bg-green-100 px-8 py-6 text-gray-600 hover:text-green-500 ">
                  <h1 className="text-base md:text-xl font-semibold text-center transition-all duration-300">
                    Coverage area{" "}
                  </h1>
                </div>
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden quick-links-items">
              <div className="h-72 flex flex-col justify-center items-center">
                <img
                  src="./img/offer.jpg"
                  alt=""
                  className="h-auto max-h-72 w-auto max-w-full mx-auto"
                />
              </div>
              <a
                href="https://xplorenetbd.com/offers/list"
                //   target="_blank"
                className="block mt-auto"
              >
                <div className="bg-indigo-100 px-8 py-6 text-gray-600 hover:text-indigo-500 ">
                  <h1 className="text-base md:text-xl font-semibold text-center transition-all duration-300">
                    {" "}
                    Offers
                  </h1>
                </div>
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden quick-links-items">
              <img
                src="./img/get-in-touch.jpg"
                alt=""
                className="h-auto max-h-72 w-auto max-w-full mx-auto"
              />
              <a href="https://xplorenetbd.com/contact-us">
                <div className="bg-yellow-100 px-8 py-6 text-gray-600 hover:text-yellow-500 ">
                  <h1 className="text-base md:text-xl font-semibold text-center transition-all duration-300">
                    {" "}
                    Get in touch{" "}
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
