

import { unstable_noStore } from "next/cache";
import { Product } from "./definitions";

async function fetchProducts() {
    unstable_noStore(); // dynamic rendering
    console.log("fetching products ...", Date.now());

    await new Promise((resolve) => setTimeout(resolve, 5000)); // dev - daha sonra bakılacak

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