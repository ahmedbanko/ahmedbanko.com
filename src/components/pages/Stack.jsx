import StackItem from "../StackItem";
import { STACK_ITEMS } from "../../data";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Stack() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tech Stack — Ahmed Banko | AWS, React, Node.js, Python, Django</title>
        <meta name="description" content="Technologies Ahmed Banko works with: AWS, Docker, OpenAI API, Dagster, Django, PostgreSQL, Python, Node.js, React, Java, Tailwind, Git and more." />
        <link rel="canonical" href="https://ahmedbanko.com/stack" />
        <meta property="og:url" content="https://ahmedbanko.com/stack" />
        <meta property="og:title" content="Tech Stack — Ahmed Banko" />
        <meta property="og:description" content="Technologies Ahmed Banko works with: AWS, Docker, OpenAI API, Django, Python, Node.js, React and more." />
      </Helmet>
      <main>
        <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
          STACK
        </h1>
        <ul className="space-y-2">
          {STACK_ITEMS.map((item, index) => (
            <StackItem key={index} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}
