import { defineField, defineType } from "sanity";

export default defineType({
  name: "singleProduct",
  title: "Product in Series",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "productTitle",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productTitle",
        maxLength: 96,
      },
    }),
    defineField({
      name: "gallery",
      type: "gallery",
      title: "Gallery",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: {
        accept: ".pdf", // Specify the allowed file format(s)
      },
    }),
  ],
});
