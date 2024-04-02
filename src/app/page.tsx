
import { parseProducts } from "@/lib/data";
import Product from "@/lib/components/Product";

export default async function Page() {
  const [
      electronic_data,
      clothing_data,
      cosmetic_data,
      market_data
    ] = await parseProducts();
    
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
      <div className="flex mt-4 grow flex-col gap-4 bg-white-200 items-center">
        <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <b>elektronik</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              {
                electronic_data.map(product => 
                  <Product key={product.id} product={product}/>
                )
              }
            </div>
        </div>
        <div>
            <div className="flex items-center justify-center">
              <b>giyim</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              {
                clothing_data.map(product => 
                  <Product key={product.id} product={product}/>
                )
              }
            </div>
        </div>
        <div>
            <div className="flex items-center justify-center">
              <b>kozmetik</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              {
                cosmetic_data.map(product => 
                  <Product key={product.id} product={product}/>
                )
              }
            </div>
        </div>
        <div>
            <div className="flex items-center justify-center">
              <b>market</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              {
                market_data.map(product => 
                  <Product key={product.id} product={product}/>
                )
              }
            </div>
        </div>
      </div>
    </main>
  );
}