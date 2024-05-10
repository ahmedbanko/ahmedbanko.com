import {
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
} from "react-icons/io5";

export default function Contact() {
  const iconClass =
    "cursor-pointer text-bodyText-secondaryLight dark:text-bodyText-secondaryDark";
  return (
    <div className="flex flex-col h-5/6 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <label className="text-center text-bodyText-primaryLight dark:text-bodyText-primaryDark">
          Do you have any questions or would you like to collaborate?
        </label>
        <label className="text-center mb-4 text-bodyText-primaryLight dark:text-bodyText-primaryDark">
          Drop me a line via email or message.
        </label>
        <div className="flex flex-wrap grow items-center gap-4">
          <a href="mailto:contact@ahmedbanko.com">
            <IoMailOutline size={48} className={iconClass} />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-banko" target="_blank">
            <IoLogoLinkedin size={48} className={iconClass} />
          </a>
          <a href="https://github.com/ahmedbanko" target="_blank">
            <IoLogoGithub size={48} className={iconClass} />
          </a>
          <a href="https://www.instagram.com/ahmed.banko/" target="_blank">
            <IoLogoInstagram size={48} className={iconClass} />
          </a>
        </div>
      </div>
    </div>
  );
}
