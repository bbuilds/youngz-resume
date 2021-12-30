import * as React from "react";
import PageLayout from "../layouts/page-layout";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import WorkItem from "../components/WorkItem";

const IndexPage = () => {
  return (
    <PageLayout>
      <Hero />
      <section id="expeirence">
        <div className="container">
          <Heading headinglevel={2}>Experience</Heading>
          <div className="flex flex-wrap">
            <WorkItem
              position="Frontend Engineer"
              company="tray.io"
              year="2021 - present"
              description={`• Migrated the https://tray.io/documentation platform from Gatsby to Next.js. Improved build time (~80% faster), test coverage (~500 additional unit and integration tests ), and Google Core Web Vitals (100 SEO score on Lighthouse)\n\n• Reviewing and redesigning the frontend architecture of tray Embedded. Contributing to improving the overall code quality by migrating legacy packages into encapsulated libraries within a mono-repo using NX and yarn workspaces\n\n• Planning and delivering the new frontend interview task assignment as part of tray recruitment process\n\n• Mentoring Junior Engineers\n\n• Tech Stack: TypeScript, React, Apollo, GraphQL, Node.js, Next.js, Gatsby, Redux`}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndexPage;
