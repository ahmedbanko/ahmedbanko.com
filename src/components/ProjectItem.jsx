import { FaGithub } from "react-icons/fa";
import { TbAlpha } from "react-icons/tb";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function ProjectItem({ project }) {
  return (
    <li className="container mx-auto">
      <article className="flex flex-wrap justify-between md:space-x-10">
        <div className="flex">
          <div className="container mx-auto">
            {project.url ? (
              <a
                className="text-m font-medium text-bodyText-primaryLight truncate dark:text-bodyText-primaryDark"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${project.title}`}
              >
                <div className="flex flex-wrap items-center">
                  <h2 className="text-base font-bold inline">{project.title}</h2>
                  <FaExternalLinkAlt className="size-3 ml-1" aria-hidden="true" />
                </div>
              </a>
            ) : (
              <h2 className="text-base font-bold text-bodyText-primaryLight dark:text-bodyText-primaryDark">
                {project.title}
              </h2>
            )}
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
            <span className="mr-1">Discontinued</span>
          </button>
        ) : project.sourceCode ? (
          <a
            className="flex min-w-32 max-h-8 min-h-6 text-xs items-center bg-gray-400 text-gray-950 hover:text-navBarText-light rounded-full px-4 py-2 hover:bg-gradient-lightStart dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            title={`View source code for ${project.title} on GitHub`}
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <FaGithub className="mr-2 size-4" />
            View Source
          </a>
        ) : project.url ? (
          <button
            className="flex justify-center min-w-32 max-h-8 min-h-6 text-xs bg-gray-300 dark:bg-gray-800 text-gray-950 rounded-full py-2 dark:text-white"
            disabled
          >
            <RiGitRepositoryPrivateLine className="mr-1 size-4" />
            <span className="mr-1">Private</span>
          </button>
        ) : (
          <button
            className="flex justify-center min-w-32 max-h-8 min-h-6 text-xs bg-gray-300 dark:bg-gray-800 text-gray-950 rounded-full py-2 dark:text-white"
            disabled
          >
            <TbAlpha className="mr-1 size-4" />
            <span className="mr-1">Alpha</span>
          </button>
        )}
      </article>
    </li>
  );
}
