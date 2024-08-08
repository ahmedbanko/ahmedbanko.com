import { useState } from "react";
import { IoSunny, IoMoon, IoMenu, IoClose } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

export default function NabBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((oldVal) => !oldVal);
  };

  const closeMenu = () => {
    if(isOpen){
      setIsOpen(false);
    }
  };

  const { toggleIsDark } = useTheme();
  function handleThemeToggle() {
    toggleIsDark((prevVal) => !prevVal);
  }
  const navLinkClass =
    "block whitespace-nowrap pb-0.5 hover:text-zinc-800 dark:hover:text-cyan-700 text-md text-navBarText-light dark:text-navBarText-dark";
  const navLinkActiveClass = "underline decoration-2 underline-offset-4";

  const navBarButtons = (
    <>
       <NavLink
        to="/"
        onClick={closeMenu}
        className={({isActive}) => isActive ? `${navLinkClass} ${navLinkActiveClass}` : navLinkClass}
      >
        {"{ A Banko }"}
      </NavLink>

      <NavLink
        to="/projects"
        onClick={closeMenu}
        className={({isActive}) => isActive ? `${navLinkClass} ${navLinkActiveClass}` : navLinkClass}
      >
        {"Projects"}
      </NavLink>
      <NavLink
        to="/stack"
        onClick={closeMenu}
        className={({isActive}) => isActive ? `${navLinkClass} ${navLinkActiveClass}` : navLinkClass}
      >
        {"Stack"}
      </NavLink>
      <NavLink
        to="/education"
        onClick={closeMenu}
        className={({isActive}) => isActive ? `${navLinkClass} ${navLinkActiveClass}` : navLinkClass}
      >
        {"Education"}
      </NavLink>
      <NavLink
        to="/why-me"
        onClick={closeMenu}
        className={({isActive}) => isActive ? `${navLinkClass} ${navLinkActiveClass}` : navLinkClass}
      >
        {"Why hire me?"}
      </NavLink>
      <NavLink
        to="/contact"
        onClick={closeMenu}
        className={({isActive}) => isActive ? `${navLinkClass} ${navLinkActiveClass}` : navLinkClass}
      >
        {"Contact"}
      </NavLink>
    </>
  );

  return (
    <nav
      className={
        "p-4 sticky top-0 dark:bg-gradient-to-r dark:from-custom-gradient-dark-start dark:via-custom-gradient-dark-via dark:to-custom-gradient-dark-end bg-gradient-to-r from-custom-gradient-light-start to-custom-gradient-light-end z-50"
      }
    >
      <div className="flex  justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navBarButtons}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md text-navBarText-light dark:text-navBarText-dark md:hover:text-white md:hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? (
                <IoClose className="block h-6 w-6" />
              ) : (
                <IoMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center">
          {!isOpen && (
            <>
              <IoSunny
                className="text-navBarText-dark size-4.5 md:hover:fill-yellow-300 hidden dark:block"
                onClick={handleThemeToggle}
              />
              <IoMoon
                className="text-navBarText-light size-4.5 md:hover:fill-zinc-900 block dark:hidden"
                onClick={handleThemeToggle}
              />
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navBarButtons}
          </div>
        </div>
      )}
    </nav>
  );
}
