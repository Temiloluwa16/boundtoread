"use client";

import Image from "next/image";
import { useState } from "react";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between py-3.5 px-5 absolute bg-black/40 top-0 w-full overflow-hidden">
      <h1 className="text-white text-xl font-black">BoundToRead</h1>
      <ul
        className={`${
          isOpen ? "translate-x-[70%] ease in duration-1000" : "translate-x-[400%] duration-1000 ease-out"
        } flex flex-col items-center justify-evenly gap-20 text-white font-semibold absolute w-5/12 lg:flex-row`}
      >
        <li>Books</li>
        <li>Search</li>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
      <button onClick={handleMenu}>
        <Image
          src="/assets/menu.svg"
          alt="search button"
          height={50}
          width={50}
        />
      </button>
    </nav>
  );
};

export default navbar;
