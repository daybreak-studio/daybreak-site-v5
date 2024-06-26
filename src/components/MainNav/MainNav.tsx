"use client";

import React, { RefObject, useRef } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Scrim from "../Scrim/Scrim";

type Props = {};

const MainNav = (props: Props) => {
  const titleAreaRef = useRef() as RefObject<HTMLDivElement>;
  const { scrollYProgress } = useScroll({
    target: titleAreaRef,
    offset: ["start start", "end start"],
  });

  const logoScale = useTransform(scrollYProgress, [0.95, 1], [2, 1]);
  const logoYCompensate = useTransform(scrollYProgress, [0.95, 1], [3, 0]);

  return (
    <>
      <div
        className="grid grid-cols-8 h-[60vh] mx-2 my-2 gap-2"
        ref={titleAreaRef}
      >
        <h1 className="font-brand-md max-w-[30ch] col-span-5">
          Daybreak Studio combines technology with design to shape brand, web,
          and software experiences.
        </h1>
        <div className="col-span-2 flex flex-col gap-2 mt-1">
          <a className="font-cond-xs opacity-50">hello@daybreak.studio</a>
          <a className="font-cond-xs opacity-50">careers@daybreak.studio</a>
        </div>
        <div className="col-span-1 flex flex-col gap-2 mt-1">
          <a className="font-cond-xs opacity-50">Instagram</a>
          <a className="font-cond-xs opacity-50">Twitter</a>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-2 sticky mx-2 py-2 top-0 h-fit z-10 bg-white">
        <motion.div
          style={{
            scale: logoScale,
            y: logoYCompensate,
            transformOrigin: "bottom left",
            // transition: "transform .3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="col-start-1 flex flex-row items-end justify-start my-2 h-12"
        >
          <Logo />
        </motion.div>
        <nav className="col-start-6 col-span-2 flex flex-row gap-6 items-end mb-4">
          <Link href={"./"} className="font-cond-xs opacity-50">
            Home
          </Link>
          <Link href={"./about"} className="font-cond-xs opacity-50">
            About
          </Link>
          <Link href={"./team"} className="font-cond-xs opacity-50">
            Team
          </Link>
          <Link href={"./contact"} className="font-cond-xs opacity-50">
            Contact
          </Link>
        </nav>
        <div className="col-span-1 flex flex-row gap-6 mb-4 items-end font-cond-xs opacity-50 ">
          Stay up to date
        </div>
      </div>
    </>
  );
};

export default MainNav;
