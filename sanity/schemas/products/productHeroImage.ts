import { defineField, defineType } from "sanity";

export default defineType({
  name: "productHeroImage",
  title: "product hero image",
  type: "document",
  fields: [
    defineField({
      name: "Mobile",
      title: "Mobile",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "Dekstop",
      title: "dekstop",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
