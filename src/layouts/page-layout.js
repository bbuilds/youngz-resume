import * as React from "react";
import { AppWrapper } from "../context/AppContext";
import AOS from "aos";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const PageLayout = ({ children }) => {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <AppWrapper>
      <Header />
      <Nav />
      <main className="md:ml-48 py-4 px-2 lg:p-10 lg:pb-4">
        {children}
        <Footer />
      </main>
    </AppWrapper>
  );
};

export default PageLayout;
