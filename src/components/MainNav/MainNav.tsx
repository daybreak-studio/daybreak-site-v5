import React from "react";
import Logo from "../Logo/Logo";

type Props = {};

const MainNav = (props: Props) => {
  return (
    <div className="grid grid-cols-8 h-[60vh] mx-2 my-2 gap-2">
      <h1 className="font-brand-md max-w-[30ch] col-span-5">
        Daybreak Studio combines technology with design to shape brand, web, and
        software experiences.
      </h1>
      <div className="col-span-2 flex flex-col gap-2 mt-1">
        <a className="font-cond-xs opacity-50">hello@daybreak.studio</a>
        <a className="font-cond-xs opacity-50">careers@daybreak.studio</a>
      </div>
      <div className="col-span-1 flex flex-col gap-2 mt-1">
        <a className="font-cond-xs opacity-50">Instagram</a>
        <a className="font-cond-xs opacity-50">Twitter</a>
      </div>

      <div className="col-span-5 flex flex-row items-end justify-start">
        <Logo />
      </div>
      <nav className="col-span-2 flex flex-row gap-6 items-end mb-4">
        <a className="font-cond-xs opacity-50">Home</a>
        <a className="font-cond-xs opacity-50">About</a>
        <a className="font-cond-xs opacity-50">Team</a>
        <a className="font-cond-xs opacity-50">Contact</a>
      </nav>
      <div className="col-span-1 flex flex-row gap-6 mb-4 items-end font-cond-xs opacity-50 ">
        Stay up to date
      </div>
    </div>
  );
};

export default MainNav;
