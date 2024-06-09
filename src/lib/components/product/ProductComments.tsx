
import { getProductCommentsById } from "@/lib/data";

export default async function ProductComments({ product_id }: {
    product_id: string
}) {
    const product_comments = await getProductCommentsById(product_id);
    return (
        <div className="flex flex-col">
            {
                product_comments.map(comment => {
                    return (
                        <div key={comment._id} className="flex flex-col">
                            <div>comment id: { comment._id }</div>
                            <div>product id: { comment.product_id }</div>
                            <div>text: { comment.text }</div>
                            <div>--------------------------------------------------------</div>
                        </div>
                    )
                })
            }
        </div>
    )
}