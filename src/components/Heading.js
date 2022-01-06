import * as React from "react";
import { fancyHeading } from "../css/heading.module.css";

const Heading = ({ headinglevel = 2, children }) => {
  const Tag = "h" + headinglevel;
  return (
    <Tag
      className={`${fancyHeading} lowercase mb-5 lg:mb-8 lg:tracking-tighter`}
      data-aos="fade-up"
    >
      {children}
    </Tag>
  );
};

export default Heading;
