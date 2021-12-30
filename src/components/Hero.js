import * as React from "react";
import Typewriter from "typewriter-effect";
import { dollar } from "../css/hero.module.css";
import { StaticImage } from "gatsby-plugin-image";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center py-10 container lg:py-20"
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
                  `<span class=${dollar}>Greetings 👋, I'm Branden Youngs</span>`
                )
                .pauseFor(500)
                .typeString(
                  `<br><span class=${dollar}>A passionate, hard working, "full stack" developer, devOps tinkerer, technical SEO researcher, and overall web enthusiast.</span>`
                )
                .pauseFor(500)
                .typeString(`<br><span class=${dollar}>🧪 🔨 🚀 </span>`)
                .start();
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
