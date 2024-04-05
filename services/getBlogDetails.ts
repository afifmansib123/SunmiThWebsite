import { client } from "@/sanity/lib/client";

export default async function getBlogDetails(slug: string) {
  console.log(slug)
  const query = `
  *[_type == "post" && slug.current == '${slug}'] {
        
    title,
    mainImage,
 "currentSlug": slug.current,
   publishedAt,
   category-> {
    title
  },
    body,
     description,
    author->{
      name,
      image,
    },
}[0]`;

  const data = await client.fetch(query);
  return data;
}
