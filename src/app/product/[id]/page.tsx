
import { getProductById } from "@/lib/data";
import ProductGallery from "@/lib/components/product/ProductGallery";
import ProductComments from "@/lib/components/product/ProductComments";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  // TODO: solve an extra query to the database for data that already exists
  const product = await getProductById(id); // unnecessary
  const images = product?.images;
  return (
    <div>
      product details of <b>{product?.brand_name + " " + product?.name}</b>
      <ProductGallery images={images}/>
      <ProductComments product_id={id}/>
    </div>
  );
}