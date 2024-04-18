import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {};

const projects = [
  {
    title: "Superpower",
    description: "A new dawn for healthcare",
    area: ["Brand", "Web", "Product"],
    image: "/projects/cover-hypercard.png",
    format: "big",
  },
  {
    title: "Superpower",
    description: "A new dawn for healthcare",
    area: ["Brand", "Web", "Product"],
    image: "/projects/cover-inspired.png",
    format: "small",
  },
  {
    title: "Superpower",
    description: "A new dawn for healthcare",
    area: ["Brand", "Web", "Product"],
    image: "/projects/cover-workmade.jpg",
    format: "small",
  },
  {
    title: "Superpower",
    description: "A new dawn for healthcare",
    area: ["Brand", "Web", "Product"],
    image: "/projects/cover-prologue.png",
    format: "big",
  },
];

const ProjectGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-2 w-full">
      {projects.map(({ title, description, area, image, format }, index) => (
        <Link
          href={""}
          key={index}
          className={`
            relative
            ${format === "big" ? "col-span-5" : "col-span-3"}
          `}
        >
          <div className="absolute bottom-0 left-0 right-0 text-white px-3 py-2 flex flex-col gap-1 bg-gradient-to-b from-transparent to-[rgba(0,0,0,.6)]">
            <div className="font-brand-sm text-white">{title}</div>
            <div className="font-sans-sm text-white opacity-50 flex flex-row">
              <div>{description}</div>
              <div className="ml-auto">
                {area.map((name, index) => (
                  <span key={index} className="ml-2">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Image
            src={image}
            alt={""}
            className="object-cover w-full h-full"
            width={format === "big" ? 1067 : 637}
            height={637}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
