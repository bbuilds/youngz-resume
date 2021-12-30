import * as React from "react";
import { AppWrapper } from "../context/AppContext";
import Header from "../components/Header";
import Nav from "../components/Nav";

const PageLayout = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <Nav />
      <main className="md:ml-48 p-10">{children}</main>
    </AppWrapper>
  );
};

export default PageLayout;
