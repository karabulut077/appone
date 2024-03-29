
// data source = src/lib/temp/placeholder-data.js or ./temp/placeholder-data.js

import { unstable_noStore } from "next/cache";
import { Product } from "./definitions";

export async function fetchProducts(){
    /*  
        unstable_noStore: opt out of static rendering (switch to dynamic rendering) and
            indicate such component should not be cached 
        static rendering: data rendering happens on the server at build time or during revalidation
            then result can cached in a CDN  
        dynamic rendering: data rendering happens on the server at request time 

        we're configuring to static rendering since products wont change per user and
            data does not need to be rendered at every request, but we've to
            decide revalidate value,
        revalidate: clear Data Cache and re-fetch the latest data
    */
    // unstable_noStore();
    console.log("fetching products ...");

    let idx1 = Math.floor(Math.random() * 6);
    let idx2 = Math.floor(Math.random() * 6);
    const response = await fetch('https://66055db72ca9478ea18021fc.mockapi.io/products', { next: { revalidate: 10 } });
    const products = await response.json();

    /*
        static rendering on production: 
            ?   build alırken ve re-render zamanı fonksiyonu iki kez çalıştırıyor

        static rendering on dev: 
            ?   devde build alınmadığı için dinamik rendering gibi çalışıyor
    */


    return [products[idx1], products[idx2]];
}
