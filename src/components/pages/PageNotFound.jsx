import { useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
        PAGE NOT FOUND
      </h1>
      <div className="flex flex-col items-center">
        <p className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark my-4">
          The entered url is either misspelt or does not exist.
        </p>
        <Link
          to="/"
          className="flex w-24 max-h-8 min-h-6 text-xs items-center bg-gray-400 text-gray-950 hover:text-navBarText-light rounded-full px-4 py-2 hover:bg-gradient-lightStart dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
        >
          <IoHome className="mr-2 size-4" />
          Home
        </Link>
      </div>
    </>
  );
}
