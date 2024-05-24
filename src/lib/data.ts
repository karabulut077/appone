

import { unstable_noStore } from "next/cache";
import { ProductType } from "@/lib/definitions";

export async function getProducts() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YWRtaW46cGFzc3dvcmQ=");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const response = await fetch('http://18.117.149.87/api/data');
    const dataArray = await response.json();

    return dataArray;
}

export async function getProductByIdFromDb(id: string) {
    unstable_noStore();

    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/product');
    const product: ProductType[] = await response.json();

    return product[0];
}

export async function getBestSellingProducts() {

    unstable_noStore(); // dynamic rendering
    console.log("fetching bestseller products ...");


    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/products');
    const products: ProductType[] = await response.json();

    return products;
}

export async function getProductsOnSale() {

    unstable_noStore(); // dynamic rendering
    console.log("fetching products on sale ...");


    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/products');
    const products: ProductType[] = await response.json();

    return products;
}

export async function getMostVisitedProducts() {

    unstable_noStore(); // dynamic rendering
    console.log("fetching most visited products ...");


    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/products');
    const products: ProductType[] = await response.json();

    return products;
}