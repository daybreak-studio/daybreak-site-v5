import { defineField, defineType } from "sanity";

export const fullScreenLayout = defineType({
  name: "fullScreenLayout",
  title: "Fullscreen Layout",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "string",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description:
        "What is the area of the project? (products, brand, strategy ...)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name:"object",
      title:"Credits",
      type:"array", 
      of:[{type:"object" , fields:[
        defineField({name:"name", type:"string"}),
        defineField({name:"role", type:"string"})
      ]}],
      options:{
        // layout:""
        }
      }),

    defineField({
      name: "cover",
      description: "Project cover show up on the landing page",
      type: "image",
    }),
    defineField({
      name: "coverFormat",
      title: "Cover Format",
      description: "How the project will be displayed on the landing page.",
      type: "string",
      options: {
        list: [
          { title: "Wide Cover", value: "big" },
          { title: "Narrow Cover", value: "small" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "weight",
      type: "number",
    }),
  ],
});
