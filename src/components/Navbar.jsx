import React, { useState } from "react";

import { logo, close, menu } from "./../assets/index";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
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
          onClick={() => setToggle(prev => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
