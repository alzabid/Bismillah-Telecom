import "./servicesCard.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const ServicesCard = () => {
  return (
    <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {/* 1 */}
      <div className="card">
        <div className="content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-20 mx-auto hover:-translate-y-1 transition-all duration-300 text-gray-700 group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 50 50"
          >
            <path d="M1 38h23v3H12v2h26v-2H26v-3h23V8H1v30zm2-28h44v26H3V10z" />
          </svg>
          <p className="heading">Broadband</p>
          <p className="para">
            We have been in the Internet business since very beginning. From
            experience we know client desire service . We provide brodband
            internet service for both home and commercial uses.
          </p>
          <button className="btn btn-sm">
            Read more
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      {/* 2 */}
      <div className="card">
        <div className="content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-20 mx-auto hover:-translate-y-1 transition-all duration-300 text-gray-700 group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 50 50"
          >
            <path d="M1 38h23v3H12v2h26v-2H26v-3h23V8H1v30zm2-28h44v26H3V10z" />
          </svg>
          <p className="heading">Broadband</p>
          <p className="para">
            We have been in the Internet business since very beginning. From
            experience we know client desire service . We provide brodband
            internet service for both home and commercial uses.
          </p>
          <button className="btn btn-sm">
            Read more
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      {/* 3 */}
      <div className="card">
        <div className="content">
          <PiTelevisionSimpleBold className="text-7xl" />
          <p className="heading">Broadband</p>
          <p className="para">
            We have been in the Internet business since very beginning. From
            experience we know client desire service . We provide brodband
            internet service for both home and commercial uses.
          </p>
          <button className="btn btn-sm">
            Read more
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      {/* 4 */}
      <div className="card">
        <div className="content">
          <CgWebsite className="text-7xl" />
          <p className="heading">Web Solution</p>
          <p className="para">
            For business ,Customers expect you to have a website to find more
            information about your business. As for you, your website can help
            you generate business, increase brand recall value, promote goodwill
            in front of customers and target audience, as well as deliver strong
            marketing messages. If you require a website please contact with us
            we will assist you to have your business profile or protfolio
          </p>
          <button className="btn btn-sm">
            Read more
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
