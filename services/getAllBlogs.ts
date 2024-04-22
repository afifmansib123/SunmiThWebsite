import { client } from "@/sanity/lib/client";
import { IBlogCardType } from "@/types";

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

  // Opt out of caching for this fetch request using headers
  const data = await client.fetch(query, undefined, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });

  return data;
}
