

import { unstable_noStore as noStore} from "next/cache";
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
    noStore();

    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/product');
    const product: ProductType[] = await response.json();

    return product[0];
}

export async function getBestSellingProducts() {

    noStore(); // dynamic rendering
    console.log("fetching bestseller products ...");

    const response = await fetch('http://localhost:3004/products');
    const json = await response.json();

    let products: ProductType[] | [] = [];
    if(response.status == 200){
        products = json.data;
    }
    else if(response.status == 500){
        console.log(json.errmsg);
    }
    return products;
}

export async function getProductsOnSale() {

    noStore(); // dynamic rendering
    console.log("fetching products on sale ...");

    const response = await fetch('http://localhost:3004/products');
    const json = await response.json();

    let products: ProductType[] | [] = [];
    if(response.status == 200){
        products = json.data;
    }
    else if(response.status == 500){
        console.log(json.errmsg);
    }
    return products;
}

export async function getMostVisitedProducts() {

    noStore(); // dynamic rendering
    console.log("fetching most visited products ...");

    const response = await fetch('http://localhost:3004/products');
    const json = await response.json();

    let products: ProductType[] | [] = [];
    if(response.status == 200){
        products = json.data;
    }
    else if(response.status == 500){
        console.log(json.errmsg);
    }
    return products;
}