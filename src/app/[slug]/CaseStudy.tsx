import { SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";

type Props = {
  data: SanityDocument;
};

const CaseStudy = ({ data }: Props) => {
  if (!data) return notFound();
  const { name, cover } = data;

  return (
    <div>
      <div>{name}</div>
      <Image src={urlForImage(cover)} alt="fdsa" width={1920} height={1080} />
    </div>
  );
};

export default CaseStudy;
