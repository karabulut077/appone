
import Link from "next/link";
import Product from "@/lib/components/Product";
import { getBestSellingProducts, getProductsOnSale, getMostVisitedProducts } from "@/lib/data";


export default async function ShowcaseProducts() {
    const bestSellingProducts = await getBestSellingProducts();
    const productsOnSale = await getProductsOnSale();
    const mostVisitedProducts = await getMostVisitedProducts();

    return (
        <div className="flex mt-4 grow flex-col gap-4 items-center bg-orange-100">
            <div className="flex flex-col bg-sky-200">
                <div className="flex items-center justify-center">
                    <b>çok satanlar</b>
                </div>
                {
                    bestSellingProducts.length == 0
                        ?
                        <div className="flex flex-row items-center justify-center gap-4">
                            bu kategoride ürün mevcut değil
                        </div>
                        :
                        <div className="flex flex-row items-center justify-center gap-4">
                            {
                                bestSellingProducts.map(product =>
                                    <Link key={product._id} href={
                                        {
                                            pathname: `/product/${product._id}`
                                        }
                                    }>
                                        <Product key={product._id} product={product} />
                                    </Link>
                                )
                            }
                        </div>
                }
            </div>
            <div className="flex flex-col bg-sky-200">
                <div className="flex items-center justify-center">
                    <b>indirimdeki ürünler</b>
                </div>
                {
                    bestSellingProducts.length == 0
                        ?
                        <div className="flex flex-row items-center justify-center gap-4">
                            bu kategoride ürün mevcut değil
                        </div>
                        :
                        <div className="flex flex-row items-center justify-center gap-4">
                            {
                                productsOnSale.map(product =>
                                    <Link key={product._id} href={
                                        {
                                            pathname: `/product/${product._id}`
                                        }
                                    }>
                                        <Product key={product._id} product={product} />
                                    </Link>
                                )
                            }
                        </div>
                }
            </div>
            <div className="flex flex-col bg-sky-200">
                <div className="flex items-center justify-center">
                    <b>en çok ziyaret edilenler</b>
                </div>
                {
                    bestSellingProducts.length == 0
                        ?
                        <div className="flex flex-row items-center justify-center gap-4">
                            bu kategoride ürün mevcut değil
                        </div>
                        :
                        <div className="flex flex-row items-center justify-center gap-4">
                            {
                                mostVisitedProducts.map(product =>
                                    <Link key={product._id} href={
                                        {
                                            pathname: `/product/${product._id}`
                                        }
                                    }>
                                        <Product key={product._id} product={product} />
                                    </Link>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}