
import Link from "next/link";
import { parseProducts } from "@/lib/data";
import Product from "@/lib/components/Product";

export default async function InitialProducts() {
    const [
        electronic_data,
        clothing_data,
        cosmetic_data,
        market_data
      ] = await parseProducts();

    return (
        <div className="flex mt-4 grow flex-col gap-4 items-center bg-orange-100">
            <div className="flex flex-col bg-sky-200">
                <div className="flex items-center justify-center">
                    <b>elektronik</b>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    {
                        electronic_data.map(product =>
                            <Link key={product.id} href={`/product/${product.id}`}>
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