import getBlogDetails from "@/services/getBlogDetails";
import { PostType } from "@/types";

import Image from "next/image";
import { ImageResponse } from "next/og";

export default async function og({ params }: { params: { slug: string } }) {
  const post: PostType = await getBlogDetails(params.slug);

  return new ImageResponse(
    (
      <div>
        <div tw="relative flex items-center justify-center">
          <Image
            width={800}
            height={700}
            src={post?.mainImage}
            alt={post?.title}
          />
          <div tw="absolute flex bg-black opacity-50 inset-0 " />
          <div tw="absolute flex items-center top-2 w-full ">
            <p tw="text-white text-4xl flex font-bold m-5">{post?.title}</p>
            <p tw="text-indigo-200 text-xl flex font-bold m-5">
              {post?.author.name}
            </p>
            <p tw="text-purple-200 text-xl flex font-bold m-5">
              {post?.publishedAt}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 900,
      height: 450,
    }
  );
}
