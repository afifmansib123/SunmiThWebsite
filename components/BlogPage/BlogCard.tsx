import { dateFormat } from "@/lib/formatDate";
import { urlForImage } from "@/sanity/lib/image";
import { IBlogCardType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BlogCard: FC<IBlogCardType> = ({
  title,
  mainImage,
  category,
  publishedAt,
  currentSlug,
  description,
}) => {
  return (
    <div className=" w-full">
      <Link href={`/blogs/${currentSlug}`}>
        <div className=" relative">
          <Image
            src={urlForImage(mainImage)}
            alt={title}
            width={478}
            height={320}
            className="relative overflow-hidden w-full h-full group transform transition duration-500 hover:scale-105 rounded-lg"
            quality={80}
          />
        </div>
      </Link>
      <div className="pt-2 space-y-2  text-center">
        <h2 className="text-xl font-roboto xl:text-2xl font-bold text-[#54595f]">
          {title}
        </h2>
        <div>
          <span className="text-sm font-roboto font-normal text-[#adadad]">
            {dateFormat(publishedAt)}
          </span>
        </div>
        <p className="text-sm font-roboto font-normal text-[#777] xl:text-base text-center">
          {description}
        </p>
        <Link
          className="  pt-1 text-primary text-lg font-roboto font-semibold"
          href={`/blogs/${currentSlug}`}
        >
          Load More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
