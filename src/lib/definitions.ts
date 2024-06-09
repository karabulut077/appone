

export type ProductType = {
    _id: string,
    name: string,
    brand_id: string,
    price: number,
    brand_name: string,
    images: string[]
};

export type CommentType = {
    _id: string,
    product_id: string,
    text: string
}