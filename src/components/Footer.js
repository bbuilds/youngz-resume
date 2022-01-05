import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container text-xs leading-relaxed opacity-75 text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} Branden Youngs. Licensed
          under MIT.
        </p>
      </div>
    </section>
  );
};

export default Footer;
