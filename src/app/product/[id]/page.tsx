
import { getProductByIdFromDb } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  // TODO: solve an extra query to the database for data that already exists
  const product = await getProductByIdFromDb(id); // unnecessary
  
  return (
    <div>
      <h2>real id: { id }</h2>
      <h2>id: { product?.id } </h2>
      <h2>name: { product?.name } </h2>
      <h2>category: { product?.category } </h2>
      <h2>img_src: { product?.img_src } </h2>
    </div>
  );
}