import { useEffect } from "react";
import { EDUCATION } from "../../data";
import EducationItem from "../EducationItem";
import { Helmet } from "react-helmet-async";

export default function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Experience & Education — Ahmed Banko | Senior Software Engineer at Paperplanes UK</title>
        <meta name="description" content="Ahmed Banko's professional experience and education: Senior Software Engineer at Paperplanes UK and First-Class BSc Computer Science from King's College London." />
        <link rel="canonical" href="https://ahmedbanko.com/experience" />
        <meta property="og:url" content="https://ahmedbanko.com/experience" />
        <meta property="og:title" content="Experience & Education — Ahmed Banko" />
        <meta property="og:description" content="Senior Software Engineer at Paperplanes UK; First-Class BSc Computer Science, King's College London." />
      </Helmet>
      <main>
        <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
          EXPERIENCE
        </h1>
        <div className="md:px-3 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-custom-gradient-dark-via dark:before:via-zinc-400 before:to-transparent">
          {EDUCATION.map((item, index) => (
            <EducationItem key={index} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
