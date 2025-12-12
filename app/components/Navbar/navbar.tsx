"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Help Center", href: "/HelpCenter" },
  { name: "Community", href: "/Community" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => setMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative sticky  top-0 left-0 w-full bg-[#F7FFF3] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex items-center">
           <Link href="/">
            <Image
              src="/assets/images/logo/trueDrop-logo.svg"
              alt="Logo"
              width={80}
              height={60}
              className="object-contain"
            />
          </Link>
          </div>

          {/* CENTER NAV ITEMS - Desktop Only */}
          <ul
            className="
              hidden md:flex items-center gap-10 text-gray-600 font-medium
              absolute left-1/2 transform -translate-x-1/2
          "
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[14px] md:text-[16px] hover:text-gray-900 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Get Started Button */}
          {/* <div className="hidden md:flex ">
            <button
              
              className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-[14px] md:text-[16px] text-[#FAF9FB]  
                bg-gradient-to-t from-[#9AF6D3] to-[#3C886B] shadow-md hover:opacity-90 transition"
            > */}
              {/* <Image
                src="/assets/images/icon/nav-icon.svg"
                alt="Start Icon"
                width={18}
                height={18}
              /> */}
              {/* Get Started
            </button>
          </div> */}

          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md border border-gray-400 bg-white/50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="w-6 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="w-6 h-0.5 bg-gray-700 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-sm
          bg-white shadow-lg z-50 p-6 transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={closeMenu}
            className="p-2 text-gray-700 hover:bg-gray-200 rounded-full"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile Nav Items */}
        <ul className="flex flex-col gap-6 mt-6 text-gray-700 text-lg">
          {navItems.map((item) => (
            <li key={item.name} onClick={closeMenu}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Get Started Button */}
        {/* <div className="mt-10">
          <button
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-[#FAF9FB]
              bg-gradient-to-r from-[#9AF6D3] to-[#3C886B] shadow-md hover:opacity-90 transition"
          > */}
            {/* <Image
              src="/assets/images/icon/nav-icon.svg"
              alt="Start Icon"
              width={18}
              height={18}
            /> */}
            {/* Get Started
          </button>
        </div> */}
      </div>
    </nav>
  );
}
