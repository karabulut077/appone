
import { getProductById, getProducts } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  // TODO: solve an extra query to the database for data that already exists
  const product = await getProductById(id); // unnecessary

  return (
    <div>
        <h2>_id: {product?._id}</h2>
        <h2>name: {product?.name}</h2>
        <h2>brand: {product?.brand_name}</h2>
        <h2>price: {product?.price}</h2>
        <h2>images: {product?.images}</h2>
    </div>
  );
}