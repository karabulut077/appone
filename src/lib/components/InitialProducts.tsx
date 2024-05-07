
import Link from "next/link";
import Product from "@/lib/components/Product";
import type { ProductType } from "../definitions";
import { fetchInitialProductsFromDb } from "../data";


export default async function InitialProducts() {
    const initialProducts = await fetchInitialProductsFromDb();

    const [
        electronic_data, clothing_data, cosmetic_data, market_data
    ] = parseInitialProducts(initialProducts);

    return (
        <div className="flex mt-4 grow flex-col gap-4 items-center bg-orange-100">
            <div className="flex flex-col bg-sky-200">
                <div className="flex items-center justify-center">
                    <b>elektronik</b>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    {
                        electronic_data.map(product =>
                            <Link key={product.id} href={
                                {
                                    pathname: `/product/${product.id}`
                                }
                            }>
                                <Product key={product.id} product={product} />
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col bg-sky-200">
                <div className="flex items-center justify-center">
                    <b>giyim</b>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    {
                        clothing_data.map(product =>
                            <Link key={product.id} href={`/product/${product.id}`}>
                                <Product key={product.id} product={product} />
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col bg-sky-200">
                <div className="flex items-center justify-center">
                    <b>kozmetik</b>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    {
                        cosmetic_data.map(product =>
                            <Link key={product.id} href={`/product/${product.id}`}>
                                <Product key={product.id} product={product} />
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col bg-sky-200">
                <div className="flex items-center justify-center">
                    <b>market</b>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    {
                        market_data.map(product =>
                            <Link key={product.id} href={`/product/${product.id}`}>
                                <Product key={product.id} product={product} />
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


function parseInitialProducts(initialProducts: ProductType[]) {

    let electronic_data: ProductType[] = [];
    let clothing_data: ProductType[] = [];
    let cosmetic_data: ProductType[] = [];
    let market_data: ProductType[] = [];

    initialProducts.forEach(product => {
        let category = product.category;
        switch (category) {
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