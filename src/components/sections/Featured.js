import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "../Heading";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  featuredProject,
  projectTechList,
  projectLinks,
  projectContent,
  projectImage,
} from "../../css/featured-project.module.css";

const Featured = () => {
  const data = useStaticQuery(graphql`
    query AllProjects {
      allProjectsJson {
        nodes {
          description
          id
          website
          title
          tags
          github
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const featuredProjects = data.allProjectsJson.nodes;

  return (
    <section id="projects" className="py-10 lg:py-20">
      <div className="max-w-5xl mx-auto px-2">
        <Heading headinglevel={2}>Featured Projects</Heading>
        {featuredProjects &&
          featuredProjects.map((project) => {
            const { website, github, id, title, description, tags } = project;
            const image = getImage(project.image);

            return (
              <div
                key={id}
                className={`${featuredProject} relative mb-12 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:items-center lg:mb-16`}
                data-aos="fade-up"
              >
                <div className={`${projectImage}`}>
                  <GatsbyImage image={image} alt={title} className="img" />
                </div>
                <div
                  className={`${projectContent} px-1 z-10 -translate-y-6 lg:translate-y-0 lg:px-0`}
                >
                  <div className="p-4 bg-black/75 rounded-lg shadow lg:bg-transparent lg:p-0 lg:shadow-none">
                    <h3 className="project-title mb-4">
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                    </h3>
                    <div
                      className="project-description mb-4 lg:p-4 lg:bg-black/90 lg:rounded-lg lg:shadow"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                    {tags.length && (
                      <ul
                        className={`${projectTechList} flex items-center text-sm mb-4`}
                      >
                        {tags.map((tech, i) => (
                          <li key={i} className="mr-3">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div
                      className={`${projectLinks} flex items-center text-sm mb-4`}
                    >
                      {github && (
                        <a
                          href={github}
                          aria-label="GitHub Link"
                          className="mr-3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub className={`h-6 w-auto`} />
                        </a>
                      )}
                      {website && (
                        <a
                          href={website}
                          aria-label="External Link"
                          className="external"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className={`h-6 w-auto`} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="text-center">
          <a
            href="https://github.com/bbuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View More Projects On Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
