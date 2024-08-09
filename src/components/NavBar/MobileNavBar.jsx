import React, { useRef, useEffect } from "react";
import { IoSunny, IoMoon, IoSchoolOutline } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBriefcase,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { GoStack } from "react-icons/go";

export default function MobileNavBar() {
  const { toggleIsDark } = useTheme();
  const navRef = useRef(null);

  function handleThemeToggle() {
    toggleIsDark((prevVal) => !prevVal);
  }

  useEffect(() => {
    scroll("right");
    setTimeout(() => {
      scroll("left");
    }, 300);
  }, []);

  const scroll = (direction) => {
    if (navRef.current) {
      // Reduce the scroll amount to make the scroll slower
      const scrollAmount = navRef.current.offsetWidth / 2; // Halved the scroll distance

      if (direction === "left") {
        navRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        navRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

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
        <ul className="flex gap-4 px-2 text-xs font-semibold text-center">
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
              to="/education"
              className={({ isActive }) =>
                isActive
                  ? `${navLinkBaseClass} ${navLinkActiveClass}`
                  : `${navLinkBaseClass} ${navLinkInactiveClass}`
              }
            >
              <div className="flex flex-col items-center gap-1">
                <IoSchoolOutline size={iconsSize} />
                <p>
                  <b>{"Education"}</b>
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
