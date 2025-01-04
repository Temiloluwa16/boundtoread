"use client";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between py-3.5 px-5 absolute bg-black/40 top-0 w-full">
      <Link href="/" className="text-white text-xl font-black">
        BoundToRead
      </Link>
      <ul
        className={`${
          isOpen
            ? "opacity-100 translate-x-0 "
            : "opacity-0 translate-x-full lg:translate-x-[200%]"
        } transition-all duration-300 ease-in-out right-2 top-16 md:right-5 lg:right-auto bg-black/90 p-4 rounded-lg flex flex-col lg:justify-evenly lg:gap-20 items-start gap-4 min-w-[150px] lg:opacity-100 lg:translate-x-0 lg:static lg:bg-transparent lg:flex-row lg:items-center text-white font-semibold absolute lg:w-5/12`}
      >
        <li>
          <Link href="/explore">Books</Link>
        </li>
        <li>Search</li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
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
