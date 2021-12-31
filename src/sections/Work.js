import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Heading from "../components/Heading";
import WorkItem from "../components/WorkItem";

const WorkSection = () => {
  const data = useStaticQuery(graphql`
    query ExperiencQuery {
      allExperienceJson {
        nodes {
          company
          date
          description
          id
          position
        }
      }
    }
  `);

  const experienceItems = data.allExperienceJson.nodes;

  return (
    <section id="experience">
      <div className="container">
        <Heading headinglevel={2}>Experience</Heading>
        <div className="flex flex-wrap">
          {experienceItems &&
            experienceItems.map((item) => {
              return (
                <WorkItem
                  company={item.company}
                  date={item.date}
                  description={item.description}
                  id={item.id}
                  position={item.position}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
