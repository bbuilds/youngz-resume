import * as React from "react";
import MenuToggle from "./MenuToggle";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-neutral-700 md:ml-48">
      <Logo classes={"md:hidden"} />
      <MenuToggle />
    </header>
  );
};

export default Header;
