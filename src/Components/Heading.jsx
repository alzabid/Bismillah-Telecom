

const Heading = (props) => {
    return (
      <div className="max-w-xl mx-auto space-y-3 lg:space-y-4 text-center services-heading">
        <p className="text-orange-400 text-2xl font-extrabold text-primary-1000 font-inter">
          {props.title}
        </p>
        <h2 className="text-3xl font-bold">{props.head}</h2>
        <p className="text-sm">
          {props.details}
          {/* Bismillah Telecom offers everything you need to get fast internet
          speed. From broadband Internet to Networking Solution. we’ll have your
          business online in no time. */}
        </p>
      </div>
    );
};

export default Heading;