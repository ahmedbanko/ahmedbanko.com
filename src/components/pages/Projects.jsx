import { useEffect } from "react";
import { PROJECTS } from "../../data.js";
import ProjectItem from "../ProjectItem.jsx";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects — Ahmed Banko | Full Stack Software Engineer</title>
        <meta name="description" content="Selected software projects by Ahmed Banko: LoyaltiesHub, RIMP, Bicycle Trip Planner, Chess Clubs Management System, Qamislo XE and more — built with Node.js, React, Flutter, Django, AWS." />
        <link rel="canonical" href="https://ahmedbanko.com/projects" />
        <meta property="og:url" content="https://ahmedbanko.com/projects" />
        <meta property="og:title" content="Projects — Ahmed Banko" />
        <meta property="og:description" content="Selected software projects by Ahmed Banko, built with Node.js, React, Flutter, Django and AWS." />
      </Helmet>
      <main>
        <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
          PROJECTS
        </h1>
        <ul className="space-y-4">
          {PROJECTS.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </ul>
      </main>
    </>
  );
}
