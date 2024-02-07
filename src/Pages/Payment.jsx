import Parallax from "../Components/Parallax";
import photo from "../../public/img/business-technology.jpg";
import LastSection from "../Components/LastSection";
import { Link } from "react-router-dom";
import BankCard from "../Components/Cards/BankCard";
import bank1 from "../../public/img/brack-bank.png";
import bank2 from "../../public/img/city-bank.jpeg";
import bank3 from "../../public/img/dutch.png";

const Payment = () => {
  return (
    <div>
      <main className="overflow-hidden">
        {/* parallax */}
        <Parallax
          img={photo}
          title="Payment at any time"
          text=""
        />

        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto" id="about-us">
            {/* Mobile Banking */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10 lg:gap-20">
              {/* Bkash */}
              <div className="col-span-1">
                <h2 className="text-3xl font-bold">
                  Payment through <span className="text-[#f3046e]">bKash</span>
                </h2>
                <img className="mt-6 text-anim" src="./img/bkash.png" alt="" />
                <p className="text-lg font-medium text-gray-600 mt-1 text-anim">
                  Merchant Number:{" "}
                  <span className="text-slate-900 font-semibold">
                    01710900403
                  </span>
                </p>
                <ol className="border-l-2 border-dashed border-[#f3046e] ml-3 mt-12 text-anim">
                  <li className="text-anim">
                    <div className="md:flex flex-start">
                      <div className="bg-[#f3046e] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        1
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Go to your bKash Mobile Menu by dialing *247#
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim">
                    <div className="md:flex flex-start">
                      <div className="bg-[#f3046e] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        2
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Choose “Payment”
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim">
                    <div className="md:flex flex-start">
                      <div className="bg-[#f3046e] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        3
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Enter the Merchant Number: 01710900403
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim">
                    <div className="md:flex flex-start">
                      <div className="bg-[#f3046e] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        4
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Reference No (your User Id)
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim">
                    <div className="md:flex flex-start">
                      <div className="bg-[#f3046e] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        5
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Counter No.1
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim">
                    <div className="md:flex flex-start">
                      <div className="bg-[#f3046e] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        6
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Now enter your bKash Mobile Menu PIN to confirm
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {/* Rocket */}
              <div className="col-span-1 relative">
                <h2 className="text-3xl font-bold">
                  Payment through <span className="text-[#970090]">Rocket</span>
                </h2>
                <img
                  className="mt-6 text-anim2"
                  src="./img/rocket.png"
                  alt=""
                />
                <p className="text-lg font-medium text-gray-600 mt-1 text-anim2">
                  Merchant Number:{" "}
                  <span className="text-slate-900 font-semibold">
                    017109004030
                  </span>
                </p>
                <ol className="border-l-2 border-dashed border-[#970090] ml-3 mt-12 text-anim2">
                  <li className="text-anim2">
                    <div className="md:flex flex-start">
                      <div className="bg-[#970090] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        1
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Go to your Rocket Mobile Menu by dialing *322#
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim2">
                    <div className="md:flex flex-start">
                      <div className="bg-[#970090] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        2
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Choose Payment
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim2">
                    <div className="md:flex flex-start">
                      <div className="bg-[#970090] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        3
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Enter the Merchant Number: 01710900403
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim2">
                    <div className="md:flex flex-start">
                      <div className="bg-[#970090] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        4
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Reference No (your User Id)
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="text-anim2">
                    <div className="md:flex flex-start">
                      <div className="bg-[#970090] text-white w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                        5
                      </div>
                      <div className="block p-5 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 -mt-5">
                        <p className="text-base font-medium text-slate-800">
                          Now enter your Rocket Mobile Menu PIN to confirm
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            {/* Banks */}
            <div className=" px-8 mt-28">
              <h2 className="text-3xl font-bold">
                Payment through <span className="text-sky-900">Bank</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                <BankCard
                  img={bank1}
                  name="Brack Bank"
                  title="Pay with your Brack Bank account."
                />
                <BankCard
                  img={bank2}
                  name="City Bank"
                  title="Pay with your City Bank account."
                />
                <BankCard
                  img={bank3}
                  name="Dutch Bangla Bank"
                  title="Pay with your Dutch Bangla Bank account."
                />
              </div>
            </div>
            {/* notice */}
            <div
              className="p-4 mb-4 mt-24 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-yellow-200 text-anim2"
              role="alert"
            >
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 text-yellow-700 dark:text-yellow-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">
                  Notice:
                </h3>
              </div>
              <div className="mt-2 mb-4 text-base text-yellow-700 dark:text-yellow-800">
                If you don't able to make payment online, please contact us. Our
                support team will help you to pay your bill.
              </div>
              <div className="flex">
                <Link
                  to="/contact"
                  className="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-base px-3 py-2 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Try Our */}
        <LastSection />
      </main>
    </div>
  );
};

export default Payment;
