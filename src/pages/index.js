import * as React from "react";
import PageLayout from "../layouts/page-layout";
import Hero from "../components/Hero";
import WorkSection from "../sections/Work";
import Skills from "../sections/Skills";

const IndexPage = () => {
  return (
    <PageLayout>
      <Hero />
      <WorkSection />
      <Skills />
    </PageLayout>
  );
};

export default IndexPage;
