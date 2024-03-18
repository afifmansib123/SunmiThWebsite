import { client } from "@/sanity/lib/client";

export default async function getAllBestSellingProducts() {
  const query = `*[_type == 'bestSeller'] | order(_createdAt asc) {
    _id,
    shop[]->{
        _id,
        mainImage{alt,asset},
        productTitle,
        subTitle,
        price,
        'currentSlug': slug.current
      }
  }`;
  const data = await client.fetch(query);

  return data;
}
