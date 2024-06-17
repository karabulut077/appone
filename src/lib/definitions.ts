

export type ProductType = {
    _id: string,
    name: string,
    brand_id: string,
    brand_name: string,
    images: string[],
    stores: string[]
};

export type CommentType = {
    _id: string,
    product_id: string,
    text: string
};

export type StoreType = {
    _id: string,
    name: string,
    address: string,
    phone: string,
    products: string[]
};

export type ProductDetailsModel = {
    product_id: string,
    product_name: string,
    brand_id: string,
    brand_name: string,
    store_id: string,
    store_name: string,
    stock_id: string,
    quantity: number,
    price: number,
    images: string[]
}