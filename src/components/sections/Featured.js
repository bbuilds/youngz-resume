import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "../Heading";
import { FiGithub, FiExternalLink } from "react-icons/fi";

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
    <section id="projects" className="py-10">
      <div className="container">
        <Heading headinglevel={2}>Featured Projects</Heading>
        {featuredProjects &&
          featuredProjects.map((project) => {
            const { website, github, id, title, description, tags } = project;
            const image = getImage(project.image);

            return (
              <div key={id}>
                <div className="project-content">
                  <div>
                    hi
                    <h3 className="project-title">
                      <a href={website}>{title}</a>
                    </h3>
                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                    {tags.length && (
                      <ul className="project-tech-list">
                        {tags.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}
                    <div className="project-links">
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <FiGithub />
                        </a>
                      )}
                      {website && (
                        <a
                          href={website}
                          aria-label="External Link"
                          className="external"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <GatsbyImage image={image} alt={title} className="img" />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Featured;
