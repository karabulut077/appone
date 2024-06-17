
import Image from "next/image";
import type { ProductType } from "@/lib/definitions";

export default function Product({product}: {
    product: ProductType
}){
    return(
        <div className="flex flex-col bg-lime-100">
            <Image 
                src={product.images[0]}
                width={250} height={250}
                alt={product.images[0]}
            />
            <label>
                <b>{product.brand_name}</b> {product.name}
            </label>
        </div>
    );
}