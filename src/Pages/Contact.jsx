import Parallax from "../Components/Parallax";
import photo from "../../public/img/packages.jpeg";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="">
      <main className="overflow-hidden">
        {/* parallax */}
        <Parallax
          img={photo}
          title="CONTACT US"
          text="Please get in touch and our expert support team will answer
                  all your question's."
        />
        {/* cards */}
        <section className="px-6 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto space-y-20" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
              {/* 1 */}
              <div className="col-span-1 contact-item">
                <div className="h-full group rounded-lg shadow-xl overflow-hidden">
                  <div className="h-full bg-transparent relative z-10 before:z-0 before:content-[''] before:-bottom-full group-hover:before:bottom-0 before:left-0 before:absolute before:h-full before:w-full before:group-hover:bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-8 text-center space-y-6 before:transition-all before:duration-500 before:ease transition-all duration-500 ease-in-out">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="text-fuchsia-700 group-hover:text-white h-16 w-20 mx-auto hover:-translate-y-1 transition-all duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="space-y-2 relative">
                      <h2 className="text-xl font-medium font-inter text-gray-700 group-hover:text-white">
                        Location
                      </h2>
                      <p className="text-content-dark text-gray-700 group-hover:text-white">
                        চ-৬৬, উত্তর বাড্ডা,গুলশান-১২১২
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-span-1 contact-item">
                <div className="h-full group rounded-lg shadow-xl overflow-hidden">
                  <div className="h-full bg-transparent relative z-10 before:z-0 before:content-[''] before:-bottom-full group-hover:before:bottom-0 before:left-0 before:absolute before:h-full before:w-full before:group-hover:bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-8 text-center space-y-6 before:transition-all before:duration-500 before:ease transition-all duration-500 ease-in-out">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="text-fuchsia-700 group-hover:text-white h-16 w-20 mx-auto hover:-translate-y-1 transition-all duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div className="space-y-2 relative">
                      <h2 className="text-xl font-medium font-inter text-gray-700 group-hover:text-white">
                        Phone
                      </h2>
                      <p className="text-content-dark text-gray-700 group-hover:text-white">
                        +8801645756860
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-span-1 contact-item">
                <div className="h-full group rounded-lg shadow-xl overflow-hidden">
                  <div className="h-full bg-transparent relative z-10 before:z-0 before:content-[''] before:-bottom-full group-hover:before:bottom-0 before:left-0 before:absolute before:h-full before:w-full before:group-hover:bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-8 text-center space-y-6 before:transition-all before:duration-500 before:ease transition-all duration-500 ease-in-out">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="text-fuchsia-700 group-hover:text-white h-16 w-20 mx-auto hover:-translate-y-1 transition-all duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                        ></path>
                      </svg>
                    </div>
                    <div className="space-y-2 relative">
                      <h2 className="text-xl font-medium font-inter text-gray-700 group-hover:text-white">
                        Email Us
                      </h2>
                      <p className="text-content-dark text-gray-700 group-hover:text-white">
                        bismillahtelecom10@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="col-span-1 contact-item">
                <div className="h-full group rounded-lg shadow-xl overflow-hidden">
                  <div className="h-full bg-transparent relative z-10 before:z-0 before:content-[''] before:-bottom-full group-hover:before:bottom-0 before:left-0 before:absolute before:h-full before:w-full before:group-hover:bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-8 text-center space-y-6 before:transition-all before:duration-500 before:ease transition-all duration-500 ease-in-out">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="text-fuchsia-700 group-hover:text-white h-16 w-20 mx-auto hover:-translate-y-1 transition-all duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="space-y-2 relative">
                      <h2 className="text-xl font-medium font-inter text-gray-700 group-hover:text-white">
                        Working Hour
                      </h2>
                      <p className="text-content-dark text-gray-700 group-hover:text-white">
                        10:00 am - 10:00 pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 1 */}
        <section>
          <div className=" max-w-7xl mx-auto px-6 pb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center rounded-md overflow-hidden bg-white shadow-xl">
              {/* Map */}
              <div className="col-span-1 h-72 lg:pl-5 lg:h-full relative order-2 lg:order-1">
                <div className="flex justify-center lg:pb-5 ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58417.84232591457!2d90.37397118105747!3d23.778913701603617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7988c32bc7f%3A0x4c9a155d0e628033!2s32%20Rd%20123%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1707543375866!5m2!1sen!2sbd"
                    width="600"
                    height="650"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
              {/* feedback */}
              <div className="col-span-1 md:px-10 order-1 lg:order-2">
                <div className=" bg-white rounded-2xl p-5 flex flex-col">
                  <div className="title text-4xl font-bold text-center pb-5">
                    Send us your{" "}
                    <span className="text-fuchsia-700">Feedback</span>
                  </div>
                  <div className="form mt-4 flex flex-col">
                    <div className="group relative ">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        className="py-2 px-3 w-full  rounded-md border border-gray-300 mb-4 outline-none bg-transparent"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="group relative ">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        className="py-2 px-3 w-full  rounded-md border border-gray-300 mb-4 outline-none bg-transparent"
                        type="text"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="group relative ">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        className="py-2 px-3 w-full  rounded-md border border-gray-300 mb-4 outline-none bg-transparent"
                        type="number"
                        placeholder="Your Number"
                      />
                    </div>

                    <label className="label">
                      <span className="label-text">Feedback</span>
                    </label>
                    <textarea
                      placeholder=""
                      className="py-5 px-3 w-full  rounded-md border border-gray-300 mb-4 outline-none bg-transparent"
                    ></textarea>

                    <button className="btn text-xl px-10 text-white hover:text-gray-800 bg-cyan-500 hover:border-cyan-500 border-2 hover:bg-white">
                      Send <FaLocationArrow />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 2 */}
        {/* <section className="relative overflow-hidden ">
          <div className="default-container py-10 lg:py-20">
            <div className="flex justify-center overflow-hidden">
              <div className="space-y-6 text-center">
                <h1 className="text-3xl lg:text-6xl font-semibold text-[#272e35] text-anim">
                  Contact Us
                </h1>
                <p className="text-base lg:text-xl font-normal text-[#6E757C] text-anim">
                  contact to our customer care 24x7.We are always here to assist
                  you
                </p>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[800px]"
            id="contact"
          >
            <div className="col-span-1 h-full relative order-2 md:order-1">
              <div
                id="contact-left"
                className="relative lg:absolute w-full lg:w-[500px] lg:top-1/2 lg:right-10 lg:-translate-y-1/2 bg-white rounded-xl px-10 py-10 lg:py-16 space-y-4 lg:space-y-6"
              >
                <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mt-1 lg:mt-0 h-5 lg:h-8 w-5 lg:w-8 text-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="text-base lg:text-xl font-semibold text-gray-700">
                      Address
                    </p>
                    <p className="text-sm lg:text-lg font-normal text-gray-500">
                      House #22/B,Nur Fathah lane,Chawkbazar,Dhaka-1211
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mt-1 lg:mt-0 h-5 lg:h-8 w-5 lg:w-8 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="text-base lg:text-xl font-semibold text-gray-700">
                      Email
                    </p>
                    <p className="text-sm lg:text-lg font-normal text-gray-500">
                      support@as-bd.net
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mt-1 lg:mt-0 h-5 lg:h-8 w-5 lg:w-8 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="text-base lg:text-xl font-semibold text-gray-700">
                      Phone
                    </p>
                    <p className="text-sm lg:text-lg font-normal text-gray-500">
                      01618977774, 01778830444, 01787843431
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:pb-5 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467420.3030962046!2d90.12035070011363!3d23.75732241499096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7de0e452d%3A0xeec73914cc53b887!2sCity%20College%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1705582640087!5m2!1sen!2sbd"
                  width="1100"
                  height="400"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
            <div className="col-span-1 h-full bg-white p-10 lg:p-20 space-y-3 order-1 md:order-2">
              <div className="w-full lg:w-2/3" id="contact-right">
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-700">
                  Get In Touch
                </h1>
                <p className="text-base font-normal text-gray-700">
                  Fill the form and submit your query .We will contact with you
                  shortly
                </p>

                <div className="pt-6">
                  <form
                    method="post"
                    action="https://xplorenetbd.com/inquiry"
                    className="space-y-5"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="d7VGRQ8Hs6Iob8SMXPVi9XMVkAIjP8TJGv1bBSzw"
                    />{" "}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value=""
                      className="text-lg text-gray-800 font-normal rounded-2xl px-4 w-full h-16 border-0 bg-gray-100"
                      placeholder="Enter your name"
                    />
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className="text-lg text-gray-800 font-normal rounded-2xl px-4 w-full h-16 border-0 bg-gray-100"
                      placeholder="Enter your phone number"
                    />
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="6"
                      className="text-lg text-gray-800 font-normal rounded-2xl px-4 w-full border-0 bg-gray-100 overflow-hidden"
                    ></textarea>
                    <button
                      type="submit"
                      className="primary-btn w-40 justify-center"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Contact;
