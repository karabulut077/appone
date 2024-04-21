

import { Suspense } from "react";
import InitialProducts from "@/lib/components/InitialProducts";

export default async function Page() {
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
      <Suspense fallback={<p>Loading products ...</p>}>
        <InitialProducts />
      </Suspense>
    </main>
  );
}