import { type SchemaTypeDefinition } from "sanity";

import author from "./schemas/author";
import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import gallery from "./schemas/gallery";
import post from "./schemas/post";
import bestSales from "./schemas/products/bestSales";
import productHeroImage from "./schemas/products/productHeroImage";
import products from "./schemas/products/products";
import series from "./schemas/products/series";
import singleProduct from "./schemas/products/singleProduct";
import shop from "./schemas/shop/shop";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    products,
    productHeroImage,
    series,
    singleProduct,
    gallery,
    shop,
    bestSales,
  ],
};
