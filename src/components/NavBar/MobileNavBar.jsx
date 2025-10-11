import React, { useRef, useEffect, useState } from "react";
import { IoSunny, IoMoon, IoSchoolOutline } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBriefcase,
  FiUser,
  FiMessageSquare,
  FiChevronRight,
} from "react-icons/fi";
import { GoStack } from "react-icons/go";

export default function MobileNavBar() {
  const { toggleIsDark } = useTheme();
  const navRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  function handleThemeToggle() {
    toggleIsDark((prevVal) => !prevVal);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        setShowScrollIndicator(!isAtEnd);
      }
    };

    if (navRef.current) {
      navRef.current.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
    }

    return () => {
      if (navRef.current) {
        navRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);


  const navLinkBaseClass =
    "flex flex-col items-center justify-center w-20 h-16 rounded-lg transition-colors hover:bg-opacity-0";
  const navLinkActiveClass =
    "bg-gray-800 text-gray-300 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-800 hover:bg-opacity-100";
  const navLinkInactiveClass =
    "text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-600";
  const iconsSize = 19;

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-gradient-to-r from-custom-gradient-light-start to-custom-gradient-light-end dark:bg-gradient-to-r dark:from-custom-gradient-dark-start dark:via-custom-gradient-dark-via dark:to-custom-gradient-dark-end text-gray-300 z-50">
      <div className="relative flex items-center justify-between py-1 overflow-x-auto scroll-smooth" ref={navRef}>
        {showScrollIndicator && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-gray-900 via-gray-900 to-transparent dark:from-gray-800 dark:via-gray-800 dark:to-transparent w-8 h-full flex items-center justify-end pr-1 pointer-events-none z-10">
            <FiChevronRight className="text-gray-300 animate-pulse" size={14} />
          </div>
        )}
        <ul className="flex gap-1 px-2 text-xs font-semibold text-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${navLinkBaseClass} ${navLinkActiveClass}`
                  : `${navLinkBaseClass} ${navLinkInactiveClass}`
              }
            >
              <div className="flex flex-col items-center gap-1">
                <FiHome size={iconsSize} />
                <p>
                  <b>{"Home"}</b>
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? `${navLinkBaseClass} ${navLinkActiveClass}`
                  : `${navLinkBaseClass} ${navLinkInactiveClass}`
              }
            >
              <div className="flex flex-col items-center gap-1">
                <FiBriefcase size={iconsSize} />
                <p>
                  <b>{"Projects"}</b>
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stack"
              className={({ isActive }) =>
                isActive
                  ? `${navLinkBaseClass} ${navLinkActiveClass}`
                  : `${navLinkBaseClass} ${navLinkInactiveClass}`
              }
            >
              <div className="flex flex-col items-center gap-1">
                <GoStack size={iconsSize} />
                <p>
                  <b>{"Stack"}</b>
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? `${navLinkBaseClass} ${navLinkActiveClass}`
                  : `${navLinkBaseClass} ${navLinkInactiveClass}`
              }
            >
              <div className="flex flex-col items-center gap-1">
                <IoSchoolOutline size={iconsSize} />
                <p>
                  <b>{"Experience"}</b>
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/why-me"
              className={({ isActive }) =>
                isActive
                  ? `${navLinkBaseClass} ${navLinkActiveClass}`
                  : `${navLinkBaseClass} ${navLinkInactiveClass}`
              }
            >
              <div className="flex flex-col items-center gap-1">
                <FiUser size={iconsSize} />
                <p>
                  <b>{"Why me"}</b>
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${navLinkBaseClass} ${navLinkActiveClass}`
                  : `${navLinkBaseClass} ${navLinkInactiveClass}`
              }
            >
              <div className="flex flex-col items-center gap-1">
                <FiMessageSquare size={iconsSize} />
                <p>
                  <b>{"Contact"}</b>
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <button
              className={`${navLinkBaseClass}`}
              onClick={handleThemeToggle}
            >
              <IoSunny
                size={iconsSize}
                className="text-navBarText-dark size-4.5 md:hover:fill-yellow-300 hidden dark:block"
              />
              <IoMoon
                size={iconsSize}
                className="text-navBarText-light size-4.5 md:hover:fill-zinc-900 block dark:hidden"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
