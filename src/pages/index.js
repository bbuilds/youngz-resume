import * as React from "react";
import PageLayout from "../layouts/page-layout";
import Hero from "../components/Hero";
import WorkSection from "../components/sections/Work";
import Skills from "../components/sections/Skills";
import Featured from "../components/sections/Featured";
import BlogPosts from "../components/sections/BlogPosts";

const IndexPage = () => {
  return (
    <PageLayout>
      <Hero />
      <WorkSection />
      <Skills />
      <Featured />
      <BlogPosts />
    </PageLayout>
  );
};

export default IndexPage;
