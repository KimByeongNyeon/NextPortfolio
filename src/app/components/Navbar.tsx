"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const routes = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFloatingMenu = () => {
    setIsFloatingMenuOpen(!isFloatingMenuOpen);
  };

  return (
    <>
      {/* 모바일 Navbar (기존 유지) */}
      <motion.nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-100 dark:border-white/10" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* 로고 */}
            <Link href="/" className="group">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center transition-colors">
                  <span className="text-white dark:text-black font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  KimByeongNyeon
                </span>
              </motion.div>
            </Link>

            <div className="flex items-center space-x-2">
              <ThemeToggle />
              {/* 모바일 메뉴 버튼 */}
              <button 
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                onClick={toggleMobileMenu} 
                aria-label="Toggle menu"
              >
              <div className="relative w-5 h-5">
                <motion.span
                  className="absolute top-1 left-0 w-5 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full"
                  animate={{
                    top: isMenuOpen ? "10px" : "2px",
                    rotate: isMenuOpen ? "45deg" : "0deg",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-2.5 left-0 w-5 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    width: isMenuOpen ? "0" : "20px",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-4 left-0 w-5 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full"
                  animate={{
                    top: isMenuOpen ? "10px" : "18px",
                    rotate: isMenuOpen ? "-45deg" : "0deg",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
            </div>
          </div>

          {/* 모바일 메뉴 */}
          <motion.div 
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-4 pb-2 border-t border-gray-100 dark:border-white/10 mt-4">
              <div className="flex flex-col space-y-2">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === route.path 
                        ? "bg-gray-100 dark:bg-white/10 text-black dark:text-white" 
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* 데스크탑 플로팅 네비게이션 */}
      <div className="hidden md:block">
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
          <ThemeToggle />
          
          {/* 플로팅 메뉴 버튼 */}
          <motion.button
            className="w-14 h-14 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-white/10 flex items-center justify-center hover:shadow-xl transition-all duration-300"
            onClick={toggleFloatingMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              animate={{ rotate: isFloatingMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-5 h-5 relative">
                <span className="absolute top-2 left-0 w-5 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full"></span>
                <span className="absolute top-4 left-0 w-5 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full"></span>
              </div>
            </motion.div>
          </motion.button>
        </div>

        {/* 플로팅 메뉴 */}
        <AnimatePresence>
          {isFloatingMenuOpen && (
            <motion.div
              className="fixed right-28 top-1/2 -translate-y-1/2 z-40"
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 100, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-white/10 py-4 px-2 min-w-[120px]">
                <div className="flex flex-col space-y-1">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center relative ${
                        pathname === route.path 
                          ? "bg-gray-100 dark:bg-white/10 text-black dark:text-white" 
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                      }`}
                      onClick={() => setIsFloatingMenuOpen(false)}
                    >
                      {route.label}
                      {pathname === route.path && (
                        <motion.div 
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-black dark:bg-white rounded-full"
                          layoutId="floating-indicator"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 오버레이 (플로팅 메뉴가 열렸을 때) */}
        <AnimatePresence>
          {isFloatingMenuOpen && (
            <motion.div
              className="fixed inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFloatingMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* 모바일에서만 네비게이션 바 아래 여백 */}
      <div className="h-20 md:h-0"></div>
    </>
  );
}
