"use client";
import Link from "next/link";
import { useAuth } from "@/context/auth";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between py-2 px-5 fixed bg-black/40 top-0 w-full z-50">
      <Link href="/" className="text-white text-xl font-black">
        BoundToRead
      </Link>
      <ul
        ref={menuRef}
        className={`${
          isOpen
            ? "visible opacity-100 translate-x-0"
            : "invisible opacity-0 translate-x-full"
        } fixed right-2 top-16 md:right-5 transition-all duration-300 ease-in-out bg-black/90 p-4 rounded-lg flex flex-col items-start gap-4 min-w-[150px] text-white font-semibold
        lg:visible lg:opacity-100 lg:-translate-x-10 lg:static lg:bg-transparent lg:flex-row lg:items-center lg:w-auto lg:gap-20`}
      >
        <li>
          <Link href="/explore">Books</Link>
        </li>
        <li>Search</li>

        {!isAuthenticated ? (
          <>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </>
        ) : (
          <div className="flex flex-col items-start gap-4 lg:items-center lg:flex-row lg:gap-20">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={logout} className="text-white">
                Log Out
              </button>
            </li>
          </div>
        )}
      </ul>
      <button onClick={handleMenu} className="lg:hidden">
        <Image
          src="/assets/menu.svg"
          alt="menu button"
          height={50}
          width={50}
        />
      </button>
    </nav>
  );
};

export default Navbar;