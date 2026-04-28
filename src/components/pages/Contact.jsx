import {
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoDownload,
} from "react-icons/io5";
import CV from "/A_Banko_CV.pdf";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconClass =
    "cursor-pointer text-bodyText-secondaryLight dark:text-bodyText-secondaryDark";
  return (
    <div>
      <Helmet>
        <title>Contact — Ahmed Banko | Email, LinkedIn, GitHub</title>
        <meta name="description" content="Get in touch with Ahmed Banko. Reach out by email at contact@ahmedbanko.com or via LinkedIn and GitHub." />
        <link rel="canonical" href="https://ahmedbanko.com/contact" />
        <meta property="og:url" content="https://ahmedbanko.com/contact" />
        <meta property="og:title" content="Contact Ahmed Banko" />
        <meta property="og:description" content="Reach out by email, LinkedIn or GitHub." />
      </Helmet>
      <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-5">
        CONTACT
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 mb-2">
        <div className="flex flex-col items-center justify-center mb-5">
          <label className="text-center text-bodyText-secondaryLight dark:text-bodyText-secondaryDark">
            Do you have any questions or would you like to collaborate?
          </label>
          <label className="text-center mb-4 text-bodyText-secondaryLight dark:text-bodyText-secondaryDark">
            Drop me a line via email or message.
          </label>
          <address className="not-italic flex flex-wrap grow items-center gap-4">
            <a href="mailto:contact@ahmedbanko.com" aria-label="Email Ahmed Banko">
              <IoMailOutline size={48} className={iconClass} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-banko"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Ahmed Banko on LinkedIn"
            >
              <IoLogoLinkedin size={48} className={iconClass} />
            </a>
            <a
              href="https://github.com/ahmedbanko"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Ahmed Banko on GitHub"
            >
              <IoLogoGithub size={48} className={iconClass} />
            </a>
          </address>
        </div>
        <a
          className="flex min-w-32 max-h-8 min-h-6 text-xs items-center bg-gray-400 text-gray-950 hover:text-navBarText-light rounded-full px-4 py-2 hover:bg-gradient-lightStart dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
          href={CV}
          target="_blank"
          rel="noopener"
          download
          aria-label="Download Ahmed Banko's CV (PDF)"
        >
          <IoDownload className="mr-2 size-4" />
          Download CV
        </a>
      </div>
    </div>
  );
}
