import { useEffect } from "react";
import { WHY_ME_TECHNICAL, WHY_ME_SOFT_SKILLS } from "../../data";

export default function WhyMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
