import * as React from "react";
import Typewriter from "typewriter-effect";
import { dollar, hero } from "../css/hero.module.css";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

const Hero = () => {
  return (
    <section
      id="hero"
      className={cn(
        "flex items-center justify-center py-10 max-w-6xl mx-auto",
        hero
      )}
    >
      <h1 className="sr-only">Branden Youngs Online Resume</h1>
      <div className="hidden lg:block md:w-1/3 p-8">
        <div className="image-wrapper flex justify-center items-center  overflow-hidden rounded-lg shadow">
          <StaticImage
            src="../images/branden-youngs-headshot.jpg"
            alt="branden Youngs Headshot"
            placeholder="dominantColor"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3 md:pl-10">
        <div className="bg-black/50 p-8 rounded-lg shadow">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString(
                  `<span class=${dollar}>Greetings &#x1F44B;, I'm Branden Youngs</span>`
                )
                .pauseFor(500)
                .typeString(
                  `<br><span class=${dollar}>A "full stack" developer, devOps tinkerer, technical SEO researcher, and overall web enthusiast.</span>`
                )
                .pauseFor(500)
                .typeString(
                  `<br><span class=${dollar}>I enjoy leading, teaching, and learning on these topics.</span>`
                )
                .pauseFor(500)
                .typeString(
                  `<br><span class=${dollar}>Let's build some digital expierences together.</span>`
                )
                .start();
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
