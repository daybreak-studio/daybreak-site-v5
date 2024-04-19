import React from "react";
import { loadQuery } from "../../../sanity/lib/store";
import { QueryParams, SanityDocument } from "next-sanity";
import {
  CASE_STUDIES_QUERY,
  CASE_STUDY_QUERY,
} from "../../../sanity/lib/queries";
import { draftMode } from "next/headers";
import CaseStudy from "./CaseStudy";
import CaseStudyPreview from "./CaseStudyPreview";
import { client } from "../../../sanity/lib/client";

type Props = {
  params: QueryParams;
};

export async function generateStaticParams() {
  const caseStudies = await client.fetch<SanityDocument[]>(CASE_STUDIES_QUERY);

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

const CaseStudyPage = async ({ params }: Props) => {
  const initial = await loadQuery<SanityDocument>(CASE_STUDY_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <CaseStudyPreview initial={initial} params={params} />
  ) : (
    <CaseStudy data={initial.data} />
  );
};

export default CaseStudyPage;
