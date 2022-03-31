import { useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav className={`pt-4 `}>
        <NavbarList />
      </nav>
    </>
  );
};

const NavbarList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Top-level Unordered list && Direct Children of nav element */}
      <ul
        className={` flex md:justify-around justify-between items-center md:ml-6 md:mr-6 md:text-sm`}
      >
        <li className={`md:ml-0 ml-12 ${isMenuOpen ? "hidden" : "block"}`}>
          <img src="src/assets/Logo.webp" alt="Logo" />
        </li>
        <li className={`${isMenuOpen ? "hidden" : "block"}`}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              enableBackground="new 0 0 1200 1200"
              style={{ height: "25px", width: "25px" }}
              version="1.1"
              viewBox="0 0 1200 1200"
              className={`md:mr-0 md:hidden mr-12`}
            >
              <path d="M0,0v240h1200V0H0z M0,480v240h1200V480H0z M0,960v240h1200V960H0z" />
            </svg>
          </button>
        </li>
        {/* Top-level unordered list */}
        {/* ----------------------------------------------------------------------------- */}
        {/* 
           Desktop & Tablet Nav-items segment && direct children of Top level unordered list
           */}
        <ul className={`md:flex lg:gap-10 md:gap-6 items-center hidden`}>
          {navbarList.length !== 0
            ? navbarList.map((item) => {
                return (
                  <li
                    key={item.key}
                    className={`md:text-md md:last:ml-6 last:text-orange-300 first:text-orange-400 first:font-bold first:underline font-bold text-gray-500 ${
                      item.key === 654
                        ? "shadow-2xl p-4 rounded-full hover:shadow-orange-500"
                        : ""
                    } lg:opacity-70 hover:opacity-100 transition-opacity`}
                  >
                    <a href={item.path}>{item.name}</a>
                  </li>
                );
              })
            : "Empty"}
        </ul>
        {/* 
           Desktop & Tablet Nav-items segment && direct children of Top level unordered list
           */}
        {/* ----------------------------------------------------------------------------- */}
        {/* 
           Mobile Nav-items segment && direct children of Top level unordered list
           */}
        <ul
          className={` flex flex-col  lg:gap-10 md:gap-6 gap-6 items-center ${
            isMenuOpen ? "block" : "hidden"
          } fixed w-full h-full top-0 left-0 bg-black opacity-90 flex items-center justify-center z-50`}
        >
          <li className={`${isMenuOpen ? "block" : "hidden"} text-6xl`}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-white`}
            >
              &times;
            </button>
          </li>
          {navbarList.length !== 0
            ? navbarList.map((item) => {
                return (
                  <li
                    key={item.key}
                    className={`md:text-md md:last:ml-6 last:text-orange-300 first:text-orange-400 first:font-bold first:underline font-bold text-white text-3xl`}
                  >
                    <a href={item.path}>{item.name}</a>
                  </li>
                );
              })
            : "Empty"}
        </ul>
        {/* 
           Mobile Nav-items segment && direct children of Top level unordered list
           */}
        {/* ----------------------------------------------------------------------------- */}
      </ul>
    </>
  );
};

// Items that will appear on Navbar
const navbarList = [
  {
    name: "Study",
    path: "/study",
    key: 623,
  },
  {
    name: "About Us",
    path: "/about",
    key: 452,
  },
  {
    name: "Admission",
    path: "/admission",
    key: 145,
  },
  {
    name: "Pages",
    path: "/pages",
    key: 333,
  },
  {
    name: "News",
    path: "/news",
    key: 432,
  },
  {
    name: "Contact",
    path: "/contact",
    key: 543,
  },
  {
    name: "Apply Now",
    path: "/apply",
    key: 654,
  },
];

export default Navbar;
