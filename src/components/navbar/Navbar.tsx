"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "LandLord", url: "/landlord" },
  { id: 3, title: "Tenants", url: "/tenants" },
  { id: 4, title: "Contact Us", url: "/contact-us" },
];

function Navbar() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="center flex min-h-[70px] items-center justify-between gap-5 border-b px-10 py-[10px] text-white">
      <Link href="/" className="text-2xl capitalize">
        cozy
      </Link>

      <ul
        className={`absolute top-[70px] flex h-[calc(100dvh--70px)] w-full flex-col items-center justify-center gap-12 bg-slate-600/70 p-3 text-center text-white duration-700 ${
          isActive ? "-left-[100%]" : "left-0"
        } sm:static sm:h-[0] sm:flex-row sm:items-center sm:gap-3 sm:bg-transparent`}
      >
        {links.map((link) => (
          <li key={link.id} className="" onClick={toggleActiveClass}>
            <Link
              href={link.url}
              className="text-3xl sm:text-xl sm:hover:border-b"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger block cursor-pointer sm:hidden ${
          isActive ? "" : "active"
        }`}
        onClick={toggleActiveClass}
      >
        <span className="bar m-[5px] block h-[3px] w-5 bg-white duration-300" />
        <span className="bar m-[5px] block h-[3px] w-5 bg-white duration-300" />
        <span className="bar m-[5px] block h-[3px] w-5 bg-white duration-300" />
      </button>
    </nav>
  );
}

export default Navbar;
