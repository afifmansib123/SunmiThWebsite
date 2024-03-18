import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "image gallery",
  type: "object",
  fields: [
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        defineField({
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
        }),
      ],
      options: {
        layout: "grid",
      },
    }),
  ],
  preview: {
    select: {
      images: "images",
      image: "images.0",
    },
    prepare(selection) {
      const { images, image } = selection;

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `Alt text: ${image.alt}`,
        media: image,
      };
    },
  },
});
