export default function StackItem({ item }) {
  const { url, imgName, title, subtitle } = item;
  return (
    <div className="flex">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`${title} — ${subtitle}`}
        className="p-2 hover:bg-neutral-400 hover:bg-opacity-80 rounded-md dark:text-white dark:hover:bg-neutral-700 dark:hover:bg-opacity-80"
      >
        <div className="flex justify-between space-x-3 items-center">
          <img
            className="flex flex-wrap w-12"
            src={`/logos/${imgName}`}
            alt={`${title} logo`}
            loading="lazy"
            decoding="async"
            width="48"
            height="48"
          />
          <div>
            <p className="text-bodyText-primaryLight dark:text-bodyText-primaryDark">
              {title}
            </p>
            <p className="text-wrap text-bodyText-secondaryLight dark:text-bodyText-secondaryDark">
              {subtitle}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
