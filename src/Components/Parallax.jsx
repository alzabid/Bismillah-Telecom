/* eslint-disable react/prop-types */
const Parallax = (props) => {
  return (
    <section className="h-full">
      <div className="h-[250px] lg:h-[400px] relative ">
        <div className="absolute inset-0 hero-overlay z-10 bg-[#212122] opacity-70 "></div>
        <img
          className="h-full w-full object-cover object-center"
          src={props.img}
          alt=""
        />
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <div className="text-center space-y-3 lg:space-y-6">
            <h1 className="text-2xl lg:text-4xl font-bold text-white font-inter text-anim">
              {props.title}
            </h1>

            <p className="text-base lg:text-2xl font-normal text-gray-100 text-anim">
              {props.text}
              {/*  */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
