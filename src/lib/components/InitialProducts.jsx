
import { parseProducts } from "../data";
import Product from "./Product";

export default async function InitialProducts() {
    const [
        electronic_data,
        clothing_data,
        cosmetic_data,
        market_data
      ] = await parseProducts();

    return (
        <div className="flex mt-4 grow flex-col gap-6 bg-white-200 items-center">
            <div className="flex flex-col bg-blue-300">
                <div className="flex items-center justify-center">
                    <b>elektronik</b>
                </div>
                <div className="flex flex-row items-center justify-center">
                    {
                        electronic_data.map(product =>
                            <Product key={product.id} product={product} />
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col bg-blue-300">
                <div className="flex items-center justify-center">
                    <b>giyim</b>
                </div>
                <div className="flex flex-row items-center justify-center">
                    {
                        clothing_data.map(product =>
                            <Product key={product.id} product={product} />
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col bg-blue-300">
                <div className="flex items-center justify-center">
                    <b>kozmetik</b>
                </div>
                <div className="flex flex-row items-center justify-center">
                    {
                        cosmetic_data.map(product =>
                            <Product key={product.id} product={product} />
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col bg-blue-300">
                <div className="flex items-center justify-center">
                    <b>market</b>
                </div>
                <div className="flex flex-row items-center justify-center">
                    {
                        market_data.map(product =>
                            <Product key={product.id} product={product} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}