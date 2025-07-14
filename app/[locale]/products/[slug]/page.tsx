import V3Page from "@/components/pages/products/V3Page";
import ProductDetails from "@/components/pdf-viewer";
import getSingleProduct from "@/services/getSingleProduct";

// export const revalidate = 30; // revalidate at most 30 seconds

const PDFDJ = async ({ params }: { params: { slug: string } }) => {
  console.log("params", params.slug);
  const item = await getSingleProduct(params.slug);
  return <div>{rederProduct(params.slug, item)}</div>;
};

export default PDFDJ;

function rederProduct<T extends { pdfUrl: string }>(slug: string, item: T) {
  switch (slug) {
    case "v3-standard":
    case "v3-scanner":
      return <V3Page />;
    default:
      return <ProductDetails pdf={item?.pdfUrl || "/404.pdf"} />;
  }
}
