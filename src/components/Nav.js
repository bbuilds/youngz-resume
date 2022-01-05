import * as React from "react";
import Logo from "./Logo";
import { Link } from "gatsby";
import { useAppContext } from "../context/AppContext";
import SocialMedia from "./SocialMedia";

const navItems = [
  {
    title: "Home",
    href: "#top",
  },
  {
    title: "About",
    href: "#about-me",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Nav = () => {
  const { mobileMenuState, falseMenuState } = useAppContext();

  React.useEffect(() => {
    const handleTabletChange = (e) => {
      if (e.matches) {
        falseMenuState();
      }
    };
    let query = window.matchMedia("(min-width: 768px)");
    query.addEventListener("change", handleTabletChange);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (mobileMenuState) {
      document.querySelector("body").classList.add("nav-open");
    } else {
      document.querySelector("body").classList.remove("nav-open");
    }
  }, [mobileMenuState]);
  return (
    <>
      <nav className="main-nav animated pt-4 px-6 bg-byBlack border-r border-neutral-700 w-48 h-full fixed top-0 bottom-0 transition ease-in-out duration-300 z-30 -translate-x-full md:translate-x-0">
        <Logo />
        <ul className="mt-8">
          {navItems.map((item, index) => {
            return (
              <li className="mb-4" key={index}>
                <Link to={item.href} className="lowercase flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="66.217"
                    height="66.217"
                    viewBox="0 0 66.217 66.217"
                    className="w-1 h-1 mr-2"
                  >
                    <rect
                      id="Rectangle_244"
                      data-name="Rectangle 244"
                      width="66.217"
                      height="66.217"
                      transform="translate(66.217) rotate(90)"
                      fill="currentColor"
                    />
                  </svg>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <SocialMedia />
      </nav>
      {mobileMenuState && (
        <div
          class="fixed inset-0 bg-black opacity-50 z-10"
          role="button"
          tabIndex="0"
          onClick={falseMenuState}
          aria-label="Closes drawer menu"
          onKeyDown={(event) =>
            event.key === "Enter" || event.key === "Escape"
              ? falseMenuState
              : {}
          }
        ></div>
      )}
    </>
  );
};

export default Nav;
