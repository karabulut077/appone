
import { getProductByID } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = getProductByID(id);
  
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col rounded-lg p-4">
        <div className="flex flex-row bg-blue-300 space-x-12 h-32 shrink-0 items-center justify-center">
          <label>logo</label>
          <input type="search" placeholder="ürün arayın" />
          <button type="submit">hesabım</button>
          <button type="submit">sepetim</button>
        </div>
        <div className="flex flex-row bg-red-300 space-x-12 justify-center">
          <label>elektronik</label>
          <label>giyim</label>
          <label>kozmetik</label>
          <label>market</label>
        </div>
      </div>
      <div>
        <h2>welcome to product detail page</h2>
        <h2>product id: {id}</h2>
      </div>
    </main>

  );
}