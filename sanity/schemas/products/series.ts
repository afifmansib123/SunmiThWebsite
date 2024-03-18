import { defineField, defineType } from "sanity";

export default defineType({
  name: "series",
  title: "Series",
  type: "document",
  fields: [
    defineField({
      name: "seriesTitle",
      title: "Series Title",
      type: "string",
    }),
    defineField({
      name: "Description",
      title: "Series Description",
      type: "string",
    }),
    defineField({
      name: "singleProducts",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "singleProduct" }] }],
    }),
  ],
});
