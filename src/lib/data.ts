
// data source = src/lib/temp/placeholder-data.js or ./temp/placeholder-data.js

import { unstable_noStore } from "next/cache";
import { Product } from "./definitions";

export async function fetchProducts(){

    unstable_noStore();
    console.log("fetching products ...", Date.now());

    let idx1 = Math.floor(Math.random() * 6);
    let idx2 = Math.floor(Math.random() * 6);
    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/products');
    const products = await response.json();

    return [products[idx1], products[idx2]];
}
