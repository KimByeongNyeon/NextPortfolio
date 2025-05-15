"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const routes = [
    { path: "/", label: "Home" },
    { path: "/main", label: "Main" },
    { path: "/skills", label: "Skills" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md transform rotate-12"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <SiNextdotjs className="text-white text-xl" />
              </div>
            </div>
            <span className={`text-xl font-bold ${scrolled ? "text-gray-800" : "text-gray-800"}`}>Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`relative px-4 py-2 rounded-md transition-colors ${
                  pathname === route.path ? "text-blue-600 font-medium" : `${scrolled ? "text-gray-700" : "text-gray-700"} hover:text-blue-600`
                }`}
              >
                {pathname === route.path && <motion.span className="absolute inset-0 bg-blue-100 rounded-md -z-10" layoutId="navbar-indicator" transition={{ type: "spring", duration: 0.5 }} />}
                {route.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${scrolled ? "text-gray-800" : "text-gray-800"}`} onClick={toggleMenu} aria-label="Toggle menu">
            <div className="relative w-6 h-6">
              <motion.span
                className="absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={{
                  top: isMenuOpen ? "12px" : "2px",
                  rotate: isMenuOpen ? "45deg" : "0deg",
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={{
                  width: isMenuOpen ? "0" : "24px",
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={{
                  top: isMenuOpen ? "12px" : "22px",
                  rotate: isMenuOpen ? "-45deg" : "0deg",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div className="md:hidden overflow-hidden" initial={{ height: 0 }} animate={{ height: isMenuOpen ? "auto" : 0 }} transition={{ duration: 0.3 }}>
          <div className={`container mx-auto px-6 py-4 bg-white/90 backdrop-blur-md ${isMenuOpen ? "border-t" : ""}`}>
            <div className="flex flex-col space-y-3">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`py-2 px-4 rounded-md transition-colors ${pathname === route.path ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.nav>
      {/* 네비게이션 바 아래 여백을 위한 빈 div */}
      <div className="h-20"></div>
    </>
  );
}
