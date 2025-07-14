import ProductDetails from "@/components/pdf-viewer";
import getSingleProduct from "@/services/getSingleProduct";

export const revalidate = 30; // revalidate at most 30 seconds

const PDFDJ = async ({ params }: { params: { slug: string } }) => {
	console.log("params", params.slug);
	const item = await getSingleProduct(params.slug);
	return (
		<div>
			<ProductDetails pdf={item?.pdfUrl || "/404.pdf"} />
		</div>
	);
};

export default PDFDJ;
