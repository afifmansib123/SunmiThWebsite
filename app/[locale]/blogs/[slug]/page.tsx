import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dateFormat } from "@/lib/formatDate";
import { urlForImage } from "@/sanity/lib/image";
import getBlogDetails from "@/services/getBlogDetails";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import { PostType } from "@/types";
import BlockContent from "@sanity/block-content-to-react";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export const revalidate = 30; // revalidate at most 30 seconds

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: PostType = await getBlogDetails(params.slug);
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blogs/${post.currentSlug}`,
      languages: {
        "en-CA": `en-CA/blogs/${post.currentSlug}`,
      },
    },
  };
}

export default async function BlogDetails({ params }: Props) {
  const data: PostType = await getBlogDetails(params.slug);
  console.log(data, params);
  return (
    <div className="  min-h-screen bg-white">
      <div className="  container xl:max-w-[900px] ">
        <h2 className=" py-5">{data.title}</h2>
        <div className="flex pt-6 items-center gap-6">
          {data.author && (
            <div className=" inline-flex items-center gap-2">
              <Avatar>
                <AvatarImage src={urlForImage(data.author.image)} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className=" capitalize text-sm xl:text-base font-medium text-neutral-500">
                {data.author.name}
              </p>
            </div>
          )}
          <p className=" text-sm xl:text-base font-medium text-neutral-500">
            {dateFormat(data.publishedAt)}
          </p>
        </div>
        <div className=" py-8">
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={urlForImage(data.mainImage)}
                alt={data.title}
                width={1250}
                height={450}
                className="rounded-md w-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="prose  mt-10 sm:mt-20 prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <BlockContent
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset="production"
            blocks={data?.body}
          />
        </div>
      </div>
    </div>
  );
}
