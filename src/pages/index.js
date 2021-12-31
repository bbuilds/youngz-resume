import * as React from "react";
import PageLayout from "../layouts/page-layout";
import Hero from "../components/Hero";
import WorkSection from "../sections/Work";
const IndexPage = () => {
  return (
    <PageLayout>
      <Hero />
      <WorkSection />
    </PageLayout>
  );
};

export default IndexPage;
