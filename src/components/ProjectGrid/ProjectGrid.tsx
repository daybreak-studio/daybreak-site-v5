import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";

type Props = {
  projects: SanityDocument[];
};

const ProjectGrid = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-2 w-full">
      {projects.map(
        ({ name, headline, slug, tags, cover, coverFormat }, index) => (
          <Link
            href={slug}
            key={index}
            className={`
            relative
            ${coverFormat === "big" ? "col-span-5" : "col-span-3"}
          `}
          >
            <div className="absolute bottom-0 left-0 right-0 text-white px-3 py-2 flex flex-col gap-1 bg-gradient-to-b from-transparent to-[rgba(0,0,0,.6)]">
              <div className="font-brand-sm text-white">{name}</div>
              <div className="font-sans-sm text-white opacity-50 flex flex-row">
                <div>{headline}</div>
                <div className="ml-auto">
                  {tags &&
                    tags.map((name: any, index: number) => (
                      <span key={index} className="ml-2">
                        {name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <Image
              src={urlForImage(cover)}
              alt={""}
              className="object-cover w-full h-full"
              width={coverFormat === "big" ? 1067 : 637}
              height={637}
            />
          </Link>
        )
      )}
    </div>
  );
};

export default ProjectGrid;
