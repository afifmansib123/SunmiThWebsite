import { client } from "@/sanity/lib/client";

export default async function getAllBlogs() {
  const query = `
  *[_type == 'post'] | order(publishedAt desc) {
      title,
        "currentSlug": slug.current,
        mainImage,
        description,
         publishedAt,
         category-> {
          title
        },
    }`;

  const data = await client.fetch(query);

  return data;
}
