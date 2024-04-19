import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const CASE_STUDY_QUERY = groq`*[_type == "caseStudy" && slug == $slug][0]`;
export const CASE_STUDIES_QUERY = groq`*[_type == "caseStudy" && defined(slug)] | order(weight asc)`;
