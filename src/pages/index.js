import * as React from "react";
import AOS from "aos";
import PageLayout from "../layouts/page-layout";
import Hero from "../components/Hero";
import WorkSection from "../components/sections/Work";
import Skills from "../components/sections/Skills";
import Featured from "../components/sections/Featured";
import BlogPosts from "../components/sections/BlogPosts";
import Seo from "../components/Seo";
import Contact from "../components/sections/Contact";

const IndexPage = () => {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Seo />
      <PageLayout>
        <Hero />
        <WorkSection />
        <Skills />
        <Featured />
        <BlogPosts />
        <Contact />
      </PageLayout>
    </>
  );
};

export default IndexPage;
