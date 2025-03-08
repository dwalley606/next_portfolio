// src/app/components/Navigation.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="sm:hidden text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
      <ul
        className={
          `${isMenuOpen ? "flex" : "hidden"} ` +
          "sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto bg-gray-800 sm:bg-transparent absolute sm:static top-16 left-0 sm:top-auto sm:left-auto p-4 sm:p-0"
        }
      >
        <li>
          <Link
            href="/"
            className="text-lg font-semibold text-gray-200 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="text-lg font-semibold text-gray-200 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="text-lg font-semibold text-gray-200 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-lg font-semibold text-gray-200 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}