import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",

  dataset: "production" || "",
});

export const urlForImage = (source: any) => {
  if (!source || !source.asset || typeof source.asset._ref !== 'string') {
    console.error("Invalid image source", source);
    return '';
  }
  return imageBuilder.image(source).auto('format').fit('max').url();
};
