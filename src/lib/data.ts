

import { unstable_noStore } from "next/cache";
import { Product } from "@/lib/definitions";

export async function getProductByID(id: string){
    return undefined;
}

async function fetchProducts() {
    // toDo: tüm ürünler yerine belirli sayıda ürün çek (belki burada değil servis tarafında yapılabilir)

    unstable_noStore(); // dynamic rendering
    console.log("fetching products ...", Date.now());


    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/products');
    const products: Product[] = await response.json();

    return products;
}


export async function parseProducts(){
    const products = await fetchProducts();

    let electronic_data: Product[] = [];
    let clothing_data: Product[] = [];
    let cosmetic_data: Product[] = [];
    let market_data: Product[] = [];

    products.forEach(product => {
        let category = product.category;
        switch(category){
            case "electronic":
                electronic_data.push(product);
                break;
            case "clothing":
                clothing_data.push(product);
                break;
            case "cosmetic":
                cosmetic_data.push(product);
                break;
            case "market":
                market_data.push(product);
                break;
            default:
                break;
        }
    });
    
    return [electronic_data, clothing_data, cosmetic_data, market_data];
}