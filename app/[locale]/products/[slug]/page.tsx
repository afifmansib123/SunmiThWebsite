import ProductDetails from "@/components/pdf-viewer";
import getSingleProduct from "@/services/getSingleProduct";

const PDFDJ = async ({ params }: { params: { slug: string } }) => {
  const item = await getSingleProduct(params.slug);
  return (
    <div>
      <ProductDetails pdf={item?.pdfUrl || "/404.pdf"} />
    </div>
  );
};

export default PDFDJ;
