import BlogCard from "@/components/BlogPage/BlogCard";
import getAllBlogs from "@/services/getAllBlogs";
import { IBlogCardType } from "@/types";
import { Metadata } from "next";

export const revalidate = 30; // revalidate at most 30 seconds

export const metadata: Metadata = {
  title: "Sunmi Official Blogs",
  description:
    "SunmiOfficial Blogs are available in the following formats and formats that are available in the official website",
  keywords: ["sunmi", "other keywords"],
  openGraph: {
    images: "/images/SUNMI TH Care +.png",
  },
};
const Blogs = async () => {
  const data: IBlogCardType[] = await getAllBlogs();
  console.log("g" , data)
  return (
    <section className="min-h-screen bg-white">
      <div className=" bg-slate-200 py-10 xl:py-24">
        <h2 className=" text-2xl font-bold sm:text-4xl xl:text-6xl font-roboto text-center text-primary">
          Blogs
        </h2>
      </div>
      <div className=" container py-10">
        {data && (
          <div className="grid  sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {data?.map((item, index) => (
              <BlogCard
                key={index}
                mainImage={item.mainImage}
                title={item.title}
                publishedAt={item.publishedAt}
                category={item?.category?.title}
                currentSlug={item.currentSlug}
                description={item.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
