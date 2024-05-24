

import { Suspense } from "react";
import ShowcaseProducts from "@/lib/components/ShowcaseProducts";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col rounded-lg p-4">
        <div className="flex flex-row space-x-12 h-32 shrink-0 items-center justify-center bg-blue-300">
          <label>logo</label>
          <input type="search" placeholder="ürün arayınız" />
          <button type="submit">hesabım</button>
          <button type="submit">sepetim</button>
        </div>
        <div className="flex flex-row space-x-12 justify-center bg-red-300">
            <label>elektronik</label>
            <label>giyim</label>
            <label>kozmetik</label>
            <label>market</label>
        </div>
      </div>
      <Suspense fallback={<p>Loading products...</p>}>
        <ShowcaseProducts />
      </Suspense>
    </main>
  );
}