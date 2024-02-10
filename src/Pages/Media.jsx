import ServerCard from "../Components/Cards/ServerCard";

const Media = () => {
  return (
    <div>
      <main className="overflow-hidden">
        <section className="bg-gray-800">
          <div className="bg-[url('./img/movie.jpeg')] bg-cover w-full h-full">
            <div className="bg-gray-800 bg-opacity-70 h-full w-full px-4 py-14 lg:px-14 space-y-20 relative">
              <div className="default-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 lg:gap-0">
                  <div className="col-span-2">
                    <div className="max-w-lg space-y-4">
                      <p className="text-lg font-semibold text-white">
                        Bismillah Telecom
                      </p>
                      <h2 className="text-4xl font-bold !text-white">
                        We have big collections of movies &amp; Live tv Server
                      </h2>
                      <p className="text-base text-white">
                        Bismillah Telecom BD offers an array of services with
                        high speed internet solution for corporate and home
                        uses. Our commitment and client satisfaction are the
                        main goals. As a result we have gained a moderate
                        goodwill and popularity among our users.
                      </p>
                      <a
                        className="inline-block primary-btn !mt-10 uppercase"
                        href="https://xplorenetbd.com/pricing"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="col-span-1 rounded-md overflow-hidden">
                        <img
                          src="./img/movie-1.jpg"
                          className="h-72 w-full object-cover"
                        />
                      </div>

                      <div className="col-span-1 rounded-md overflow-hidden">
                        <img
                          src="./img/movie-2.jpg"
                          className="h-72 w-full object-cover"
                        />
                      </div>

                      <div className="col-span-1 rounded-md overflow-hidden">
                        <img
                          src="./img/movie-3.jpg"
                          className="h-72 w-full object-cover"
                        />
                      </div>

                      <div className="col-span-1 rounded-md overflow-hidden">
                        <img
                          src="./img/movie-4.jpg"
                          className="h-72 w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-28 md:pb-24">
          <ServerCard />
        </section>
      </main>
    </div>
  );
};

export default Media;
