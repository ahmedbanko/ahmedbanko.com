import { useEffect } from "react";
import { PROJECTS } from "../../data.js";
import ProjectItem from "../ProjectItem.jsx";
export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
        PROJECTS
      </h1>
      <ul className="space-y-4">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </ul>
    </>
  );
}
