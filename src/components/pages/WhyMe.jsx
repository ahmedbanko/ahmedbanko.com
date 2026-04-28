import { useEffect } from "react";
import { WHY_ME_TECHNICAL, WHY_ME_SOFT_SKILLS } from "../../data";
import { Helmet } from "react-helmet-async";

export default function WhyMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Why Hire Me — Ahmed Banko | AWS Certified Full Stack Engineer</title>
        <meta name="description" content="Why hire Ahmed Banko: AWS certified Full Stack Software Engineer with cloud DevOps expertise, First-Class CS from King's College London, multilingual (English, Kurdish, Arabic, Turkish)." />
        <link rel="canonical" href="https://ahmedbanko.com/why-me" />
        <meta property="og:url" content="https://ahmedbanko.com/why-me" />
        <meta property="og:title" content="Why Hire Ahmed Banko" />
        <meta property="og:description" content="AWS certified Full Stack Engineer with cloud DevOps expertise and First-Class Computer Science from King's College London." />
      </Helmet>
      <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
        WHY HIRE ME?
      </h1>
      
      <h2 className="text-xl font-bold text-bodyText-primaryLight dark:text-bodyText-primaryDark mt-6 mb-3">
        Technical Expertise & Experience
      </h2>
      <ul className="mb-6">
        {WHY_ME_TECHNICAL.map((reason, index) => (
          <li key={index}>
            <p className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark">
              <span>&#8226; </span>
              {reason}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-bodyText-primaryLight dark:text-bodyText-primaryDark mb-3">
        Personal & Soft Skills
      </h2>
      <ul className="mb-6">
        {WHY_ME_SOFT_SKILLS.map((reason, index) => (
          <li key={index}>
            <p className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark">
              <span>&#8226; </span>
              {reason}
            </p>
          </li>
        ))}
      </ul>

      <p className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark mt-4">
        This combination of technical expertise, professional experience, and strong interpersonal skills makes me a valuable asset to any development team.
      </p>
    </>
  );
}
