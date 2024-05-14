
import { getProductByIdFromDb, getProducts } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  // TODO: solve an extra query to the database for data that already exists
  const product = await getProductByIdFromDb(id); // unnecessary
  const dataArray: any = await getProducts();

  return (
    <div>
      <h2>real id: { id }</h2>
      <h2>id: { product?.id } </h2>
      <h2>name: { product?.name } </h2>
      <h2>category: { product?.category } </h2>
      <h2>img_src: { product?.img_src } </h2>
      <h2>server fetch: { dataArray[0].id }, { dataArray[3].name }</h2>
    </div>
  );
}