import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SiNotion } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

import Heading from "../Heading";
const Contact = () => {
  const data = useStaticQuery(graphql`
    query PersonalInfo {
      allDataJson {
        nodes {
          detailedResume
          email
          github
          linkedin
          pdfResume
        }
      }
    }
  `);
  const contactInfo = data.allDataJson.nodes[0];

  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <Heading headinglevel={2}>Get in Touch</Heading>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <p className="mb-0">Email:</p>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <p className="mb-0 mt-2">Github:</p>
            <a
              href={`${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.github}
            </a>
            <p className="mb-0 mt-2">Linkedin:</p>
            <a
              href={`${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.linkedin}
            </a>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <p className="mb-0">Detailed Notion Resume:</p>
            <a
              className="flex items-center"
              href={`${contactInfo.detailedResume}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiNotion className="mr-2" /> Notion Resume
            </a>
            <p className="mb-0 mt-2">Minimal PDF Resume:</p>
            <a
              className="flex items-center"
              href={`${contactInfo.pdfResume}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileDownload className="mr-2" /> PDF Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
