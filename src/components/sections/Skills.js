import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as FontAwesome from "react-icons/fa";
import Heading from "../Heading";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query AllSkills {
      allSkillsJson {
        edges {
          node {
            icon
            id
            name
            tech
          }
        }
      }
    }
  `);

  return (
    <section id="skills" className="py-10 lg:py-20">
      <div className="container">
        <Heading headinglevel={2}>Skills</Heading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {data.allSkillsJson.edges.map(({ node }, index) => {
            const faIcon = FontAwesome[node.icon];
            return (
              <div
                key={node.id}
                className="p-4 border border-zinc-600 flex items-center rounded-md"
              >
                {React.createElement(faIcon)}
                <div className="pl-4">
                  <h6 className="text-xs font-semibold leading-tight">
                    {node.name}
                  </h6>
                  <h6 className="mt-2 leading-tight text-xs">({node.tech})</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
