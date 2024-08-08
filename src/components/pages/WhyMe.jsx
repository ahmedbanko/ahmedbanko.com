import { useEffect } from "react";
import { WHY_ME } from "../../data";

export default function WhyMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
        WHY HIRE ME?
      </h1>
      <ul className="mt-5">
        {WHY_ME.map((reason, index) => (
          <li key={index}>
            <p className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark">
              <span>&#8226; </span>
              {reason}
            </p>
          </li>
        ))}
      </ul>

      <p className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark mt-4">
        These points highlight my strong academic background, technical skills,
        project experience, teamwork abilities, and passion for technology,
        making me a valuable asset to any team.
      </p>
    </>
  );
}
