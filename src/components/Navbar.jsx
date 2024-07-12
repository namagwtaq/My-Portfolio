"use client";

import { Poppins, Slackey } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const slackey = Slackey({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toogleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-10 flex justify-center p-6 ${
        hasScrolled ? "bg-black bg-opacity-70 transition-all" : "transition-all"
      }`}
      style={poppins.style}
    >
      <div className="hidden w-full px-10 text-white md:flex md:justify-between">
        <div className="">
          <h3 style={slackey.style}>
            <span className="text-[#e85f5b]">Taqi</span> Mundzir
          </h3>
        </div>
        <div className="flex gap-x-8">
          <Link
            href="/"
            className={`hover:text-[#e85f5b] hover:transition-all ${
              pathname === "/" ? "text-[#e85f5b]" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={`hover:text-[#e85f5b] hover:transition-all ${
              pathname === "/about" ? "text-[#e85f5b]" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="#skills"
            className={`hover:text-[#e85f5b] hover:transition-all`}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`hover:text-[#e85f5b] hover:transition-all ${
              pathname === "/contact-us" ? "text-[#e85f5b]" : "text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#journey"
            className={`hover:text-[#e85f5b] hover:transition-all ${
              pathname === "/contact-us" ? "text-[#e85f5b]" : "text-white"
            }`}
          >
            Journey
          </Link>
        </div>
        <div className="">
          <Link
            href="#contact"
            className="rounded-lg border-2 border-red-400 px-4 py-2"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-between md:hidden">
        <div className="my-auto">
          {" "}
          <h3 className="text-white" style={slackey.style}>
            Maher<span className="text-[#e85f5b]">19</span>
          </h3>
        </div>
        <button onClick={toogleMenuOpen} className="">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="slideIn absolute inset-0 p-1">
            <div className="space-y-3 bg-black bg-opacity-80 p-6 text-right">
              <button onClick={toogleMenuOpen} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-right text-white"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <Link
                href="/"
                className={`block text-center text-sm ${
                  pathname === "/" ? "text-[#e85f5b]" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="#about"
                className={`block text-center text-sm ${
                  pathname === "/about" ? "text-[#e85f5b]" : "text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="#skills"
                className={`block text-center text-sm ${
                  pathname === "/portfolio" ? "text-[#e85f5b]" : "text-white"
                }`}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className={`block text-center text-sm ${
                  pathname === "/contact" ? "text-[#e85f5b]" : "text-white"
                }`}
              >
                Projects
              </Link>
              <Link
                href="#journey"
                className={`block text-center text-sm ${
                  pathname === "/contact" ? "text-[#e85f5b]" : "text-white"
                }`}
              >
                Journey
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
