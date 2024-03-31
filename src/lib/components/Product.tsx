
import Image from "next/image";
import { Product } from "../definitions";

export default function Product({product}: {
    product: Product
}){
    return(
        <>
            <Image 
                src={"https://www.colgateprofessional.com/content/dam/cp-sites/oral-care/professional2020/en-us/products/toothbrushes/colgate-360-toothbrush.png"}
                width={250} height={250}
                alt="product picture"
            />
            <label>{product.name} </label>
            <label>({product.category})</label>
        </>
    );
}