import { defineField, defineType } from "sanity";

// Define the product type
export default defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "productHeroImage",
      title: "Product Hero Image",
      type: "reference",
      to: { type: "productHeroImage" },
    }),
    defineField({
      name: "series",
      title: "series",
      type: "array",
      // to: [{ type: "series" }],
      of: [{ type: "reference", to: [{ type: "series" }] }],
    }),
  ],
});
