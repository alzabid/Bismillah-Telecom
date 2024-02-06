import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Our Services", link: "/services" },
    { name: "Media", link: "/media" },
    { name: "Areas", link: "/area" },
    { name: "About Us", link: "/about" },
    { name: "Packages", link: "/packages" },
    { name: "Contacts", link: "/contact" },
  ];

  return (
    <div className="shadow-md w-full sticky top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-[#24085c] h-24 py-4 px-6 lg:px-20 ">
        {/* logo */}
        <Link to="/">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
          >
            <span className="">
              <img className="w-10" src="./img/fav.png" alt="" />
            </span>
            Bismillah Telecom
          </div>
        </Link>

        {/* open or close icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <CgMenuMotion /> : <RiMenuAddLine />}
        </div>

        {/* Navlinks */}

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-white hover:text-amber-600 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
          Payment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
