

import { unstable_noStore } from "next/cache";
import { ProductType } from "@/lib/definitions";
import { promises as fs } from "fs";
import path from "path";

export async function getProductFromLocalFileByID(id: string) {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    let fileData: ProductType[] = [];
    const filePath = path.join('/tmp', 'initialproducts.json');

    await fs.readFile(filePath, 'utf-8')
        .then((data) => {
            console.log("fetching product from local json file successfully.", filePath);
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