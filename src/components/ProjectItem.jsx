import { FaGithub } from "react-icons/fa";
import { TbAlpha } from "react-icons/tb";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function ProjectItem({ project }) {
  return (
    <li className="container mx-auto">
      <div className="flex flex-wrap justify-between md:space-x-10">
        <div className="flex">
          <div className="container mx-auto">
            <a
              className="text-m font-medium text-bodyText-primaryLight truncate dark:text-bodyText-primaryDark"
              href={project.url}
              target="_blank"
            >
              <div className="flex flex-wrap items-center">
                <b>{project.title}</b>
                {project.url && <FaExternalLinkAlt className="size-3 ml-1" />}
              </div>
            </a>
            <p
              className="text-sm max-w-lg text-bodyText-secondaryLight dark:text-bodyText-secondaryDark"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></p>
          </div>
        </div>
        {project.status === "discontinued" ? (
          <button
            className="flex justify-center min-w-32 max-h-8 min-h-6 text-xs bg-red-300 dark:bg-red-800 text-red-950 rounded-full py-2 dark:text-red-200"
            disabled
          >
            <MdCancel className="mr-1 size-4" />
            <a className="mr-1">Discontinued</a>
          </button>
        ) : project.sourceCode ? (
          <button
            className="flex min-w-32 max-h-8 min-h-6 text-xs items-center bg-gray-400 text-gray-950 hover:text-navBarText-light rounded-full px-4 py-2 hover:bg-gradient-lightStart dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
            onClick={() => window.open(project.sourceCode, "_blank")}
          >
            <FaGithub className="mr-2 size-4" />
            View Source
          </button>
        ) : project.url ? (
          <button
            className="flex justify-center min-w-32 max-h-8 min-h-6 text-xs bg-gray-300 dark:bg-gray-800 text-gray-950 rounded-full py-2 dark:text-white"
            disabled
          >
            <RiGitRepositoryPrivateLine className="mr-1 size-4" />
            <a className="mr-1">Private</a>
          </button>
        ) : (
          <button
            className="flex justify-center min-w-32 max-h-8 min-h-6 text-xs bg-gray-300 dark:bg-gray-800 text-gray-950 rounded-full py-2 dark:text-white"
            disabled
          >
            <TbAlpha className="mr-1 size-4" />
            <a className="mr-1">Alpha</a>
          </button>
        )}
      </div>
    </li>
  );
}
