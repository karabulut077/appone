
import { fetchProducts } from "@/lib/data";
import NavButton from "@/lib/components/NavButton";
import getProductsByCategory from "./actions";
import Product from "@/lib/components/Product";

export default async function Page() {
  const products = await fetchProducts();
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col rounded-lg p-4">
        <div className="flex flex-row bg-blue-300 space-x-12 h-32 shrink-0 items-center justify-center">
            <label>logo</label>
            <input type="search" placeholder="ürün arayın"/>
            <button type="submit">hesabım</button>
            <button type="submit">sepetim</button>
        </div>
        <div className="flex flex-row bg-red-300 space-x-12 justify-center">
            <NavButton handleClick={getProductsByCategory} category="elektronik"/>
            <NavButton handleClick={getProductsByCategory} category="giyim"/>
            <NavButton handleClick={getProductsByCategory} category="kozmetik"/>
            <NavButton handleClick={getProductsByCategory} category="market"/>
        </div>
      </div>
      <div className="flex mt-4 grow flex-col gap-4 bg-white-200">
          <ul>
            {
              products.map(product => {
                let item = 
                /*<li key={product.id}> 
                  {product.name} {product.category}
                </li>*/
                <Product key={product.id} product={product}/>
                return item;
              })
            }
          </ul>
      </div>
    </main>
  );
}