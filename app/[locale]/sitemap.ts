import getAllBlogs from "@/services/getAllBlogs";
import { PostType } from "@/types";

export default async function sitemap() {
  const baseUrl = "https://sunmith-official.vercel.app/";

  const posts: PostType[] = await getAllBlogs();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.currentSlug}`,
    lastModified: post.publishedAt,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },

    ...postUrls,
  ];
}
