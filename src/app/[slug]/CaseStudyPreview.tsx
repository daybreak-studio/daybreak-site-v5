import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";
import React from "react";
import { CASE_STUDIES_QUERY } from "../../../sanity/lib/queries";
import CaseStudy from "./CaseStudy";

type Props = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

const CaseStudyPreview = ({ initial, params }: Props) => {
  const { data } = useQuery<SanityDocument | null>(CASE_STUDIES_QUERY, params, {
    initial,
  });
  return data ? (
    <CaseStudy data={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
};

export default CaseStudyPreview;
