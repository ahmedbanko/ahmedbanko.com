import Typewriter from "../Typewriter.jsx";
import { ABOUT_STATEMENT } from "../../data.js";
import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ahmed Banko — Full Stack Software Engineer & AWS Certified Cloud Specialist | London</title>
        <meta name="description" content="Ahmed Banko is a London-based Full Stack Software Engineer and AWS certified cloud specialist. First-Class Computer Science graduate from King's College London." />
        <link rel="canonical" href="https://ahmedbanko.com/" />
        <meta property="og:url" content="https://ahmedbanko.com/" />
        <meta property="og:title" content="Ahmed Banko — Full Stack Software Engineer & AWS Certified Cloud Specialist" />
        <meta property="og:description" content="Portfolio of Ahmed Banko: London-based Full Stack Software Engineer, AWS certified, building scalable cloud and data-driven systems." />
      </Helmet>
      <main>
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
      </main>
    </>
  );
}
