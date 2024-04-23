
import Image from "next/image";
import type { Product } from "@/lib/definitions";

export default function Product({product}: {
    product: Product
}){
    return(
        <div className="flex flex-col bg-lime-100">
            <Image 
                src={product.img_src}
                width={250} height={250}
                alt="product picture"
            />
            <label>{product.name} </label>
        </div>
    );
}