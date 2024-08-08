import Typewriter from "../Typewriter.jsx";
import { ABOUT_STATEMENT } from "../../data.js";
import { Fragment } from "react";

export default function About() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
        <Typewriter text="{ A BANKO }" delay={40} />
      </h1>
      <span className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark">
        {ABOUT_STATEMENT.split("\n").map((line, index) => (
          <Fragment key={index}>
            {line}
            {index !== ABOUT_STATEMENT.split("\n").length - 1 && <br />}
          </Fragment>
        ))}
      </span>
    </>
  );
}
