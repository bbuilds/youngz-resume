import * as React from "react";
import { fancyHeading } from "../css/heading.module.css";

const Heading = ({ headinglevel = 2, children }) => {
  const Tag = "h" + headinglevel;
  return (
    <Tag
      className={`${fancyHeading} lowercase mb-3 md:mb-5 lg:mb-8`}
      data-aos="fade-up"
    >
      {children}
    </Tag>
  );
};

export default Heading;
