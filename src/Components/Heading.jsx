/* eslint-disable react/prop-types */
const Heading = (props) => {
  return (
    <div className="max-w-xl mx-auto space-y-3 lg:space-y-4 text-center services-heading">
      <h1 className="text-2xl font-bold text-gray-700 text-center">
        {props.title}
      </h1>
      <h2 className="text-3xl font-bold">{props.head}</h2>
      <p className="text-sm">
        {props.details}
      </p>
    </div>
  );
};

export default Heading;
