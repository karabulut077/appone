

import { unstable_noStore as noStore} from "next/cache";
import { ProductType } from "@/lib/definitions";

const SERVER_IP = process.env.SERVER_IP;
const SERVER_PORT = process.env.SERVER_PORT;

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

export async function getProductById(id: string) {
    noStore(); // dynamic rendering
    console.log("fetching product by id: ", id);

    const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/product?id=` + id);
    const json = await response.json();

    let product: ProductType | undefined = undefined;
    if(response.status == 200){
        json.data[0] && (product = json.data[0]);
    }
    else if(response.status == 500){
        console.log(json.errmsg);
    }
    return product;
}

export async function getBestSellingProducts() {

    noStore(); // dynamic rendering
    console.log("fetching bestseller products ...");

    const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/products`);
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

    const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/products`);
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

    const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/products`);
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