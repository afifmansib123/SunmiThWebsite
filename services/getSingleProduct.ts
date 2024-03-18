import { client } from "@/sanity/lib/client";

export default async function getSingleProduct(slug: string) {
  const query = `*[_type == "singleProduct" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
      productTitle,
      mainImage{alt,asset},
 subTitle,
 price,
 "pdfUrl": pdfFile.asset->url
 }[0]`;

  const data = await client.fetch(query);
  return data;
}
