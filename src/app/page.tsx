
import { fetchProducts } from "@/lib/data";


export default async function Page() {
  const products = await fetchProducts();
  
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-row space-x-12 h-32 shrink-0 items-center justify-center rounded-lg bg-blue-300 p-4">
        { <label>logo</label> }
        { <input type="search" placeholder="search products"/> }
        { <button type="submit">account</button> }
        { <button type="submit">cart</button> }
      </div>
      <div className="flex mt-4 grow flex-col gap-4 bg-white-200">
          <ul>
            {
              products.map(product => {
                let item = 
                <li key={product.id}> 
                  {product.name}
                </li>
                return item;
              })
            }
          </ul>
      </div>
    </main>
  );
}