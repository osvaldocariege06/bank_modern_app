import React, { useState } from "react";

import { logo, close, menu } from "./../assets/index";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex py-6 justify-between items-end">
      <img src={logo} alt="hooBank" className={`w-[124px] h-[32px]`} />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal cursor-pointer text-[16px]
            text-white ${index === navLinks - 1 ? "mr-0" : "mr-10"}
            `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"}
          p-6 bg-black-gradient absolute top-20 right-0 mx-4
          my-2 min-w-[140px] rounded-xl
          asidebar
   `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
            font-normal cursor-pointer text-[16px]  hover:text-secondary
            text-white ${index === navLinks - 1 ? "mr-0" : "mb-4"}
            `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
