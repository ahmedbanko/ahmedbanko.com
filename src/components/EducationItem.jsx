import { IoSchool } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { useState } from "react";

export default function EducationItem({ item }) {
  const { institution, startYear, endYear, description, modules, type } = item;
  const [showModules, setShowModules] = useState(false);

  const toggleModules = () => {
    setShowModules(!showModules);
  };

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 dark:border-zinc-400 bg-slate-300 group-[.is-active]:bg-bodyBg-light text-slate-500 group-[.is-active]:text-gray-50 shadow shrink-0 order-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        {type === 'work' ? (
          <IoBriefcase className="size-6 fill-bodyText-primaryLight" />
        ) : (
          <IoSchool className="size-6 fill-bodyText-primaryLight" />
        )}
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-bodyBg-light dark:bg-zinc-900 p-4 rounded border border-zinc-700 shadow">
        <div className="flex flex-col">
          <a className="font-bold text-bodyText-primaryLight dark:text-bodyText-primaryDark">
            {institution}
          </a>
          <a className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark text-xs">
            {startYear} - {endYear}
          </a>
        </div>
        <p
          className="text-sm text-bodyText-secondaryLight dark:text-bodyText-secondaryDark"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        {modules && (
          <button
            className="text-sm text-bodyText-secondaryLight dark:text-bodyText-secondaryDark underline cursor-pointer focus:outline-none"
            onClick={toggleModules}
          >
            {showModules ? "Hide Modules" : "Show Modules"}
          </button>
        )}
        {showModules && modules && (
          <ul className="mt-2 space-y-1">
            {modules.map((module, index) => (
              <li
                key={index}
                className="text-sm text-bodyText-secondaryLight dark:text-bodyText-secondaryDark"
              >
                &#8226; {module}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
