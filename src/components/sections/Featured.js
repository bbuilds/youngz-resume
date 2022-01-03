import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "../Heading";

const Featured = () => {
  return (
    <section id="projects" className="py-10">
      <div className="container">
        <Heading headinglevel={2}>Featured Projects</Heading>
      </div>
    </section>
  );
};

export default Featured;
