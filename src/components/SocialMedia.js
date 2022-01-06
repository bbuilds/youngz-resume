import * as React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const social = [
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/branden-builds/",
  },
  {
    title: "GitHub",
    icon: FaGithubSquare,
    link: "https://github.com/bbuilds",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center mt-6 lg:justify-end">
      {social.map((item, index) => {
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-2"
            data-aos="fade-right"
            data-aos-delay={`${index}00`}
          >
            <item.icon className="h-7 w-auto" />
            <span className="sr-only">{item.title}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
