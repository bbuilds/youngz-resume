import * as React from "react";
import { fancyHeading } from "../css/heading.module.css";

const Heading = ({ headinglevel = 2, children }) => {
  const Tag = "h" + headinglevel;
  return <Tag className={`${fancyHeading} lowercase`}>{children}</Tag>;
};

export default Heading;
