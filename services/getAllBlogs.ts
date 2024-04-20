import { client } from "@/sanity/lib/client";
import { IBlogCardType } from "@/types";

// Modify your getAllBlogs function to implement caching with a time-based expiration
let cachedData: IBlogCardType[] | null = null;
let lastFetchTime: number | null = null;
const CACHE_DURATION: number = 10 * 1000; // 10 seconds


export default async function getAllBlogs() {
  // Check if data is cached and within expiration time
  if (cachedData && lastFetchTime && Date.now() - lastFetchTime < CACHE_DURATION) {
    return cachedData;
  }

  // Fetch fresh data from your API
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

  // Cache the fetched data and update the last fetch time
  cachedData = data;
  lastFetchTime = Date.now();

  return data;
}
