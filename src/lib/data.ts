

import { unstable_noStore as noStore } from "next/cache";
import { ProductType, CommentType } from "@/lib/definitions";

const SERVER_IP = process.env.SERVER_IP;
const SERVER_PORT = process.env.SERVER_PORT;

export async function getProductCommentsById(product_id: string) {
    noStore(); // dynamic rendering
    console.log("fetching comments by product id: ", product_id);

    const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/comments?id=` + product_id);
    const json = await response.json();

    let comments: CommentType[] = [];
    if (response.status == 200) {
        comments = json.data;
    }
    else if (response.status == 500) {
        console.log(json.errmsg);
    }
    return comments;
}

export async function getProductById(id: string) {
    noStore(); // dynamic rendering
    console.log("fetching product by id: ", id);

    const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/product?id=` + id);
    const json = await response.json();

    let product: ProductType | undefined = undefined;
    if (response.status == 200) {
        json.data[0] && (product = json.data[0]);
    }
    else if (response.status == 500) {
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
    if (response.status == 200) {
        products = json.data;
    }
    else if (response.status == 500) {
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
    if (response.status == 200) {
        products = json.data;
    }
    else if (response.status == 500) {
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
    if (response.status == 200) {
        products = json.data;
    }
    else if (response.status == 500) {
        console.log(json.errmsg);
    }
    return products;
}