import { defineField, defineType } from "sanity";

export default defineType({
  name: "shop",
  title: "Shop",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "shop",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "singleProduct" }] }],
    }),
  ],
});
