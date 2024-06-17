
import { getProductDetails } from "@/lib/data";
import ProductGallery from "@/lib/components/product/ProductGallery";
import ProductComments from "@/lib/components/product/ProductComments";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product_details = await getProductDetails(id);
  
  if(!product_details){
    return (
      // TODO: call component if server error
      <div>
          <h2>server error</h2>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-row">
        <ProductGallery images={product_details.images} />
        <div className="flex flex-col">
          <h2>
            Ürün : {product_details.brand_name} {product_details.product_name}
          </h2>
          <h2>Satıcı : { product_details.store_name }</h2>
          <h2>Stok : { product_details.quantity }</h2>
          <h2>Fiyat : { product_details.price }</h2>
        </div>
      </div>
      <div>
        <ProductComments product_id={product_details.product_id} />
      </div>
    </div>
  );
}