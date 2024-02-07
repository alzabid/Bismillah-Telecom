const LastSection = () => {
  return (
    <div className="">
      <section className="bg-[url('/img/work-from-home.jpg')] bg-cover bg-center w-full h-auto relative">
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white pl-10 md:pl-32 pt-20 pb-48 relative z-10">
          <div className="space-y-6 lg:space-y-9 max-w-xl">
            <div className="flex gap-4">
              <div className="h-12 lg:h-16 w-12 lg:w-16 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 lg:h-8 w-6 lg:w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  ></path>
                </svg>
              </div>
              <div className="h-12 lg:h-16 w-12 lg:w-16 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 lg:h-8 w-6 lg:w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 className="text-2xl lg:text-4xl font-extrabold font-inter leading-snug text-anim">
              Try Our Internet Services
            </h2>
            <p className="text-content font-inter leading-7 text-anim">
              Enjoy the freedom of endless possibilities with Hathway Broadband.
              Download any songs you like, play your favourite games, attach
              large files or folders, upload your trendy photos & videos; its
              simple & easy with lightening fast speed.
            </p>
            <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LastSection;
