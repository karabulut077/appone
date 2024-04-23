
import { getProductByID } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductByID(id);
  
  return (
      <div>
        <h2>welcome to product detail page</h2>
        <h2>product id: {id}</h2>
        {/* <h2>product object: { JSON.stringify(product) }</h2> */}
      </div>
  );
}