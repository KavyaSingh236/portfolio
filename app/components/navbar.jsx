// @flow strict
import { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scroll ? "bg-black bg-opacity-80 shadow-lg" : "bg-transparent"
      } sticky top-0 z-10 transition-all duration-300 ease-in-out w-full`}
    >
      <div className="flex items-center justify-between py-4 px-6 md:px-12">
        <div className="flex items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            <img src="image/logo.png" alt="logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links for desktop */}
        <ul className="hidden md:flex space-x-6">
          {["about", "skills", "projects", "experience", "education", "certifications", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  href={`/#${section}`}
                  className="block px-3 py-2 text-sm text-white hover:text-pink-600 focus:text-pink-600 active:text-pink-600 transition-colors duration-300"
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-14 w-full bg-black bg-opacity-90 z-20 transition-all duration-300 ease-in-out`}
        >
          <div className="h-[70vh] overflow-y-auto p-6">
            <ul className="flex flex-col space-y-4">
              {["about", "skills", "projects", "experience", "education", "certifications", "contact"].map(
                (section) => (
                  <li key={section}>
                    <Link
                      href={`/#${section}`}
                      className="block text-white text-lg hover:text-pink-600 focus:text-pink-600 active:text-pink-600 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {section.toUpperCase()}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
