

import { unstable_noStore } from "next/cache";
import { ProductType } from "@/lib/definitions";
import { promises as fs } from "fs";

export async function getProductFromLocalFileByID(id: string) {

    console.log("fetching product from local json file ...");

    let fileData: ProductType[] = [];

    await fs.readFile('src/json/initialproducts.json', 'utf-8')
        .then((data) => {
            fileData = JSON.parse(data);
        })
        .catch((err) => {
            console.error('Error reading file:', err);
        });

    return fileData.find(product => product.id === id);
}

export async function fetchInitialProductsFromDb() {
    // toDo: tüm ürünler yerine belirli sayıda ürün çek (belki burada değil servis tarafında yapılabilir)

    unstable_noStore(); // dynamic rendering
    console.log("fetching products ...");


    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/products');
    const products: ProductType[] = await response.json();

    return products;
}